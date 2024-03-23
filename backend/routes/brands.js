import express from "express";

const router = express.Router();

import { getAllBrands, addBrand } from "../controllers/brands.js";

router.get("/brands", getAllBrands);
router.post("/addBrand", addBrand);

export default router;
