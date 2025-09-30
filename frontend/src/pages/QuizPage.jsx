import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/quiz.css";

const QuizPage = () => {
  const { category } = useParams();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        // Call your backend AI question generation endpoint
        const res = await axios.post(
          `http://localhost:5000/api/ai-quiz`, 
          { category }
        );
        setQuestions(res.data);
      } catch (error) {
        console.log("Error fetching AI questions", error);
        // Optional fallback to static questions API
        try {
          const fallbackRes = await axios.get(
            `http://localhost:5000/api/quiz/${category}`
          );
          setQuestions(fallbackRes.data);
        } catch (fallbackError) {
          console.log("Fallback error fetching questions", fallbackError);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [category]);

  useEffect(() => {
    if (loading || quizCompleted) return;

    setTimeLeft(15);
    setSelectedAnswer(null);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timerRef.current);
          goToNextQuestion();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [currentIndex, loading, quizCompleted]);

  const handleAnswerClick = (option) => {
    if (selectedAnswer) return;

    setSelectedAnswer(option);
    clearInterval(timerRef.current);

    if (option === questions[currentIndex].answer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      goToNextQuestion();
    }, 1000);
  };

  const goToNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  if (loading) return <p>Loading questions...</p>;

  if (quizCompleted)
    return (
      <div className="quiz-container quiz-completed">
        <h2>Quiz Completed!</h2>
        <p>Your Score: {score} / {questions.length}</p>
      </div>
    );

  const currentQuestion = questions[currentIndex];

  return (
    <div className="quiz-container">
      <h2>{category.toUpperCase()} Quiz</h2>
      <p className="question-text">{currentQuestion.question}</p>
      <div className="timer">Time Left: {timeLeft}s</div>
      <ul className="options-list">
        {currentQuestion.options.map((option, index) => {
          let className = "";
          if (selectedAnswer) {
            if (option === currentQuestion.answer) className = "correct";
            else if (option === selectedAnswer) className = "incorrect";
          }
          return (
            <li
              key={index}
              className={className}
              onClick={() => handleAnswerClick(option)}
            >
              {option}
            </li>
          );
        })}
      </ul>
      <p className="score">Score: {score}</p>
    </div>
  );
};

export default QuizPage;
