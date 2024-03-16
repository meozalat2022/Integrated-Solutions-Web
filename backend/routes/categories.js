import express from "express";

const router = express.Router();

import { getCategories } from "../controllers/categories.js";

router.get("/categories", getCategories);

export default router;
