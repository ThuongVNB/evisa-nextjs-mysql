import { NextResponse } from 'next/server';
import Category from '@/models/Category';

export const GET = async (request) => {
    try {
        const result = await Category.findAll();
        return new NextResponse(JSON.stringify(result), { status: 200 });
    } catch (err) {
        return new NextResponse('Database Error', { status: 500 });
    }
};

export const POST = async (request) => {
    const categoryData = await request.json();
    console.log('categoryData', categoryData);
    try {
        const newCategory = await Category.create(categoryData);
        return new NextResponse('Category has been created', { status: 201 });
    } catch (error) {
        return new NextResponse('Database Error', { status: 500 });
    }
};
