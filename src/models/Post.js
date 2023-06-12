import { DataTypes } from 'sequelize';
import sequelize from '@/utils/db';
import User from '@/models/User';

const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    views: {
        type: DataTypes.INTEGER,
    },
    likes: {
        type: DataTypes.INTEGER,
    },
    meta_title: {
        type: DataTypes.STRING,
    },
    meta_desc: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    },
    author: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
    updated_by: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
    },
    status: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    published: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
            isIn: [[0, 1]],
        },
    },
});

(async () => {
    try {
        await Post.sync();
        // console.log('Post table has been created (if it did not exist).');
    } catch (error) {
        console.error('Error creating Post table:', error);
    }
})();

export default Post;
