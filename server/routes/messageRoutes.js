import express from "express";
import { protect } from "../middlewares/auth.js";
import {
  imageGenerativeController,
  textMessageController,
} from "../controllers/messageController.js";

const messageRouter = express.Router();
messageRouter.get("/text", protect, textMessageController);
messageRouter.get("/image", protect, imageGenerativeController);

export default messageRouter;
