import express from "express";
import {
  createChat,
  deleteChat,
  getChats,
} from "../controllers/chatController.js";
import { protect } from "../middlewares/auth.js";
import connectDB from "../configs/db.js";

const chatRouter = express.Router();

// chatRouter.get("/create", protect, async (req, res) => {
//   await connectDB();
//   return createChat(req, res);
// });
chatRouter.get("/create", protect, createChat);

// chatRouter.get("/get", protect, async (req, res) => {
//   await connectDB();
//   return getChats(req, res);
// });
chatRouter.get("/get", protect, getChats);

// chatRouter.post("/delete", protect, async (req, res) => {
//   await connectDB();
//   return deleteChat(req, res);
// });
chatRouter.post("/delete", protect, deleteChat);

export default chatRouter;
