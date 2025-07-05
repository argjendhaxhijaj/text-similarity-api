import express from "express";
import logger from "./util/logger.js";
import ip from "ip";
import mongoose from "./config/mongodb.config.js";
import comparisonRouter from "./route/comparison.route.js";

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Comparison API!");
});

app.use("/compare", comparisonRouter);

app.listen(PORT, () => {
  logger.info(`Server running on: ${ip.address()} : ${PORT}`);
});
