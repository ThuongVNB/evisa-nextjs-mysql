import { NextResponse } from 'next/server';
const legacyPrefixes = ['/dashboard/', '/api/migrate/'];

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const { pathname } = request.nextUrl;
    // if (legacyPrefixes.some((prefix) => pathname.startsWith(prefix))) {
    //     return new NextResponse('okkkkkkkkkk', { status: 200 });
    // }

    // return new NextResponse('okkkkkkkkkk', { status: 200 });

    // return NextResponse.redirect(new URL('/', request.url));
}

// See "Matching Paths" below to learn more

// export const config = {
//     matcher: '/dashboard/:path*',
// };
