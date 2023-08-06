import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from '@react-oauth/google';
import { useAppStore } from '../../store';
import { AuthService } from '../../services/auth.service';
import { LeftNavbar } from '../navbar/left-navbar';
import { ForgotPasswordForm } from './forgot-password'; // Import the ForgotPasswordForm component

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false); // State variable to track if the forgot password form should be shown

  const navigate = useNavigate();
  const authService = new AuthService();
  const user = useAppStore.use.user();

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

  const submitGoogleLogin = async (googleResponse: any) => {
    const data = { ...googleResponse };
    
    // TODO: Move the 'loading' state into the service layer.
    //       this works for a quick-and-dirty
    setLoading(true);
    await authService.loginGoogle(data);
    setLoading(false);
  }

  const handleGoogleLoginButton = useGoogleLogin({
    //onSuccess: (codeResponse) => postGoogleCode(codeResponse),
    onSuccess: (codeResponse) => submitGoogleLogin(codeResponse),
    onError: (error) => console.log('Login Failed:', error),
  });

  // log out function to log the user out of google and set the profile array to null
  // TODO: This should really be somewhere else - auth service, navbar with the logout button, etc.
  const logOut = () => {
    authService.logout();
  };

  // Test fetching the user's profile from the credential token
  useEffect(() => {
    if (user) {
      console.log('user', user)
      console.log('redirect to main app page/dashboard/wherever we came from');
      navigate('/dashboard');
    }
  }, [ user ]);

  const googleLogoStyles = {
    width: '20px',
    height: '20px',
    padding: '5px', // Adding 5px of padding to the logo
    backgroundImage: 
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 48 48'%3E%3Cdefs%3E%3Cpath id='a' d='M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z'/%3E%3C/defs%3E%3CclipPath id='b'%3E%3Cuse xlink:href='%23a' overflow='visible'/%3E%3C/clipPath%3E%3Cpath clip-path='url(%23b)' fill='%23FBBC05' d='M0 37V11l17 13z'/%3E%3Cpath clip-path='url(%23b)' fill='%23EA4335' d='M0 11l17 13 7-6.1L48 14V0H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%2334A853' d='M0 37l30-23 7.9 1L48 0v48H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%234285F4' d='M48 48L17 24l-4-3 35-10z'/%3E%3C/svg%3E\")",
  };

  const msLogoStyles = {
    width: '20px',
    height: '20px',
    padding: '5px', // Adding 5px of padding to the logo
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='21'%3E%3Cpath fill='%23f25022' d='M1 1h9v9H1z'/%3E%3Cpath fill='%2300a4ef' d='M1 11h9v9H1z'/%3E%3Cpath fill='%237fba00' d='M11 1h9v9h-9z'/%3E%3Cpath fill='%23ffb900' d='M11 11h9v9h-9z'/%3E%3C/svg%3E\")",
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-md w-full mx-auto p-6 bg-black rounded-lg shadow-md">
        {loading && <div>Loading...</div>}
        <form className="space-y-4 mb-1">
          <div>
            <label htmlFor="email" className="block font-medium text-gray-200">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="mt-1 block w-full px-4 py-3 border border-gray-700 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:border-primary"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium text-gray-200">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-3 border border-gray-700 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:border-primary"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-transparent border border-gray-700 text-gray-200 rounded-md hover:bg-gray-900 hover:shadow-md focus:outline-none flex items-center"
            style={{
              height: '52px',
              fontSize: '16px',
              borderRadius: '3px', // Adjusted corner rounding to 3px
              fontFamily: 'ColfaxAI, -apple-system, BlinkMacSystemFont, Helvetica, sans-serif', // Specified font-families
            }}
          >
            Log In
          </button>
          <p className="text-sm text-gray-400 text-center mb-1">Forgot Password?</p>
        </form>

        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-700 before:mt-0.5 after:flex-1 after:border-t after:border-gray-700 after:mt-0.5">
          <hr className="flex-2 border-gray-700" />
          <p className="text-center font-semibold mx-4 text-gray-400">OR</p>
          <hr className="flex-2 border-gray-700" />
        </div>

        <div className="flex flex-col space-y-4">
          <button
              type="button"
              onClick={() => handleGoogleLoginButton()}
              className="py-2 px-4 bg-transparent border border-gray-700 text-gray-200 rounded-md hover:bg-gray-900 hover:shadow-md focus:outline-none flex items-center"
              style={{
                height: '52px',
                fontSize: '16px',
                borderRadius: '3px',
                fontFamily: 'ColfaxAI, -apple-system, BlinkMacSystemFont, Helvetica, sans-serif',
                marginTop: '8px', // Added 8px margin between buttons
              }}
            >
              <span
                className="w-6 h-6 mr-2 bg-no-repeat bg-center bg-contain"
                style={googleLogoStyles}
              >{' '}</span>
              Continue with Google Account
          </button>

          <button
            type="button"
            className="py-2 px-4 bg-transparent border border-gray-700 text-gray-200 rounded-md hover:bg-gray-900 hover:shadow-md focus:outline-none flex items-center"
            style={{
              height: '52px',
              fontSize: '16px',
              borderRadius: '3px', // Adjusted corner rounding to 3px
              fontFamily: 'ColfaxAI, -apple-system, BlinkMacSystemFont, Helvetica, sans-serif', // Specified font-families
            }}
          >
            <span
              className="w-6 h-6 mr-2 bg-no-repeat bg-center bg-contain"
              style={msLogoStyles}
            >{' '}</span>
            Continue with Microsoft Account
          </button>
        </div>
      </div>
    </div>
  );
};

export {
  LoginForm,
};
