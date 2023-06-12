import { DataTypes } from 'sequelize';
import sequelize from '@/utils/db';
import Currency from './Currency';
import Visa_country_detail from './Visa_country_detail';

export const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    order_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    visa_detail: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Visa_country_detail,
            key: 'id',
        },
    },
    payment_method: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    total_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    original_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    discount: {
        type: DataTypes.FLOAT,
    },
    currency: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Currency,
            key: 'id',
        },
    },
    number_people: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM,
        values: ['Pending', 'Processing', 'Completed', 'Cancelled'],
        defaultValue: 'Pending',
    },
});

export async function syncOrderModel() {
    try {
        await Order.sync();
    } catch (error) {
        console.error('Error creating Order table:', error);
    }
}

export default Order;
