from fastapi import FastAPI, HTTPException
from embedding_utils import compute_similarity
from pydantic import BaseModel

import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

class TextPair(BaseModel):
    text1: str
    text2: str

@app.post("/compute-embeddings")
def compute_embeddings(pair: TextPair):
    logger.info("Received texts: %s | %s", pair.text1, pair.text2)
    try:
        score = compute_similarity(pair.text1, pair.text2)
        logger.info("Similarity score: %s", score)
        return {"similarity_score": score}
    except Exception as e:
        logger.exception("Error computing similarity")
        raise HTTPException(status_code=500, detail=str(e))
