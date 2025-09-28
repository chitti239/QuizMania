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

---

## 🚀 10-Day Development Plan

**Day 1 – Project Setup**  
- Initialize React frontend (Vite + Tailwind CSS)  
- Initialize Node.js + Express backend  
- Setup MongoDB Atlas and connect backend  

**Day 2 – Authentication (Frontend)**  
- Create Signup / Login pages  
- Build forms for email & password  
- Add React Router navigation  

**Day 3 – Authentication (Backend)**  
- Implement JWT authentication  
- Signup → save hashed password to MongoDB  
- Login → verify credentials → return JWT token  
- Test API endpoints with Postman  

**Day 4 – Quiz Categories & Static Questions**  
- Create category selection page  
- Add static JSON questions for each category  
- Fetch questions via backend API  

**Day 5 – Quiz Mechanics**  
- Display one question at a time with 4 options  
- Implement score tracking  
- Add 15s timer per question  
- Navigate automatically to next question  

**Day 6 – AI Question Integration**  
- Connect OpenAI API for dynamic questions  
- Fallback to static JSON if AI unavailable  
- Test question generation per category  

**Day 7 – Results & Leaderboard (Backend)**  
- Calculate score after quiz completion  
- Save score to MongoDB (user + category + score)  
- Build leaderboard API to return top 5 scores  

**Day 8 – Leaderboard (Frontend)**  
- Display global leaderboard page  
- Show top 5 scores and usernames per category  
- Highlight current user’s score (optional)  

**Day 9 – UI & UX Polish**  
- Make UI responsive & modern using Tailwind  
- Category & question cards, timer/progress bar, animations  
- Add loading states for AI-generated questions  

**Day 10 – Testing & Deployment**  
- Test all features end-to-end (auth, quiz, leaderboard)  
- Fix bugs  
- Deploy frontend → Vercel / Netlify  
- Deploy backend → Render / Heroku  
- Test live app  

---

## 📦 Installation

### Backend:

cd backend
npm install
npm run dev

### Frontend:

cd frontend
npm install
npm run dev