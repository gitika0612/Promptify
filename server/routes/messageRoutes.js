import express from "express";
import { protect } from "../middlewares/auth.js";
import {
  imageGenerativeController,
  textMessageController,
} from "../controllers/messageController.js";
import connectDB from "../configs/db.js";

const messageRouter = express.Router();

// Wrap each route to connect DB first
messageRouter.get("/text", protect, async (req, res) => {
  await connectDB();
  return textMessageController(req, res);
});

messageRouter.get("/image", protect, async (req, res) => {
  await connectDB();
  return imageGenerativeController(req, res);
});

export default messageRouter;
