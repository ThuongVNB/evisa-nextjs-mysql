import { NextResponse } from 'next/server';
import Tag from '@/models/Tag';

export const GET = async (request) => {
    try {
        const result = await Tag.findAll();
        return new NextResponse(JSON.stringify(result), { status: 200 });
    } catch (err) {
        return new NextResponse('Database Error', { status: 500 });
    }
};

export const POST = async (request) => {
    const TagData = await request.json();
    try {
        const newTag = await Tag.create(TagData);
        return new NextResponse('Tag has been created', { status: 201 });
    } catch (error) {
        return new NextResponse('Database Error', { status: 500 });
    }
};
