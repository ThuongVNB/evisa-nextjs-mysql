import { NextResponse } from 'next/server';
import Country from '@/models/Country';

export const PUT = async (request, { params }) => {
    const { code } = params;
    const dataUpdate = await request.json();

    try {
        const result = await Country.update(dataUpdate, {
            where: {
                code,
            },
        });

        return new NextResponse('The country has been updated', { status: 200 });
    } catch (err) {
        return new NextResponse('Database Error', { status: 500 });
    }
};

export const GET = async (request, { params }) => {
    const { code } = params;
    try {
        const result = await Country.findOne({
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
        const result = await Country.destroy({
            where: {
                code,
            },
        });

        return new NextResponse('The country has been deleted', { status: 200 });
    } catch (err) {
        return new NextResponse('Database Error', { status: 500 });
    }
};
