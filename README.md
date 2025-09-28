# QuizMania

# 🎮 QuizMania

**QuizMania** is a modern, full-stack quiz application that lets users test their knowledge across multiple categories. Featuring AI-generated questions, real-time scoring, a timer, and a global leaderboard, QuizMania provides a fun and interactive quiz experience.  

---

## 🧠 Features

- **User Authentication**  
  - Signup / Login with email and password  
  - JWT-based session management  

- **Quiz Categories**  
  - Tech, General Knowledge, Movies, History (expandable)  
  - Users select a category before starting the quiz  

- **AI-Generated Questions**  
  - Dynamic questions per category using OpenAI API  
  - Optional fallback to static JSON questions  

- **Quiz Mechanics**  
  - 10 questions per session  
  - Multiple choice with a 15-second timer per question  
  - Real-time score tracking  

- **Results & Leaderboard**  
  - Shows score and correct answers after quiz completion  
  - Global leaderboard stored in MongoDB  

- **UI & UX**  
  - Modern, responsive UI using Tailwind CSS  
  - Progress bar, animations, and score summary  

- **Deployment**  
  - Frontend → Vercel / Netlify  
  - Backend → Render / Heroku  
  - Database → MongoDB Atlas  

---

## 🛠 Tech Stack

- **Frontend:** React + Tailwind CSS, React Router  
- **Backend:** Node.js + Express, MongoDB (Atlas)  
- **Authentication:** JWT (Node.js) or Firebase Auth  
- **AI Integration:** OpenAI API for dynamic quiz questions  
- **Deployment:** Frontend → Vercel / Netlify, Backend → Render / Heroku  

## 📦 Installation

### Backend:

cd backend
npm install
npm run dev

### Frontend:

cd frontend
npm install
npm run dev