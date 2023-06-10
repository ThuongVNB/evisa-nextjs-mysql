import { NextResponse } from 'next/server';
import Post from '@/models/Post';

export const GET = async (request) => {
    // const url = new URL(request.url);
    // const id = url.searchParams.get("id");
    try {
        const result = await Post.findAll();
        return new NextResponse(JSON.stringify(result), { status: 200 });
    } catch (err) {
        return new NextResponse('Database Error', { status: 500 });
    }
};

export const POST = async (request) => {
    const { title, meta_desc, meta_title, image, content, slug, author, updated_by, status } = await request.json();
    //  const body = await request.json();
    console.log(body);
    try {
        const newPost = await Post.create({
            title,
            meta_desc,
            meta_title,
            image,
            content,
            slug,
            author,
            updated_by,
            status,
        });

        return new NextResponse('Post has been created', { status: 201 });
    } catch (error) {
        return new NextResponse('Database Error', { status: 500 });
    }
};
