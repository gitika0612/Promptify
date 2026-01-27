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
userRouter.post("/register", async (req, res) => {
  await connectDB();
  return registerUser(req, res);
});

userRouter.post("/login", async (req, res) => {
  await connectDB();
  return loginUSer(req, res);
});

userRouter.get("/data", protect, getUser); // perfect

userRouter.get("/published-images", async (req, res) => {
  await connectDB();
  return getPublishedImages(req, res);
});

export default userRouter;
