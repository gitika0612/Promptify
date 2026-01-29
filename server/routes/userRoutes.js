import express from "express";
import {
  getPublishedImages,
  getUser,
  loginUSer,
  registerUser,
} from "../controllers/userController.js";
import { protect } from "../middlewares/auth.js";
import connectDB from "../configs/db.js";

const userRouter = express.Router();

// Wrap each route to connect DB first
userRouter.post("/register", registerUser);

userRouter.post("/login", loginUSer);

userRouter.get("/data", protect, getUser);

userRouter.get("/published-images", getPublishedImages);

export default userRouter;
