import { NextResponse } from 'next/server';
import Visa from '@/models/Visa';

export const GET = async (request) => {
    try {
        const result = await Visa.findAll();
        return new NextResponse(JSON.stringify(result), { status: 200 });
    } catch (err) {
        return new NextResponse('Database Error', { status: 500 });
    }
};

export const POST = async (request) => {
    const VisaData = await request.json();
    try {
        const newVisa = await Visa.create(VisaData);
        return new NextResponse('Visa has been created', { status: 201 });
    } catch (error) {
        return new NextResponse('Database Error', { status: 500 });
    }
};
