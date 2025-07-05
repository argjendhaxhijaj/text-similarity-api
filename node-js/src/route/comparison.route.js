import express from "express";
import {
  createComparison,
  readComparisons,
} from "../controller/comparison.controller.js";

const comparisonRouter = express.Router();
comparisonRouter.get("/history", readComparisons);
comparisonRouter.post("/", createComparison);

export default comparisonRouter;
