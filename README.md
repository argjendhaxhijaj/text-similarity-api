Text Similarity Service

A backend application to compute text similarity scores between two texts using FastText embeddings served by a FastAPI microservice, with a Node.js/Express backend handling requests, MongoDB storage, and a Dockerized environment for easy deployment.

Features FastAPI backend: Uses Facebook’s FastText model to generate 300-dimensional embeddings and computes cosine similarity between text pairs. Node.js backend: Provides REST API endpoints, calls the FastAPI service for similarity computation, and stores the results in MongoDB. MongoDB: Stores text pairs and their similarity scores with timestamps. Docker & Docker Compose: Containerizes both backends, networked for seamless inter-service communication. Environment variables: Configurable URLs, database connection, and ports. Auto-download and caching: FastText model downloaded once and mounted via Docker volume to avoid re-downloads on container restart.

Prerequisites Docker and Docker Compose installed (Optional) Node.js and Python 3.11+ if running services locally without Docker

Installation with Docker

Clone the repository:

git clone https://github.com/argjendhaxhijaj/text-similarity-api.git cd text-similarity-api

Start services with Docker Compose:

docker-compose up --build

The Node.js backend will be accessible at: http://localhost:3000

The FastAPI backend will be accessible at: http://localhost:8000/docs

Use the Node.js endpoint to compute similarity: POST /compare with JSON body:

{
  "text1": "some text",
  "text2": "another text"
}
History will be accessible at: http://localhost:3000/compare/history

Check FastAPI Swagger UI for testing FastAPI directly: http://localhost:8000/docs
