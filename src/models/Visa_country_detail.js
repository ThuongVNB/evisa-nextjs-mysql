import { DataTypes } from 'sequelize';
import sequelize from '@/utils/db';
import Country from '@/models/Country';
import Visa from '@/models/Visa';
import Currency from '@/models/Currency';

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
    status: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
});

(async () => {
    try {
        await Visa_country_detail.sync();
    } catch (error) {
        console.error('Error creating Visa_country_detail table:', error);
    }
})();

export default Visa_country_detail;
