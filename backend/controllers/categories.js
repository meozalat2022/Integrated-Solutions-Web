import Category from "../models/category.js";
export const getCategories = async (req, res, next) => {
  try {
    const allCategories = await Category.find();
    return res.status(200).json(allCategories);
  } catch (error) {
    next(error);
  }
};
