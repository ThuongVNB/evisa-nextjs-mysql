import sequelize from '@/utils/db';
import { DataTypes } from 'sequelize';
import { countryData } from './country_data';

const Country = sequelize.define('Country', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    code: {
        type: DataTypes.CHAR(2),
        allowNull: false,
        unique: true,
    },
    alias: {
        type: DataTypes.TEXT,
    },
});

export async function syncCountryModel() {
    try {
        await Country.sync();
        const { count } = await Country.findAndCountAll();
        if (count === 0) {
            await Country.bulkCreate(countryData.data);
        }
    } catch (error) {
        console.error('Error creating Country table:', error);
    }
}

export default Country;
