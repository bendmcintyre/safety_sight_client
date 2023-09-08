import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';

import { ErrorText } from  '../../app/components/typography';
import { InputText } from '../../app/components/input';
import { GoogleIcon } from '../../app/components/icons';
import { MicrosoftIcon } from '../../app/components/icons';
import { useLoginGoogleMutation } from '../../app/services/auth';
import { useAuth } from '../auth/use-auth';


export const Login = () => {
  const INITIAL_LOGIN_OBJ = {
    password : '',
    emailId : '',
  };

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);

  const [googleLogin, { isError, isLoading, isSuccess }] = useLoginGoogleMutation();
  const auth = useAuth();
  const navigate = useNavigate();
  const [searchParams, _setSearchParams] = useSearchParams();

  //const submitForm = (e: FormEventHandler<HTMLFormEvent>) => {
  const submitForm = (e: any) => {
    e.preventDefault();
    setErrorMessage('');

    if (loginObj.emailId.trim() === '') {
      return setErrorMessage('Email is required.');
    } else if (loginObj.password.trim() === '') {
      return setErrorMessage('Password is required.')
    } else {
      setLoading(true);
      // Call API to check user credentials and save token in localstorage
      localStorage.setItem('token', 'DumyTokenHere');
      setLoading(false);
      window.location.href = '/app/welcome';
    }
  }

  const updateFormValue = ({ updateType, value }: any) => {
    setErrorMessage('');
    setLoginObj({ ...loginObj, [updateType] : value });
  }

  // 
  const submitGoogleLogin = async (googleResponse: any) => {
    const data = { ...googleResponse };
    
    await googleLogin(data);
  }

  const handleGoogleLoginButton = useGoogleLogin({
    onSuccess: (codeResponse) => submitGoogleLogin(codeResponse),
    onError: (error) => console.log('Login failed:', error),
  });

  useEffect(() => {
    if (auth.user) {
      const from = searchParams.get('from') || '/';
      navigate(from);
    }

  }, [auth.user])

  return(
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-md shadow-xl">
        <div className="grid grid-cols-1 bg-base-100 rounded-xl">
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
            <form onSubmit={submitForm}>
              <div className="mb-4">
                <InputText type="emailId" defaultValue={loginObj.emailId} updateType="emailId" containerStyle="mt-4" labelTitle="Email" updateFormValue={updateFormValue}/>
                <InputText defaultValue={loginObj.password} type="password" updateType="password" containerStyle="mt-4" labelTitle="Password" updateFormValue={updateFormValue}/>
              </div>
              <div className='text-right text-primary'><Link to="/forgot-password"><span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Forgot Password?</span></Link>
              </div>

              <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
              <button type="submit" className={'btn mt-2 w-full btn-primary' + (loading ? ' loading' : '')}>Login</button>

              <div className='text-center mt-4'>Don't have an account? <Link to="/register"><span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Register</span></Link></div>
            </form>

            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-700 before:mt-0.5 after:flex-1 after:border-t after:border-gray-700 after:mt-0.5">
              <hr className="flex-2 border-gray-700" />
              <p className="text-center font-semibold mx-4">OR</p>
              <hr className="flex-2 border-gray-700" />
            </div>

            <div className="flex flex-col space-y-4">
              <button 
                className="btn btn-outline border-neutral justify-start"
                onClick={() => handleGoogleLoginButton()}
                disabled={isLoading}
              >
                <span className="w-6 h-6"><GoogleIcon /></span>
                Continue with Google Account
                { isLoading && <span className="loading loading-spinner"></span> }
              </button>
              <button
                className="btn btn-outline border-neutral justify-start"
                onClick={() => '' }
              >
                <span className="w-6 h-6"><MicrosoftIcon /></span>
                Continue with Microsoft Account
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;