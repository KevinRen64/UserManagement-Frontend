import { useState } from "react";
import '../styles/AddUserForm.css';

/**
 * AddUserForm Component
 * - A controlled form that collects user input (first name, last name, email, gender)
 * - Calls the onAddUser function passed as a prop when submitted
 */
const AddUserForm = ({onAddUser}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call parent-provided function with form data
    onAddUser({firstName, lastName, email, gender});
    // Reset the form fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setGender('');
  }

  return (
    <div className="add-user-form-container">
      <form className="add-user-form" onSubmit={handleSubmit}>
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
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input 
          type="text"
          value={gender}
          placeholder="Gender"
          onChange={(e) => setGender(e.target.value)}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUserForm;