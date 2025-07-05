import mongoose from "mongoose";
import dotenv from "dotenv";
import logger from "../util/logger.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    logger.info("MongoDB connected successfully");
  })
  .catch((err) => {
    logger.error("MongoDB connection error:", err);
  });

export default mongoose;
