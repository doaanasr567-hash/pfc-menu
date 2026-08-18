# ===== P.F.C Restaurant - Dockerfile =====
# Builds the Node.js + Express + SQLite backend into a container
# ready for Back4app Containers, Zeabur, or any Docker host.

FROM node:20-bookworm-slim

# better-sqlite3 needs to compile a native module, so we need basic
# build tools available during npm install.
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install dependencies first (better Docker layer caching)
COPY package*.json ./
RUN npm install --omit=dev

# Copy the rest of the app
COPY . .

# The app reads PORT from the environment (defaults to 3000)
ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]
