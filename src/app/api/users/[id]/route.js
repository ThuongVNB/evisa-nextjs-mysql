import bcrypt from 'bcryptjs';
import { checkUser } from '@/app/authorization';
import { User } from '@/models/User';
import { sendEmail } from '@/utils/mailer';
import { stat, mkdir, writeFile } from 'fs/promises';
import mime from 'mime';
import { join } from 'path';
import { NextResponse } from 'next/server';

export const PUT = async (request, { params }) => {
    const { id } = params;
    const where = {
        where: {
            id,
        },
        raw: true,
    };
    let user;
    if (!(user = await checkUser(where))) return new NextResponse('User not found', { status: 404 });

    const formData = await request.formData();
    const userData = Object.fromEntries(formData);

    // Update password
    if (userData.old_password && userData.password && userData.password1) {
        try {
            const isPasswordCorrect = await bcrypt.compare(userData.old_password, user.password);

            if (!isPasswordCorrect || userData.password !== userData.password1) {
                return new NextResponse('Wrong Password', { status: 401 });
            }

            const hashedPassword = await bcrypt.hash(userData.password, 5);

            const result = await User.update(
                { password: hashedPassword },
                {
                    where: {
                        id,
                    },
                },
            );

            return new NextResponse('Password has been updated', { status: 200 });
        } catch (err) {
            return new NextResponse('Something went wrong', { status: 500 });
        }
    }

    try {
        const file = formData.get('avatar');
        const buffer = Buffer.from(await file.arrayBuffer());
        const relativeUploadDir = `/avatar/`;
        const uploadDir = join(process.cwd(), 'public', relativeUploadDir);

        // Make dir
        try {
            await stat(uploadDir);
        } catch (e) {
            if (e.code === 'ENOENT') {
                await mkdir(uploadDir, { recursive: true });
            } else {
                console.error('Error while trying to create directory when uploading a file\n', e);
                return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
            }
        }

        // Make file
        try {
            const filename = `${id}.${mime.getExtension(file.type)}`;
            await writeFile(`${uploadDir}/${filename}`, buffer);
            return new NextResponse('The avatar has been updated', { status: 200 });
        } catch (e) {
            return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
        }
    } catch (err) {
        return new NextResponse('Database Error', { status: 500 });
    }
};

// Activate the user
export const GET = async (request) => {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    const activation = url.searchParams.get('activation');

    try {
        const user = await User.findOne({
            where: {
                id,
            },
            raw: true,
        });

        // Remove the activation
        if (user && user.activation === activation) {
            await User.update(
                { activation: '', role: 'registered' },
                {
                    where: {
                        id,
                    },
                },
            );
        } else {
            return new NextResponse('Something went wrong', { status: 404 });
        }

        return new NextResponse('Your account is activated successfully', { status: 200 });
    } catch (err) {
        return new NextResponse('Database Error', { status: 500 });
    }
};
