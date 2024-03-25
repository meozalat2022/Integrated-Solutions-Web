import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
export const signup = async (req, res, next) => {
  const { firstName, lastName, email, password, confirmPassword, imageUrl } =
    req.body;

  try {
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return next(errorHandler(404, "User already exists"));
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      imageUrl,
    });
    await user.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(404, "Wrong email or password"));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const signout = async (req, res, next) => {
  try {
    res.clearCookie("access)token");
    res.status(200).json("Signed Out");
  } catch (error) {
    next(error);
  }
};

export const addToWishlist = async (req, res, next) => {
  const { userId, productId } = req.body;
  try {
    const loggedInUser = await User.findOne({ _id: userId }).populate(
      "wishList"
    );
    const foundProduct = loggedInUser.wishList.find(
      (item) => item.id === productId
    );
    if (!foundProduct) {
      loggedInUser.wishList.push(productId);
      await loggedInUser.save();
      return;
    } else {
      console.log("product found");
    }
    return res.status(201).json(loggedInUser);
  } catch (error) {
    next(error);
  }
};
