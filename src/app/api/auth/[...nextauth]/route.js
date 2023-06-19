import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            async authorize(credentials) {
                try {
                    const user = await User.findOne({
                        email: credentials.email,
                        raw: true,
                    });
                    if (!user) throw new Error('User not found!');
                    if (user.activation !== '') throw new Error('Please, Activate your account in Email!');
                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
                    if (!isPasswordCorrect) throw new Error('Wrong Credentials!');

                    jwt.sign(
                        {
                            email: user.email,
                            role: user.role,
                        },
                        process.env.JWT_KEY,
                        {
                            expiresIn: process.env.JWT_EXPIRED_TIME,
                        },
                        (err, token) => {
                            user.token = 'Bearer ' + token;
                            console.log('xxxxxxxxxxxxx11111111111111111', user);
                        },
                    );
                    return user;
                } catch (err) {
                    throw new Error(err);
                }
            },
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    pages: {
        error: '/dashboard/login',
    },
});

export { handler as GET, handler as POST };
