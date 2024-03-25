import express from "express";

import { signup, signin, signout, addToWishlist } from "../controllers/user.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.post("/addToWishlist", addToWishlist);

export default router;
