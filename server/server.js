import express from "express";
import "dotenv/config";
import cors from "cors";

import userRouter from "./routes/userRoutes.js";
import chatRouter from "./routes/chatRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import creditRouter from "./routes/creditRoutes.js";
import { stripeWebhooks } from "./controllers/webHooks.js";

const app = express();

app.use(cors());
app.use(express.json());

// Stripe webhook
app.post(
  "/api/stripe",
  express.raw({ type: "application/json" }),
  stripeWebhooks
);

app.get("/", (req, res) => {
  res.send("Server is live");
});

app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);
app.use("/api/message", messageRouter);
app.use("/api/credit", creditRouter);

app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err);
  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

export default app;
