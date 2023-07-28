import React, { useState } from 'react';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Check if the email is filled
    if (!email) {
      alert('Please enter your email to reset password.');
      return;
    }

    // Implement your forgot password reset logic here
    // Call your reset password service with the email
    // resetPasswordService.resetPassword(email);
    


    // Optionally, show a success message or redirect to a confirmation page
    alert('Password reset link sent to your email.');
  };

  return (
    <div className="bg-void flex flex-col justify-center items-center h-screen">
      <form 
        className="bg-secondary shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label 
            className="block text-primary text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button 
            className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export {ForgotPasswordForm};
