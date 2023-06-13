import { NextResponse } from 'next/server';

export const GET = async (request) => {
    try {
        const result = await Currency.findAll();
        return new NextResponse(JSON.stringify(result), { status: 200 });
    } catch (err) {
        return new NextResponse('Database Error', { status: 500 });
    }
};

export const POST = async (request) => {
    const CurrencyData = await request.json();

    try {
        const newCurrency = await Currency.create(CurrencyData);
        return new NextResponse('Currency has been created', { status: 201 });
    } catch (error) {
        return new NextResponse('Database Error', { status: 500 });
    }
};
