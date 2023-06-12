import { DataTypes } from 'sequelize';
import sequelize from '@/utils/db';

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

(async () => {
    try {
        await User.sync();
    } catch (error) {
        console.error('Error creating User table:', error);
    }
})();

export default User;
