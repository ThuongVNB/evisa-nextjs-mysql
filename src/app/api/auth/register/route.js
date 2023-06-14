import { User } from '@/models/User';
import { sendEmail } from '@/utils/mailer';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
    const userData = await request.json();
    const hashedPassword = await bcrypt.hash(userData.password, 5);
    const randomCode = (Math.random() + 1).toString(36).substring(2);
    userData.password = hashedPassword;
    userData.activation = randomCode;

    try {
        const newUser = await User.create(userData);
        const to = userData.email;
        const titleEmail = 'HelloOOOOOOOOOOO - Activation';
        const bodyEmail = `This is the body of the email: localhost:3000/api/auth/register?id=1&activation=${randomCode}`;
        await sendEmail(to, titleEmail, bodyEmail);
        return new NextResponse('User has been created', {
            status: 201,
        });
    } catch (err) {
        return new NextResponse(err.message, {
            status: 500,
        });
    }
};

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
