import express from "express";
import { protect } from "../middlewares/auth.js";
import {
  imageGenerativeController,
  textMessageController,
} from "../controllers/messageController.js";
import connectDB from "../configs/db.js";

const messageRouter = express.Router();

// Wrap each route to connect DB first
messageRouter.post("/text", protect, textMessageController);

messageRouter.post("/image", protect, imageGenerativeController);

export default messageRouter;
