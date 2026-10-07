# Production Deployment Notes

## Backend
- Build: none (Node)
- Start: `npm start` (uses node, not nodemon)
- Dev: `npm run start:dev` or `npm run dev`
- Required env vars: see `.env.example`
- CORS: set `CORS_ORIGINS` to comma-separated production frontend origins
- DB: set `DB_SSL_VERIFY=true` in production for verified TLS
- DB init: `npm run init-db` (creates schema; safe to run multiple times with IF NOT EXISTS)

## Frontend
- Build: `npm run build`
- Preview: `npm run preview`
- Set `VITE_API_URL` to production backend HTTPS URL
