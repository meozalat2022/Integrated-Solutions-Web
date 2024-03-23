import express from "express";

const router = express.Router();
import {
  addProduct,
  getAllProducts,
  getBestDeals,
  getLatestProducts,
  getProductByCategory,
  getProductByBrand,
} from "../controllers/product.js";

router.post("/product", addProduct);
router.get("/products", getAllProducts);
router.get("/bestDeals", getBestDeals);
router.get("/latestProducts", getLatestProducts);
router.get("/productsByCategory/:catId", getProductByCategory);
router.get("/productsByBrand/:brId", getProductByBrand);
export default router;
