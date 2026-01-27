import express from "express";
import { protect } from "../middlewares/auth.js";
import { getPlans, purchasePlan } from "../controllers/creditController.js";
import connectDB from "../configs/db.js";

const creditRouter = express.Router();

creditRouter.get("/plan", async (req, res) => {
  await connectDB();
  return getPlans(req, res);
});

creditRouter.post("/purchase", protect, async (req, res) => {
  await connectDB();
  return purchasePlan(req, res);
});

export default creditRouter;
