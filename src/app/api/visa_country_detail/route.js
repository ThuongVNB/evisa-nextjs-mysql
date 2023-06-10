import { NextResponse } from 'next/server';
import visa_country_detail from '@/models/visa_country_detail';

export const POST = async (request) => {
    const deltailData = await request.json();
    console.log('xxxxxxxxxxxx', deltailData);
    try {
        const result = await visa_country_detail.create(deltailData);
        return new NextResponse('Visa Detail has been added to category', { status: 201 });
    } catch (error) {
        console.log('xxxxxxxxxxxx', error);

        return new NextResponse('Database Error', { status: 500 });
    }
};
