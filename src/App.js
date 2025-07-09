import UserManagementApp from './pages/UserManagementApp';   // Main page showing user list and management
import AddUserFormWrapper from './components/AddUserFormWrapper';
import LoginForm from './pages/LoginForm';
import './styles/App.css';                                   // Global app styles
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';   // React Router components and hooks
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';


/**
 * App Component
 * Sets up the application's routing structure using React Router.
 * - '/' renders the user management list view
 * - '/add' renders the form to add a new user
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={
          <ProtectedRoute>
            <UserManagementApp />
          </ProtectedRoute>
          } />
        <Route path="/add" element={<AddUserFormWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
