import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Register } from '../../features/user/register';

const RegistrationPage = () => {
  return (
    <div className="">
      <Register />
    </div>
  )
};

export {
  RegistrationPage,
}

export default RegistrationPage;
