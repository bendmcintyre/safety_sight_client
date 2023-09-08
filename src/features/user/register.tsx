import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ErrorText } from '../../app/components/typography';
import { InputText } from '../../app/components/input';

const Register = () => {
  const INITIAL_REGISTER_OBJ = {
    name : '',
    password : '',
    emailId : '',
  };

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [registerObj, setRegisterObj] = useState(INITIAL_REGISTER_OBJ);

  const submitForm = (e: any) => {
    e.preventDefault();
    setErrorMessage('');

    if (registerObj.name.trim() === '') {
      return setErrorMessage('Name is required! (use any value)');
    } else if (registerObj.emailId.trim() === '') {
      return setErrorMessage('Email Id is required! (use any value)');
    } else if (registerObj.password.trim() === '') {
      return setErrorMessage('Password is required! (use any value)');
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
    setRegisterObj({ ...registerObj, [updateType]: value });
  }

  return(
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-md shadow-xl">
        <div className="grid  md:grid-cols-1 grid-cols-1 bg-base-100 rounded-xl">
        <div className='py-24 px-10'>
          <h2 className='text-2xl font-semibold mb-2 text-center'>Register</h2>
          <form onSubmit={(e) => submitForm(e)}>
            <div className="mb-4">
              <InputText defaultValue={registerObj.name} updateType="name" containerStyle="mt-4" labelTitle="Name" updateFormValue={updateFormValue}/>
              <InputText defaultValue={registerObj.emailId} updateType="emailId" containerStyle="mt-4" labelTitle="Email Id" updateFormValue={updateFormValue}/>
              <InputText defaultValue={registerObj.password} type="password" updateType="password" containerStyle="mt-4" labelTitle="Password" updateFormValue={updateFormValue}/>
            </div>

            <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
            <button type="submit" className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}>Register</button>

            <div className='text-center mt-4'>Already have an account? <Link to="/login"><span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Login</span></Link></div>
          </form>
        </div>
      </div>
      </div>
    </div>
  )
}

export {
  Register,
}

export default Register;
