import User from '@/models/User';

export async function isAllowed(request, checkRole = null) {
    const payload = request.headers.get('evisa');
    const decodedPayload = JSON.parse(payload);

    if (!decodedPayload) return false;
    const where = {
        where: {
            email: decodedPayload.email,
        },
        raw: true,
    };
    const user = await checkUser(where);

    if (!user || user.role !== decodedPayload.role) return false;
    if (checkRole && user.role !== checkRole) return false;

    const { url, nextUrl, headers } = request;

    // console.log('xxxxxxxxxx', url);
    // const isAuthApis = url.startsWith('/api/tags');

    return true;
}

export function isAdmin(request) {
    return isAllowed(request, 'administrator');
}

export async function checkUser(where, returnObj = true) {
    const user = await User.findOne(where);
    if (!user) return false;
    if (returnObj) return user;
    return true;
}
