import express from "express";

const router = express.Router();

import { getCategories, addCategory } from "../controllers/categories.js";

router.get("/categories", getCategories);
router.post("/addCategory", addCategory);

export default router;
