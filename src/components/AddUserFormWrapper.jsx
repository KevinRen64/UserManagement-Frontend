import { useNavigate } from "react-router-dom";
import AddUserForm from "./AddUserForm";

/**
 * AddUserFormWrapper Component
 * - Wraps the AddUserForm component
 * - Handles form submission logic and navigation after adding a user
 */
function AddUserFormWrapper () {
  const navigate = useNavigate();  // Allows navigation to other routes

  // Function to send new user data to the backend and navigate to the homepage after success
  const addUser = async (user) => {
    const res = await fetch("http://localhost:5000/User/AddUser", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      // Convert user object to JSON string
      body: JSON.stringify(user),
    });
    // After successful submission, go back to the main user list
    navigate('/');
  };
  // Render the AddUserForm component, passing the addUser function as a prop
  return <AddUserForm onAddUser={addUser} />;
}

export default AddUserFormWrapper;