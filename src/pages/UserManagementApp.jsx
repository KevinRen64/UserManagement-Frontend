import { useEffect, useState } from 'react';
import UserList from '../components/UserList';
import '../styles/UserList.css';
import { useNavigate } from 'react-router-dom';

/**
 * UserManagementApp Component
 * - Fetches and displays a list of users from the backend
 * - Allows deleting a user
 * - Provides a button to navigate to the "Add User" page
 */
function UserManagementApp() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Fetch user data from the backend API
  const fetchUsers = async() => {
    const res = await fetch("http://localhost:5000/User/GetUsers");
    const data = await res.json();
    setUsers(data);
  }

  // Delete a user by userId and refresh the list
  const deleteUser = async (userId) => {
    const res = await fetch(`http://localhost:5000/User/DeleteUser/${userId}`, {
      method: "DELETE",
    });
    fetchUsers();
  }

  // Navigate to the Add User form when "Add User" button is clicked
  const handleClickAdd = () => {
    navigate('/add');
  }

  useEffect(() => {
    fetchUsers();
  } ,[]);

  // Render the page with header, add button, and user list
  return (
    <div className="App">
      <div className='header'>User Management</div>
      <div className='button-add-user-container'>
        <button className = 'button-add-user' onClick={handleClickAdd}>Add User</button>
      </div>
      <UserList users = {users} onDelete = {deleteUser}/>
    </div>
  );
}

export default UserManagementApp;