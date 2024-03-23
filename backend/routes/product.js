import express from "express";

const router = express.Router();
import {
  addProduct,
  getAllProducts,
  getBestDeals,
  getLatestProducts,
  getProductByCategory,
  getProductByBrand,
  getSingleProduct,
} from "../controllers/product.js";

router.post("/product", addProduct);
router.get("/products", getAllProducts);
router.get("/bestDeals", getBestDeals);
router.get("/latestProducts", getLatestProducts);
router.get("/productsByCategory/:catId", getProductByCategory);
router.get("/productsByBrand/:brId", getProductByBrand);
router.get("/getSingleProduct/:id", getSingleProduct);
export default router;
