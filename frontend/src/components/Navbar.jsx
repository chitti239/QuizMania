import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  // Function to get token from storage (adjust if you store token elsewhere)
  const getToken = () => localStorage.getItem("token");

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setUsername(null);
      return;
    }

    // Fetch current user from backend using token
    fetch("http://localhost:5000/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to authenticate");
        }
        return res.json();
      })
      .then((data) => {
        if (data.user && data.user.username) {
          setUsername(data.user.username);
        } else {
          setUsername(null);
        }
      })
      .catch(() => {
        setUsername(null);
        // Optional: remove invalid token
        localStorage.removeItem("token");
      });
  }, []);

  const handleLogout = () => {
    // Clear stored token and reset username
    localStorage.removeItem("token");
    setUsername(null);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">QuizMania</h2>
      <div className="links">
        {username ? (
          <>
            <span className="welcome-text">Welcome, {username}</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button onClick={() => navigate("/signup")} className="nav-btn">
              Signup
            </button>
            <button onClick={() => navigate("/login")} className="nav-btn">
              Login
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
