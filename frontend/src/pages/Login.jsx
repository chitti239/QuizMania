// frontend/src/pages/Login.jsx
import { useState } from "react";
import axios from "axios";
import "../styles/auth.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');        // email instead of username
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });

      // Store token and user info in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('email', response.data.user.email);

      alert('Login successful!');
      navigate('/Homepage'); // Redirect to home page or dashboard
    } catch (error) {
      alert(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="auth-form">
        
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
