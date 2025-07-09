import { useState } from "react";
import '../styles/UserList.css';


/**
 * UserList Component
 * Displays a paginated list of users with delete functionality.
 *
 * Props:
 * - users: array of user objects
 * - onDelete: function to delete a user by ID
 */
const UserList = ({users, onDelete}) => {
  const [currentPage, setCurrentPage] = useState(1); 
  // Number of users displayed per page  
  const usersPerPage = 20;           
  // Calculate total number of pages needed                              
  const totalPages = Math.ceil(users.length / usersPerPage);        
  // Determine which users to show on the current page
  const indexOfLastUser = currentPage * usersPerPage;               
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page when a pagination button is clicked
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div>
        <ul className="user-list">
          {currentUsers.map((user) => {
            return (
              <li key={user.userId}>
                <div>{user.firstName}</div>
                <div>{user.lastName} </div>
                <div>{user.email}</div>
                <div>{user.Gender} </div>
                <button onClick={() => onDelete(user.userId)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Pagination Buttons */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            disabled={currentPage === i + 1}
            style={{
              margin: '0 5px',
              padding: '5px 10px',
              backgroundColor: currentPage === i + 1 ? '#ccc' : '#fff',
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserList;