# 🤖 AI News Aggregation & Broadcasting Dashboard

> **MVP v1.0** — Built for Culinda Assignment by Shrashti Singhal

---

## 🌐 Live Demo

| Service | URL |
|---|---|
| 🌐 Frontend Dashboard | https://ainews-frontend-2itq.onrender.com |
| ⚙️ Backend API | https://ai-news-dashboard-3y3h.onrender.com |
| 📚 API Docs (Swagger) | https://ai-news-dashboard-3y3h.onrender.com/docs |

---

## 📋 Overview

A full-stack AI news aggregation dashboard that:
- Fetches from **20+ AI news sources** every 15 minutes
- **Deduplicates** articles using TF-IDF cosine similarity
- Displays a clean **dashboard** with search, tag filters, sort
- Lets users **⭐ favorite** articles persistently
- **Broadcasts** favorites via Email, LinkedIn, WhatsApp, Blog, Newsletter

---

## ✅ Features

| Feature | Status |
|---|---|
| 20+ AI source ingestion | ✅ |
| URL + semantic deduplication | ✅ |
| Impact scoring | ✅ |
| Tag extraction | ✅ |
| News feed with pagination | ✅ |
| Search & tag filter | ✅ |
| Sort by date / impact / source | ✅ |
| Favorites system (persistent DB) | ✅ |
| Email broadcast (real SMTP or simulated) | ✅ |
| LinkedIn caption generation | ✅ |
| WhatsApp group sharing | ✅ |
| Blog / Newsletter integration | ✅ |
| Insights dashboard with charts | ✅ |
| Sources admin panel | ✅ |
| Docker + Docker Compose | ✅ |
| Deployed on Render | ✅ |

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, TypeScript, Tailwind CSS, Recharts, Zustand |
| Backend | FastAPI (Python 3.11), SQLAlchemy 2.0 async, Pydantic v2 |
| Database | PostgreSQL 18 |
| Ingestion | aiohttp, feedparser, BeautifulSoup4 |
| Deduplication | TF-IDF cosine similarity (pure Python) |
| Deployment | Render (Backend + Frontend + PostgreSQL) |

---

## 🏗️ Architecture
```
[20+ Sources: RSS/API]
        │
        ▼
[Fetcher Worker — aiohttp async]  ←── runs every 15 min
        │
        ▼
[Normalizer]  →  clean HTML, extract tags, score impact
        │
        ▼
[Deduplicator]  →  URL hash + TF-IDF cosine similarity
        │
        ▼
[PostgreSQL]  ←──────────── [FastAPI REST API]
                                      │
                                      ▼
                              [React Dashboard]
                                      │
                     ┌────────────────┼────────────────┐
                     ▼                ▼                ▼
                  Email           LinkedIn          WhatsApp
                 (SMTP)          (Simulated)       (Simulated)
```

---

## 🗄️ Database Schema
```sql
sources         -- id, name, url, feed_url, type, active, last_fetched
news_items      -- id, source_id, title, summary, url, author,
                --   published_at, tags, is_duplicate, impact_score
favorites       -- id, user_id, news_item_id, created_at
broadcast_logs  -- id, favorite_id, platform, status, message, timestamp
users           -- id, name, email, role
```

---

## 📰 News Sources (20+)

| Source | Type |
|---|---|
| OpenAI Blog | RSS |
| Google AI Blog | RSS |
| Anthropic Blog | RSS |
| DeepMind Blog | RSS |
| Hugging Face Blog | RSS |
| TechCrunch AI | RSS |
| VentureBeat AI | RSS |
| The Verge AI | RSS |
| Wired AI | RSS |
| MIT Technology Review | RSS |
| Microsoft AI Blog | RSS |
| Meta AI Blog | RSS |
| arXiv cs.AI | RSS |
| arXiv cs.LG | RSS |
| Hacker News AI | RSS |
| Papers With Code | RSS |
| Stability AI Blog | RSS |
| Y Combinator Blog | RSS |
| Reddit r/MachineLearning | API |
| Product Hunt AI | RSS |

---

## 🚀 Quick Start (Local)

### Prerequisites
- Python 3.11
- Node.js 18+
- PostgreSQL 18

### 1. Clone the repo
```bash
git clone https://github.com/Prakriti-dheeraj/ai-news-dashboard.git
cd ai-news-dashboard
```

### 2. Setup Backend
```bash
cd backend
python -m venv aenv
aenv\Scripts\activate
pip install -r requirements.txt
set DATABASE_URL=postgresql+asyncpg://postgres:password@localhost:5432/ainews
uvicorn app.main:app --reload --port 8000
```

### 3. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```

### 4. Open Dashboard
```
http://localhost:3000
```

---

## 🐳 Quick Start (Docker)
```bash
git clone https://github.com/Prakriti-dheeraj/ai-news-dashboard.git
cd ai-news-dashboard
cp .env.example .env
docker-compose up --build
```

Open: http://localhost:3000

---

## 📡 API Reference

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/news/` | Paginated news feed |
| GET | `/api/news/{id}` | Single news item |
| POST | `/api/news/refresh` | Trigger background refresh |
| GET | `/api/news/meta/tags` | All tags with counts |
| GET | `/api/favorites/` | All favorites |
| POST | `/api/favorites/` | Add favorite |
| DELETE | `/api/favorites/{id}` | Remove favorite |
| POST | `/api/broadcast/` | Send broadcast |
| GET | `/api/broadcast/logs` | Broadcast history |
| GET | `/api/admin/stats` | Dashboard statistics |
| POST | `/api/admin/seed` | Seed sources + fetch |

---

## 📣 Broadcast Setup


### LinkedIn / WhatsApp / Blog / Newsletter
Currently simulated. Integrate with:
- LinkedIn: OAuth 2.0 API
- WhatsApp: Twilio or Meta Cloud API
- Blog: WordPress or Ghost CMS API
- Newsletter: Mailchimp or Beehiiv API

---

## 🎯 Evaluation Criteria Met

| Area | Implementation |
|---|---|
| Architecture | Clean ingestion → DB → API → UI flow |
| AI Integration | TF-IDF dedup, impact scoring, tag extraction |
| Data Handling | Normalization, timestamps, deduplication |
| Frontend | Clean, responsive React UI with Tailwind |
| Backend | Modular FastAPI with documented endpoints |
| Database | PostgreSQL with proper schema & migrations |
| Deployment | Deployed on Render (free tier) |
| Creativity | Charts, insights, impact scores, tag chips |
| Documentation | This README |

---

## 👤 Author

**Prakriti Dheeraj**
- GitHub: [@Prakriti-dheeraj](https://github.com/Prakriti-dheeraj)
