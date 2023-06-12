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
    },
    code: {
        type: DataTypes.CHAR(3),
        allowNull: false,
        unique: true,
    },
    alias: {
        type: DataTypes.TEXT,
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
