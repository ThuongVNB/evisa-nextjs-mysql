import { DataTypes } from 'sequelize';
import sequelize from '@/utils/db';
import { currencyData } from './currency_data.js';

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

export async function syncCurrencyModel() {
    try {
        await Currency.sync();
        // await Currency.bulkCreate(currencyData.data);
    } catch (error) {
        console.error('Error creating Currency table:', error);
    }
}

export default Currency;
