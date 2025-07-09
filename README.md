# UserManagement-Frontend

A responsive and user-friendly React frontend for managing users, connected to a secure ASP.NET Core Web API backend. This application allows administrators to view, add, update, and delete user records with JWT-based authentication.

## 🚀 Features

- 🔐 User login with JWT token authentication
- 📋 Display of all users in a clean UI
- ➕ Add new users
- ✏️ Edit existing users
- ❌ Delete users
- 🔁 React Router for smooth navigation
- 🎨 Clean and modular CSS styling

## 🛠 Tech Stack

- **Frontend**: React, Axios, React Router, CSS
- **Backend**: [ASP.NET Core Web API](https://github.com/KevinRen64/UserManagement) (Dapper, SQL Server)
- **Auth**: JWT token-based authentication

## 📸 Screenshots

> Add screenshots here (optional)
> Example: `Login Page`, `User List`, `Add User Modal`, etc.

## 📂 Folder Structure

src/
│
├── components/ # Reusable components (e.g., UserList, AddUserForm)
├── pages/ # Route-based pages (e.g., Login, Dashboard)
├── styles/ # CSS files
├── App.js # Main app component
├── index.js # Entry point

bash
Copy
Edit

## 🔧 Setup & Run Locally

1. **Clone the repo**
```bash
git clone https://github.com/KevinRen64/UserManagement-Frontend.git
cd UserManagement-Frontend
Install dependencies

bash
Copy
Edit
npm install
Run the app

bash
Copy
Edit
npm start
Connect to Backend
Make sure your backend API is running and update the API URL in your frontend (likely in an Axios config or .env file).
