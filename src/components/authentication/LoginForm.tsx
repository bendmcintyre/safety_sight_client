import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import ForgotPasswordForm from './ForgotPasswordForm'; // Import the ForgotPasswordForm component

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false); // State variable to track if the forgot password form should be shown

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Here you'd call your login service with the username and password
    // We're not implementing this service right now per your instruction
    // auth.login(username, password);
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPasswordForm(true); // Set the state variable to true when "Forgot Password" button is clicked
  };

  // Render the ForgotPasswordForm if showForgotPasswordForm is true
  if (showForgotPasswordForm) {
    return <ForgotPasswordForm />;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <form 
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label 
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label 
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <button 
            className="text-blue-500 hover:text-blue-700 text-sm focus:outline-none"
            type="button"
            onClick={handleForgotPasswordClick} // Call the handleForgotPasswordClick function when "Forgot Password" button is clicked
          >
            Forgot Password?
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
