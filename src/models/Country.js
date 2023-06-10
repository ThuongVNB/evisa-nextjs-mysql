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
        allowNull: true,
        unique: true,
    },
    alias: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    desc: {
        type: DataTypes.TEXT,
        allowNull: true,
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
