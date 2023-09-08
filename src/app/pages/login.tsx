import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Login } from '../../features/user/login';

const LoginPage = () => {
  return(
    <div className="">
      <Login />
    </div>
  )
}

export {
  LoginPage
}

export default LoginPage;
