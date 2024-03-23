import Brand from "../models/brand.js";
export const getAllBrands = async (req, res, next) => {
  try {
    const allBrands = await Brand.find();
    return res.status(200).json(allBrands);
  } catch (error) {
    next(error);
  }
};

export const addBrand = async (req, res, next) => {
  console.log(req.body);
  try {
    const brands = await Brand.create(req.body);
    return res.status(201).json(brands);
  } catch (error) {
    next(error);
  }
};
