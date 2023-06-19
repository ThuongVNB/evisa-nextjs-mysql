import User from '@/models/User';

export async function isAllowed(request, checkRole = null) {
    const payload = request.headers.get('evisa');
    const decodedPayload = JSON.parse(payload);

    if (!decodedPayload) return false;

    const user = await User.findOne({
        email: decodedPayload.email,
        raw: true,
    });

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
