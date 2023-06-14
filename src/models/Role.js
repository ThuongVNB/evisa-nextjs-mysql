import sequelize from '@/utils/db';
import { DataTypes } from 'sequelize';
import { roleData } from './role_data';

const Role = sequelize.define('Role', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    value: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});

export async function syncRoleModel() {
    try {
        await Role.sync();
        const { count } = await Role.findAndCountAll();
        if (count === 0) {
            await Role.bulkCreate(roleData.data);
        }
    } catch (error) {
        console.error('Error creating Role table:', error);
    }
}

export default Role;
