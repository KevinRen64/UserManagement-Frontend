import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Register.css';      

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => { 
    e.preventDefault();

    if (password !== passwordConfirm) {
      setError("Passwords do not match")
      return;
    }

    try {
      await axios.post("http://localhost:5000/Auth/Register", {
        email,
        password,
        passwordConfirm,
        firstName,
        lastName,
        gender,
      });
      setEmail('');
      setPassword('');
      setPasswordConfirm('');
      setFirstName('');
      setLastName('');
      setGender('');
      navigate('/');
    } catch(err) {
      setError("Registration failed. Please try again.")
      console.error(err);
    }
  }

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form className="register-user-form" onSubmit={handleSubmit}>
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
        <input 
          type="password"
          value={passwordConfirm}
          placeholder="Confirm your password"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
        />
        <input 
          type="text"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input 
          type="text"
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input 
          type="text"
          value={gender}
          placeholder="Gender"
          onChange={(e) => setGender(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;