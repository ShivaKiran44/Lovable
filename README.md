# AI Powered Web App Builder

## Overview

This repository contains:
- `server/`: Node.js + Express backend with MongoDB and JWT auth
- `client/`: React + Vite frontend

## Local development

### Backend
1. Copy `server/.env.example` to `server/.env`
2. Fill in your MongoDB URI and secrets
3. Install dependencies:
   ```bash
   cd server
   npm install
   ```
4. Start the backend:
   ```bash
   npm run dev
   ```

### Frontend
1. Copy `client/.env.example` to `client/.env`
2. Install dependencies:
   ```bash
   cd client
   npm install
   ```
3. Start the frontend:
   ```bash
   npm run dev
   ```

## Environment variables

### Backend (`server/.env`)
- `PORT=5000`
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - JWT signing secret
- `JWT_EXPIRES_IN` - token expiration (e.g. `7d`)
- `GEMINI_API_KEY` - Gemini / OpenAI API key
- `CLIENT_URL` - deployed frontend URL (e.g. `https://<your-site>`)

### Frontend (`client/.env`)
- `VITE_API_URL=http://localhost:5000/api`

## Recommended deployment

### Backend: Render or Railway
1. Create a new web service connected to this repo
2. Set the build command to:
   ```bash
   npm install
   ```
3. Set the start command to:
   ```bash
   npm start
   ```
4. Add environment variables on the host:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `JWT_EXPIRES_IN`
   - `GEMINI_API_KEY`
   - `CLIENT_URL=https://<your-frontend-url>`

### Frontend: Vercel or Netlify
1. Deploy the `client/` folder
2. Set the environment variable:
   - `VITE_API_URL=https://<your-backend-url>/api`
3. Use the `main` or `feature/upload` branch as your deployment source

## Important

- Do not commit `.env` files.
- Keep secrets in your deployment environment settings only.
- If you already pushed secrets, rotate them immediately.
