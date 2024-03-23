import Product from "../models/product.js";
import Category from "../models/category.js";
import Brand from "../models/brand.js";
export const addProduct = async (req, res, next) => {
  // const { categoryId, brandId } = req.body;
  try {
    const addedProduct = await Product.create(req.body);
    // const foundCategory = await Category.findById(categoryId);
    // foundCategory.products.push(addedProduct);
    // await foundCategory.save();
    // const foundBrand = await Brand.findById(brandId);
    // foundBrand.products.push(addedProduct);
    // await foundBrand.save();
    return res.status(201).json(addedProduct);
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
  const id = catId.slice(2);
  try {
    const productsList = await Product.find({
      categoryId: id,
    });
    return res.status(200).json(productsList);
  } catch (error) {
    next(error);
  }
};

export const getProductByBrand = async (req, res, next) => {
  const brId = req.params.brId;
  const id = brId.slice(2);

  try {
    const productsList = await Product.find({ brandId: id });
    console.log(productsList);
    return res.status(201).json(productsList);
  } catch (error) {
    next(error);
  }
};
