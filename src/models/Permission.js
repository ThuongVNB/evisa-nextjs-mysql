import sequelize from '@/utils/db';
import { DataTypes } from 'sequelize';
import { readdirSync } from 'fs';
import { join } from 'path';

const Permission = sequelize.define('Permission', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    api: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    method: {
        type: DataTypes.CHAR(10),
        validate: {
            isIn: [['GET', 'POST', 'PUT', 'PATCH', 'DELETE']],
        },
    },
});

export async function syncPermissionModel() {
    try {
        await Permission.sync();

        const { count } = await Permission.findAndCountAll();
        if (count === 0) {
            const apiDirectory = join(process.cwd(), 'src/app/api');
            const apiDirectories = readdirSync(apiDirectory);
            const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];
            const result = [];

            for (const endpoint of apiDirectories) {
                for (const method of methods) {
                    result.push({ api: '/api/' + endpoint, method });
                }
            }

            await Permission.bulkCreate(result);
        }
    } catch (error) {
        console.error('Error creating Permission table:', error);
    }
}

export default Permission;
