import { NextResponse } from 'next/server';
import Country from '@/models/Country';

export const GET = async (request) => {
    try {
        const result = await Country.findAll();
        return new NextResponse(JSON.stringify(result), { status: 200 });
    } catch (err) {
        return new NextResponse('Database Error', { status: 500 });
    }
};

export const POST = async (request) => {
    const CountryData = await request.json();
    try {
        const newCountry = await Country.create(CountryData);
        return new NextResponse('Country has been created', { status: 201 });
    } catch (error) {
        return new NextResponse('Database Error', { status: 500 });
    }
};
