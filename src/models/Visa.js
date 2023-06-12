import { DataTypes } from 'sequelize';
import sequelize from '@/utils/db';

const Visa = sequelize.define('Visa', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    desc: {
        type: DataTypes.TEXT,
    },
});

(async () => {
    try {
        await Visa.sync();
    } catch (error) {
        console.error('Error creating Visa table:', error);
    }
})();

export default Visa;
