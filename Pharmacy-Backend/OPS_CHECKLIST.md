# Production Deployment Checklist

## Pre-deployment
- [ ] All required env vars configured (see .env.example)
- [ ] CORS_ORIGINS includes production frontend HTTPS origin(s)
- [ ] DB_SSL_VERIFY=true in production
- [ ] PHARMACY_EMAIL configured for notifications
- [ ] No secrets in tracked files

## Build & Deploy
- [ ] Backend: npm ci && npm start (node, not nodemon) works
- [ ] DB init: npm run init-db runs successfully (IF NOT EXISTS)
- [ ] Frontend: npm ci && npm run build succeeds; preview tested
- [ ] VITE_API_URL points to production HTTPS backend

## Verification
- [ ] /api/test returns success from deployed backend
- [ ] Contact form submits successfully end-to-end
- [ ] Direct routes load (no SPA 404 on refresh where applicable)
- [ ] Sitemap/robots accessible
- [ ] No localhost/API calls in production build (inspect network)
- [ ] TLS certificates valid for DB and web

## Post-deployment
- [ ] Logs/error visibility configured
- [ ] Backups/retention responsibility confirmed
- [ ] Client sign-off recorded
