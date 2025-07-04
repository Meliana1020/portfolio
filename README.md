# Portfolio Monorepo

## Struktur Project

```
portfolio/
├── frontend/      # React/Next.js app
├── backend/       # Express.js + Firebase API
├── .github/       # Workflow CI/CD
├── README.md
```

## Fitur

- Frontend (React/Next.js) untuk portfolio
- Backend (Express.js)
- Kirim Email via Nodemailer
- CI/CD dengan GitHub Actions
- Deploy: Frontend (Vercel), Backend (Railway)

## Cara Menjalankan Lokal

### 1. Jalankan Backend

```bash
cd backend
npm install
npm run dev
```

### 2. Jalankan Frontend

```bash
cd frontend
npm install
npm run dev
```

### 3. Testing

- Cek endpoint backend di [http://localhost:5000/api/health](http://localhost:5000/api/health)
- Arahkan API URL di frontend ke backend lokal jika develop.

## CI/CD

- Build dan lint otomatis setiap push/PR (lihat `.github/workflows/main.yml`)
- Deploy otomatis: 
  - Frontend: [Vercel](https://vercel.com)
  - Backend: [Railway](https://railway.app)

## Deployment

### Frontend (Vercel)
- Root directory: `frontend/`
- Atur environment variable (`REACT_APP_API_URL` → URL backend)

### Backend (Railway)
- Root directory: `backend/`
- Atur environment variable (.env via Railway dashboard)
- Upload `serviceAccountKey.json` via Railway (jangan di-push ke repo)
