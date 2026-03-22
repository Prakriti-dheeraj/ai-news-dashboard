# 🤖 AI News Aggregation & Broadcasting Dashboard

> MVP v1.0 — Fulfills all requirements in BRD 

## Quick Start

### Prerequisites
- Docker Desktop installed and running
- Ports 3000, 8000, 5432 available

### 1. Configure
```bash
cp .env.example .env
```

### 2. Start everything
```bash
docker-compose up --build
```

### 3. Open dashboard
```
http://localhost:3000
```

### 4. Trigger first fetch
Click "Seed & Fetch All" in Sources page, or:
```bash
curl -X POST http://localhost:8000/api/admin/seed
```

## Tech Stack
| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, TypeScript, Tailwind CSS, Recharts, Zustand |
| Backend | FastAPI, SQLAlchemy 2.0 async, Pydantic v2 |
| Database | PostgreSQL 16 |
| Ingestion | aiohttp, feedparser, BeautifulSoup4 |
| Deployment | Docker, Docker Compose |

## API Docs
- Swagger: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc