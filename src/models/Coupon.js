import sequelize from '@/utils/db';
import { DataTypes } from 'sequelize';

const Coupon = sequelize.define('Coupon', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    date_start: {
        type: 'TIMESTAMP',
        allowNull: false,
    },
    date_end: {
        type: 'TIMESTAMP',
    },
    price: {
        type: DataTypes.FLOAT,
    },
    percent: {
        type: DataTypes.INTEGER,
        validate: {
            max: 100,
        },
    },
    usage_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    max_usage_limit: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    minimum_purchase_amount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    status: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
            isIn: [[0, 1]],
        },
    },
    published: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
            isIn: [[0, 1]],
        },
    },
});

export async function syncCouponModel() {
    try {
        await Coupon.sync();
    } catch (error) {
        console.error('Error creating Coupon table:', error);
    }
}

export default Coupon;
