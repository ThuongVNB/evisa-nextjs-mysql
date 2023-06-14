import { NextResponse } from 'next/server';
import Currency from '@/models/Currency';

export const PUT = async (request, { params }) => {
    const { code } = params;
    const dataUpdate = await request.json();

    try {
        const result = await Currency.update(dataUpdate, {
            where: {
                code,
            },
        });

        return new NextResponse('The Currency has been updated', { status: 200 });
    } catch (err) {
        return new NextResponse('Database Error', { status: 500 });
    }
};

export const GET = async (request, { params }) => {
    const { code } = params;
    try {
        const result = await Currency.findOne({
            where: {
                code,
            },
        });
        return new NextResponse(JSON.stringify(result), { status: 200 });
    } catch (err) {
        return new NextResponse('Database Error', { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    const { code } = params;

    try {
        const result = await Currency.destroy({
            where: {
                code,
            },
        });

        return new NextResponse('The Currency has been deleted', { status: 200 });
    } catch (err) {
        return new NextResponse('Database Error', { status: 500 });
    }
};
