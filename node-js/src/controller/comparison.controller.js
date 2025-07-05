import axios from "axios";
import Comparison from "../model/comparison.model.js";
import logger from "../util/logger.js";

export const createComparison = async (req, res) => {
  const { text1, text2 } = req.body;

  if (!text1 || !text2) {
    return res
      .status(400)
      .send({ error: "Both text1 and text2 are required." });
  }

  try {
    const FASTAPI_URL = process.env.FASTAPI_URL || "http://ai-backend:8000";

    const response = await axios.post(`${FASTAPI_URL}/compute-embeddings`, {
      text1,
      text2,
    });

    const similarityScore = response.data.similarity_score;

    await Comparison.create({
      text1,
      text2,
      similarityScore,
    });

    res.send({
      text1,
      text2,
      similarityScore,
    });
  } catch (error) {
    logger.error("Error calling FastAPI or saving to DB:", error);
    res.status(500).send({ error: "Failed to compute similarity." });
  }
};

export const readComparisons = async (req, res) => {
  try {
    const comparisons = await Comparison.find().sort({ createdAt: -1 });
    res.send(comparisons);
  } catch (error) {
    logger.error("Error fetching comparisons:", error.message);
    res.status(500).send({ error: "Failed to fetch comparisons." });
  }
};
