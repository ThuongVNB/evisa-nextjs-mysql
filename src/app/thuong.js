import User from '@/models/User';
import { getSortedRoutes } from 'next/dist/next-server/lib/router/utils/sorted-routes';

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

    // Get all routes
    const allRoutes = getSortedRoutes();

    // Filter out only the API routes
    const apiRoutes = allRoutes.filter((route) => route.page.startsWith('/api/'));

    // Extract the API route paths
    const apiRoutePaths = apiRoutes.map((route) => route.page.substring('/api'.length));

    console.log(apiRoutePaths);

    console.log('xxxxxxxxxx');
    return false;
}

export function isAdmin(request) {
    return isAllowed(request, 'administrator');
}
