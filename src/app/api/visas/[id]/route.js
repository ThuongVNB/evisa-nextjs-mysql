import { NextResponse } from 'next/server';
import Visa from '@/models/Visa';

export const PUT = async (request, { params }) => {
    const { id } = params;
    const dataUpdate = await request.json();

    try {
        const result = await Visa.update(dataUpdate, {
            where: {
                id,
            },
        });

        return new NextResponse('The Visa has been updated', { status: 200 });
    } catch (err) {
        return new NextResponse('Database Error', { status: 500 });
    }
};

export const GET = async (request, { params }) => {
    const { id } = params;
    try {
        const result = await Visa.findOne({
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
        const result = await Visa.destroy({
            where: {
                id,
            },
        });

        return new NextResponse('The Visa has been deleted', { status: 200 });
    } catch (err) {
        return new NextResponse('Database Error', { status: 500 });
    }
};
