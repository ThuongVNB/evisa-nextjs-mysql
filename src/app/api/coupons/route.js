import { NextResponse } from 'next/server';
import Coupon from '@/models/Coupon';

export const GET = async (request) => {
    try {
        const result = await Coupon.findAll();
        return new NextResponse(JSON.stringify(result), { status: 200 });
    } catch (err) {
        return new NextResponse('Database Error', { status: 500 });
    }
};

export const POST = async (request) => {
    const CouponData = await request.json();
    try {
        const newCoupon = await Coupon.create(CouponData);
        return new NextResponse('Coupon has been created', { status: 201 });
    } catch (error) {
        return new NextResponse('Database Error', { status: 500 });
    }
};
