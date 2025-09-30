// frontend/src/pages/Home.jsx
import "../styles/home.css";

const features = [
  {
    title: "User Authentication",
    details: [
      "Signup / Login with email & password",
      "JWT-based session management",
    ],
  },
  {
    title: "Quiz Categories",
    details: [
      "Tech, General Knowledge, Movies, History",
      "Easily expandable with new categories",
    ],
  },
  {
    title: "AI-Generated Questions",
    details: [
      "Dynamic questions powered by OpenAI",
      "Fallback to static JSON questions",
    ],
  },
  {
    title: "Quiz Mechanics",
    details: [
      "10 questions per session",
      "15-second timer per question",
      "Real-time score tracking",
    ],
  },
];

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to QuizMania 🎉</h1>
      <p>Explore the features that make QuizMania fun & smart</p>

      <div className="features-grid">
        {features.map((feat, idx) => (
          <div key={idx} className="feature-card">
            <h3>{feat.title}</h3>
            <ul>
              {feat.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
