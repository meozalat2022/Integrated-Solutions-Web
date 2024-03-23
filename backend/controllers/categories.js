import Category from "../models/category.js";
export const getCategories = async (req, res, next) => {
  try {
    const allCategories = await Category.find();
    return res.status(200).json(allCategories);
  } catch (error) {
    next(error);
  }
};

export const addCategory = async (req, res, next) => {
  try {
    const category = await Category.create(req.body);
    return res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};
