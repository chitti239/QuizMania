// frontend/src/pages/Signup.jsx
import { useState } from "react";
import axios from "axios";
import "../styles/auth.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        username,     // <---- Added: username is now sent to backend!
        email,
        password
      });

      // Store token and user info
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('email', response.data.user.email);
      localStorage.setItem('username', response.data.user.username);

      alert('Signup successful!');
      navigate('/login'); // Redirect to login page
    } catch (error) {
      alert(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup} className="auth-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
