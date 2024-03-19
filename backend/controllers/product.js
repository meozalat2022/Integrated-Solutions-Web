import Product from "../models/product.js";

export const addProduct = async (req, res, next) => {
  try {
    const products = await Product.create(req.body);
    return res.status(201).json(products);
  } catch (error) {
    next(error);
  }
};

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const getBestDeals = async (req, res, next) => {
  try {
    const bestDeals = await Product.find()
      .sort({ promotionRate: "desc" })
      .limit(25);
    return res.status(200).json(bestDeals);
  } catch (error) {
    next(error);
  }
};

export const getLatestProducts = async (req, res, next) => {
  try {
    const latestProducts = await Product.find()
      .sort({ createdAt: "desc" })
      .limit(25);
    return res.status(200).json(latestProducts);
  } catch (error) {
    next(error);
  }
};

export const getProductByCategory = async (req, res, next) => {
  const catId = req.params.catId;
  try {
    const productsList = await Product.find({ categoryId: catId });
    console.log(productsList);
    return res.status(200).json(productsList);
  } catch (error) {
    next(error);
  }
};
