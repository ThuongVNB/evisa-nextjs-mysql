import { NextResponse } from 'next/server';
import Tag from '@/models/Tag';

export const PUT = async (request, { params }) => {
    const { id } = params;
    const dataUpdate = await request.json();

    try {
        const result = await Tag.update(dataUpdate, {
            where: {
                id,
            },
        });

        return new NextResponse('The Tag has been updated', { status: 200 });
    } catch (err) {
        return new NextResponse('Database Error', { status: 500 });
    }
};

export const GET = async (request, { params }) => {
    const { id } = params;
    try {
        const result = await Tag.findOne({
            where: {
                id,
            },
        });
        return new NextResponse(JSON.stringify(result), { status: 200 });
    } catch (err) {
        return new NextResponse('Database Error', { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    const { id } = params;

    try {
        const result = await Tag.destroy({
            where: {
                id,
            },
        });

        return new NextResponse('The Tag has been deleted', { status: 200 });
    } catch (err) {
        return new NextResponse('Database Error', { status: 500 });
    }
};
