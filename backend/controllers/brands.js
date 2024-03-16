import Brand from "../models/brand.js";
export const getAllBrands = async (req, res, next) => {
  try {
    const allBrands = await Brand.find();
    return res.status(200).json(allBrands);
  } catch (error) {
    next(error);
  }
};
