import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const apiExceptGet = [
    '/api/categories/',
    '/api/countries/',
    '/api/currencies/',
    '/api/posts/',
    '/api/roles/',
    '/api/tags/',
    '/api/visa_country_detail/',
    '/api/visas/',
];

const isAuthApis = (url) => apiExceptGet.some((page) => page.startsWith(url));

export async function middleware(request) {
    const { pathname } = request.nextUrl;
    const { url, nextUrl, headers } = request;

    if (isAuthApis && request.method !== 'GET') {
        const jwtToken = headers.get('authorization')?.split(' ')[1];
        const jsonPayload = await validateToken(jwtToken);
        if (jsonPayload === false) return new NextResponse('Invalid or expired token', { status: 401 });

        // Clone the request headers and set values
        const requestHeaders = new Headers(request.headers);
        requestHeaders.set('evisa', jsonPayload);

        const response = NextResponse.next({
            request: {
                headers: requestHeaders,
            },
        });

        return response;
    }

    // console.log('xxxxxxxauthorizationxxxxxxx', request);

    // return new NextResponse('okkkkkkkkkk', { status: 200 });

    // return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
    matcher: [
        '/api/categories/',
        '/api/countries/',
        '/api/currencies/',
        '/api/posts/',
        '/api/roles/',
        '/api/tags/',
        '/api/visa_country_detail/',
        '/api/visas/',
    ],
};

async function validateToken(jwtToken) {
    if (!jwtToken) return false;

    try {
        const { email, exp, role } = jwt.decode(jwtToken);
        if (!email || !role) return false;

        const currentTimestamp = Math.floor(Date.now() / 1000);

        if (exp > currentTimestamp) {
            const payload = {
                email,
                role,
            };

            return JSON.stringify(payload);
        }
        return false;
    } catch (error) {
        return false;
    }
}
