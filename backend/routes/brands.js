import express from "express";

const router = express.Router();

import { getAllBrands } from "../controllers/brands.js";

router.get("/brands", getAllBrands);

export default router;
