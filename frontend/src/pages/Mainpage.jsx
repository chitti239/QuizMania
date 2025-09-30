import { useNavigate } from "react-router-dom";
import "../styles/mainpage.css";

const categories = [
  "tech",
    "gk",
    "movies",
    "history",
    "Sports",
    "science",
    "music",
    "geography",
    "literature",
    "art",
    "politics",
    "mathematics",
    "biology",
    "physics",
    "chemistry",
    "technology",
    "gaming",
    "movies_bollywood",
    "celebrities",
    "mythology",
    "food",
    "travel",
    "animals"
];

const MainPage = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/quiz/${category.toLowerCase().replace(" ", "")}`);
  };

  return (
    <div className="main-container">
      <h2>Welcome to QuizMania 🎉</h2>
      <p>Select a category to start your quiz</p>
      <div className="categories">
        {categories.map((cat, i) => (
          <button key={i} onClick={() => handleCategoryClick(cat)} className="category-btn">
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
