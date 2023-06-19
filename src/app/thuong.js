import User from '@/models/User';
import { readdirSync } from 'fs';
import { join } from 'path';

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

    // const apiDirectory = join(process.cwd(), 'app/');
    // const apiFiles = readdirSync(apiDirectory);

    // console.log('xxxxxxxxxx', apiFiles);

    return true;
}

export function isAdmin(request) {
    return isAllowed(request, 'administrator');
}
