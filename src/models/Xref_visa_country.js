import { DataTypes } from 'sequelize';
import sequelize from '@/utils/db';
import Country from './Country';
import Visa_country_detail from './Visa_country_detail';

const Xref_visa_country = sequelize.define('Xref_visa_country', {
    country_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Country,
            key: 'id',
        },
    },
    allowed_country: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Country,
            key: 'id',
        },
    },
    visa_detail: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Visa_country_detail,
            key: 'id',
        },
    },
});

(async () => {
    try {
        await Xref_visa_country.sync();
    } catch (error) {
        console.error('Error creating Xref_visa_country table:', error);
    }
})();

export default Xref_visa_country;
