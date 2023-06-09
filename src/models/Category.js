import { DataTypes } from 'sequelize';
import sequelize from "@/utils/db";

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

(async () => {
  try {
    await Category.sync();
  } catch (error) {
    console.error('Error creating Category table:', error);
  }
})();

export default Category;
