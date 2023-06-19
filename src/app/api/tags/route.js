import Tag from '@/models/Tag';
import { NextResponse } from 'next/server';
import { isAllowed } from '@/app/thuong';

export const GET = async (request) => {
    try {
        const result = await Tag.findAll();
        return new NextResponse(JSON.stringify(result), { status: 200 });
    } catch (err) {
        return new NextResponse('Database Error', { status: 500 });
    }
};

export const POST = async (request) => {
    if (!(await isAllowed(request))) return new NextResponse('You do not have permission', { status: 401 });
    // const a = await isAuth(request);

    // console.log('xxxxxxxxxxxxxxxx', a);

    // if (!isAuthorized(request, ['administrator', 'moderator', 'registered'])) {
    //     return new NextResponse('You do not have permission', { status: 401 });
    // }

    const TagData = await request.json();
    try {
        // const newTag = await Tag.create(TagData);
        return new NextResponse('Tag has been created', { status: 201 });
    } catch (error) {
        return new NextResponse('Database Error', { status: 500 });
    }
};
