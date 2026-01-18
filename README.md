# Full Stack Developer Portfolio

A high-performance personal portfolio application built with the **MERN Stack** and **Next.js**, featuring a decoupled architecture, type-safe APIs, and a modern "Bento Grid" UI.

## Features

### Frontend (Client)
- **Next.js 15 (App Router):** Server-side rendering for optimal performance and SEO.
- **Bento Grid Layout:** Modern, responsive grid design for showcasing experience and skills.
- **Dark Mode UI:** Professional dark aesthetic (`#111827`) with glassmorphism effects.
- **Real-time Search:** Debounced filtering for projects with instant UI updates.
- **Type Safety:** Full TypeScript integration sharing interfaces with the backend.

### ⚙️ Backend (Server)
- **Layered Architecture:** Strict separation of concerns (Routes → Controllers → Services).
- **Zod Validation:** Robust runtime validation for all incoming requests.
- **RESTful API:** Clean endpoints for fetching Profile, Skills, and Projects.
- **Performance:** Optimized database queries with Mongoose indexing.

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | Next.js 15, TypeScript, Tailwind CSS, Framer Motion, Axios, Lucide React |
| **Backend** | Node.js, Express.js, TypeScript, Mongoose |
| **Database** | MongoDB (Atlas or Local) |
| **Tools** | ESLint, Prettier, Zod, Dotenv |

---

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
- Node.js (v18+)
- MongoDB (Running locally or via Atlas connection string)

### 1. Backend Setup

The backend runs on port **5000**.

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create Environment Variables
# Create a .env file and add your configuration:
# PORT=5000
# MONGO_URI=mongodb://localhost:27017/portfolio (or your Atlas URI)

# Seed the Database (Important!)
# This populates the DB with initial profile, skills, and project data
npm run seed

# Start the Development Server
npm run dev
```
### 2. Frontend Setup

The backend runs on port **3000**.

```bash
# Open a new terminal and navigate to client directory
cd client

# Install dependencies
npm install

# Create Environment Variables
# Create a .env.local file and add the backend URL:
# NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Start the Development Server
npm run dev
```

## Project Structure 

```
├── client/                 # Next.js Frontend
│   ├── src/app/            # App Router Pages (Home, Projects)
│   ├── src/components/     # UI Components (Navbar, etc.)
│   ├── src/types/          # TypeScript Interfaces
│   └── src/utils/          # API Helpers (Axios)
│
└── server/                 # Express Backend
    ├── src/config/         # Database Connection
    ├── src/controllers/    # Request Handling
    ├── src/models/         # Mongoose Schemas
    ├── src/routes/         # API Routes
    ├── src/services/       # Business Logic
    └── src/validation/     # Zod Schemas
```

## API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/profile` | Fetches bio, experience, and education details. |
| `GET` | `/api/skills` | Returns list of technical skills categorized by type. |
| `GET` | `/api/projects` | Returns all projects. Supports query `?skill=React`. |