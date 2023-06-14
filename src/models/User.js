import { DataTypes } from 'sequelize';
import sequelize from '@/utils/db';
import Role from './Role';
import Country from './Country';

export const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: {
        type: DataTypes.STRING,
    },
    middle_name: {
        type: DataTypes.STRING,
    },
    last_name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
    },
    date_of_birth: {
        type: 'TIMESTAMP',
    },
    phone_number: {
        type: DataTypes.STRING,
    },
    activation: {
        type: DataTypes.STRING,
    },
    role: {
        type: DataTypes.STRING,
        references: {
            model: Role,
            key: 'value',
        },
    },
    country_of_residence: {
        type: DataTypes.INTEGER,
        references: {
            model: Country,
            key: 'id',
        },
    },
    nationality: {
        type: DataTypes.INTEGER,
        references: {
            model: Country,
            key: 'id',
        },
    },
    oversea_family: {
        type: DataTypes.BOOLEAN,
    },
    passport_expired_time: {
        type: 'TIMESTAMP',
    },
    parent_user: {
        type: DataTypes.INTEGER,
    },
    gender: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
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

export async function syncUserModel() {
    try {
        await User.sync();
    } catch (error) {
        console.error('Error creating User table:', error);
    }
}

export default User;
