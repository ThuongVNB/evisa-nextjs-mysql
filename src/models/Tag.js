import { DataTypes } from 'sequelize';
import sequelize from '@/utils/db';

const Tag = sequelize.define('Tag', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING,
        unique: true,
    },
});

(async () => {
    try {
        await Tag.sync();
    } catch (error) {
        console.error('Error creating Tag table:', error);
    }
})();

export default Tag;
