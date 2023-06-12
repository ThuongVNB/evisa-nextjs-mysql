import { DataTypes } from 'sequelize';
import sequelize from '@/utils/db';

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
    desc: {
        type: DataTypes.TEXT,
    },
});

(async () => {
    try {
        await Country.sync();
    } catch (error) {
        console.error('Error creating Country table:', error);
    }
})();

export default Country;
