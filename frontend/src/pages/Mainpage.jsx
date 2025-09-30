// frontend/src/pages/MainPage.jsx
import { Link } from "react-router-dom";
import "../styles/mainpage.css";

const categories = [
  "Tech",
  "General Knowledge",
  "Movies",
  "History",
  "Sports",
  "Science",
  "Music",
  "Geography"
];

const MainPage = () => {
  return (
    <div className="main-container">
      <h1>Welcome to QuizMania 🎉</h1>
      <p>Select a category to start your quiz</p>

      <div className="categories-grid">
        {categories.map((cat, idx) => (
          <Link
            to={`/quiz/${cat.toLowerCase().replace(/\s+/g, "-")}`}
            key={idx}
            className="category-card"
          >
            <h3>{cat}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
