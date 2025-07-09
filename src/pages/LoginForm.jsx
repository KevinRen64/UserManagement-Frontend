import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/LoginForm.css'; 

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/Auth/Login', {
        email,
        password,
      });
      localStorage.setItem('token', res.data.token);
      navigate('users');
    } catch(err){
      console.error(err);
      setError("Invalid email or password")
    }

  };
  return (
    <div className="login-user-form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <button className="register-button" type="button" onClick={() => navigate('/register')}>Register</button>
    </div>
  );

  };

export default LoginForm;