import React, { useState } from 'react';
import { ForgotPasswordForm } from './forgot-password'; // Import the ForgotPasswordForm component

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
    <div className="bg-background flex flex-col justify-center items-center h-screen shadow-background">
      <form 
        className="bg-secondary rounded px-8 pt-6 pb-8 mb-4 shadow-background"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label 
            className="block text-primary text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="  border rounded w-full py-2 px-3 text-gray-700 leading-tight shadow-background "
            type="text"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label 
            className="block text-primary text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input 
            className=" border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight shadow-background"
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button 
            className="bg-primary text-white font-bold text-sm py-2 px-4 rounded hover:bg-secondary shadow-background"
            type="submit"
          >
            Sign In
          </button>
          <button 
            className="text-primary hover:text-background text-xs focus:outline-none"
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

export {LoginForm};
