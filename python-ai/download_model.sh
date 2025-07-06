echo "[INFO] Downloading FastText model..."
curl -L https://dl.fbaipublicfiles.com/fasttext/vectors-crawl/cc.en.300.bin.gz -o cc.en.300.bin.gz

echo "[INFO] Unzipping model file..."
gunzip -f cc.en.300.bin.gz
echo "[SUCCESS] Model ready."