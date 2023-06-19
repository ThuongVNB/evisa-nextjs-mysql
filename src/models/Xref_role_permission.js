import { DataTypes } from 'sequelize';
import sequelize from '@/utils/db';
import Permission from './Permission';
import Role from './Role';

const Xref_role_permission = sequelize.define('Xref_role_permission', {
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Role,
            key: 'id',
        },
    },
    permission_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Permission,
            key: 'id',
        },
    },
});

export async function syncXref_role_permissionModel() {
    try {
        await Xref_role_permission.sync();
    } catch (error) {
        console.error('Error creating Xref_role_permission table:', error);
    }
}

export default Xref_role_permission;
