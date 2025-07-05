import fasttext
import numpy as np
import os

MODEL_PATH = "cc.en.300.bin"

if not os.path.exists(MODEL_PATH):
    import urllib.request
    import gzip
    import shutil

    urllib.request.urlretrieve(
        "https://dl.fbaipublicfiles.com/fasttext/vectors-crawl/cc.en.300.bin.gz",
        "cc.en.300.bin.gz"
    )
    with gzip.open("cc.en.300.bin.gz", 'rb') as f_in:
        with open(MODEL_PATH, 'wb') as f_out:
            shutil.copyfileobj(f_in, f_out)

model = fasttext.load_model(MODEL_PATH)

def get_embedding(text):
    return model.get_sentence_vector(text)

def compute_similarity(text1, text2):
    vec1 = get_embedding(text1)
    vec2 = get_embedding(text2)

    dot = np.dot(vec1, vec2)
    norm1 = np.linalg.norm(vec1)
    norm2 = np.linalg.norm(vec2)
    similarity = dot / (norm1 * norm2)
    return round(float(similarity), 4)
