import mongoose from "mongoose";

const comparisonSchema = new mongoose.Schema(
  {
    text1: {
      type: String,
      required: true,
    },
    text2: {
      type: String,
      required: true,
    },
    similarityScore: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Comparison = mongoose.model("Comparison", comparisonSchema);

export default Comparison;
