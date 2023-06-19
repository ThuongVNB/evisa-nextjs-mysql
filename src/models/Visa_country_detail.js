import { DataTypes } from 'sequelize';
import sequelize from '@/utils/db';
import Country from './Country';
import Visa from './Visa';
import Currency from './Currency';
import Coupon from './Coupon';

const Visa_country_detail = sequelize.define('Visa_country_detail', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    country_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Country,
            key: 'id',
        },
    },
    visa: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Visa,
            key: 'id',
        },
    },
    validity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    processing_times: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    standard_fee: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    goverment_fee: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    requirement_desc: {
        type: DataTypes.TEXT,
    },
    currency: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Currency,
            key: 'id',
        },
    },
    coupon: {
        type: DataTypes.STRING,
        references: {
            model: Coupon,
            key: 'code',
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

export async function syncVisa_country_detailModel() {
    try {
        await Visa_country_detail.sync();
    } catch (error) {
        console.error('Error creating Visa_country_detail table:', error);
    }
}
export default Visa_country_detail;
