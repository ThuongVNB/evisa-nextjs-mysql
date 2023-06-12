import { NextResponse } from 'next/server';
import Role from '@/models/Role';

export const GET = async (request) => {
    try {
        const result = await Role.findAll();
        return new NextResponse(JSON.stringify(result), { status: 200 });
    } catch (err) {
        return new NextResponse('Database Error', { status: 500 });
    }
};

export const POST = async (request) => {
    const RoleData = await request.json();

    try {
        const newRole = await Role.create(RoleData);
        return new NextResponse('Role has been created', { status: 201 });
    } catch (error) {
        return new NextResponse('Database Error', { status: 500 });
    }
};
