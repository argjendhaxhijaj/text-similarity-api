import fasttext
import numpy as np
import os
import logging

MODEL_PATH = "cc.en.300.bin"

if not os.path.isfile(MODEL_PATH):
    raise FileNotFoundError(f"FastText model not found at {MODEL_PATH}. Make sure it's built into the image.")

logging.info("Loading FastText model...")
model = fasttext.load_model(MODEL_PATH)
logging.info("Model loaded successfully.")

def get_embedding(text):
    return model.get_sentence_vector(text)

def compute_similarity(text1, text2):
    vec1 = get_embedding(text1)
    vec2 = get_embedding(text2)
    dot = np.dot(vec1, vec2)
    norm1 = np.linalg.norm(vec1)
    norm2 = np.linalg.norm(vec2)
    return round(float(dot / (norm1 * norm2)), 4)
