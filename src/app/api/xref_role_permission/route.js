import Xref_role_permission from '@/models/xref_role_permission';
import { NextResponse } from 'next/server';
import { isAdmin } from '@/app/authorization';

export const POST = async (request) => {
    if (!(await isAdmin(request))) return new NextResponse('You do not have permission', { status: 401 });

    const xrefData = await request.json();
    try {
        const result = await Xref_role_permission.create(xrefData);
        return new NextResponse('The permission has been added', { status: 201 });
    } catch (error) {
        return new NextResponse('Database Error', { status: 500 });
    }
};

export const PUT = async (request) => {
    const { post_id, old_post_id, category_id, old_category_id } = await request.json();

    //   const formData = await request.formData();
    //   const  { post_id, old_post_id, category_id, old_category_id } = Object.fromEntries(formData);
    // console.log('xxxxxxxxxxxxx', { post_id, old_post_id, category_id, old_category_id });

    try {
        const result = await xref_role_permission.update(
            { post_id, category_id },
            {
                where: { post_id: old_post_id, category_id: old_category_id },
            },
        );

        return new NextResponse('Post has been changed category', { status: 200 });
    } catch (err) {
        return new NextResponse('Database Error', { status: 500 });
    }
};
