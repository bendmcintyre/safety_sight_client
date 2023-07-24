import React from 'react';
import { ActiveLink } from './ActiveLink';
import { Link } from 'react-router-dom';
import image from '../../assets/logo_placeholder2.png';

const TopNavbar: React.FC = () => {
  return (
    <div className="flex items-center text-sm">
      <ActiveLink to="/notifications" className="text-white text-center shadow-background hover:bg-secondary hover:text-white font-bold py-2 px-4 block">Notifications</ActiveLink>
      <ActiveLink to="/login" className="text-white text-center shadow-background hover:bg-secondary hover:text-white font-bold py-2 px-4 block">Login</ActiveLink>
      <ActiveLink to="/register" className="text-white text-center shadow-background hover:bg-secondary hover:text-white font-bold py-2 px-4 block">Register</ActiveLink>
      <Link to="/profile">
        <img src={image} alt="Profile" className="w-16 h-16 text-white text-center shadow-background hover:bg-secondary hover:text-white font-bold block" />
      </Link>
    </div>
  );
}

export {TopNavbar};
