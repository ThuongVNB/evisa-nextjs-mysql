import { DataTypes } from 'sequelize';
import sequelize from '@/utils/db';

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
});

(async () => {
    try {
        await Role.sync();
    } catch (error) {
        console.error('Error creating Role table:', error);
    }
})();

export default Role;
