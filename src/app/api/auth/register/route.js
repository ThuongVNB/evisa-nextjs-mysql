import { User } from '@/models/User';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
    const userData = await request.json();
    const hashedPassword = await bcrypt.hash(userData.password, 5);
    userData.password = hashedPassword;

    try {
        const newUser = await User.create(userData);
        return new NextResponse('User has been created', {
            status: 201,
        });
    } catch (err) {
        return new NextResponse(err.message, {
            status: 500,
        });
    }
};
