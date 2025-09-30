// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
// Import the OpenAI class properly for CommonJS
const OpenAI = require("openai").default;  

dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

// Root route
app.get("/", (req, res) => {
  res.send("QuizMania backend is running 🚀");
});

// Your existing routes for auth and quiz
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/quiz", require("./routes/quizRoutes"));

// New route for AI-generated quiz questions
app.post("/api/ai-quiz", async (req, res) => {
  const { category } = req.body;
  if (!category) {
    return res.status(400).json({ error: "Category is required" });
  }

  try {
    const prompt = `
      Generate 5 multiple choice quiz questions with 4 options and one correct answer
      about the topic: "${category}".
      Return the response as a JSON array with "question", "options", and "answer".
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const aiQuestions = JSON.parse(completion.choices[0].message.content);
    res.json(aiQuestions);
  } catch (error) {
    console.error("OpenAI API error:", error);
    res.status(500).json({ error: "Failed to generate AI questions" });
  }
});

// Your MongoDB connection and server start code here...
mongoose
  .connect(process.env.MONGO_URI, { dbName: "quizmania" })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB error:", err));
