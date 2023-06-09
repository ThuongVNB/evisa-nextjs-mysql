import { DataTypes } from 'sequelize';
import sequelize from "@/utils/db";
import User from "@/models/User";

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  views: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  likes: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  meta_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  meta_desc: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  author: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: User,
      key: 'id',
  }},
  updated_by: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: User,
      key: 'id',
  }},
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
