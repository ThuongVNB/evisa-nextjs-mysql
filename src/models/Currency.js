import { DataTypes } from 'sequelize';
import sequelize from '@/utils/db';

const Currency = sequelize.define('Currency', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name_plural: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    code: {
        type: DataTypes.CHAR(3),
        allowNull: true,
        unique: true,
    },
    alias: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
});

(async () => {
    try {
        await Currency.sync();
    } catch (error) {
        console.error('Error creating Currency table:', error);
    }
})();

export default Currency;
