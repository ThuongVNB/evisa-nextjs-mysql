import { DataTypes } from 'sequelize';
import sequelize from "@/utils/db";
import Post from "@/models/Post";
import Category from "@/models/Category";

const Xref_post_category = sequelize.define('Xref_post_category', {
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Post,
      key: 'id',
  }},
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Category,
      key: 'id',
  }},
});

(async () => {
  try {
    await Xref_post_category.sync();
  } catch (error) {
    console.error('Error creating Xref_post_category table:', error);
  }
})();

export default Xref_post_category;
