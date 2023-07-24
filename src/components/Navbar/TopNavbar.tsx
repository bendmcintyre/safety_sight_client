import React from 'react';
import { ActiveLink } from './ActiveLink';

const TopNavbar: React.FC = () => {
  return (
    <div className="flex items-center text-sm">
      <ActiveLink to="/notifications" className="text-white text-center shadow-background hover:bg-secondary hover:text-white font-bold py-2 px-4 block">Notifications</ActiveLink>
      <ActiveLink to="/login" className="text-white text-center shadow-background hover:bg-secondary hover:text-white font-bold py-2 px-4 block">Login</ActiveLink>
      <ActiveLink to="/register" className="text-white text-center shadow-background hover:bg-secondary hover:text-white font-bold py-2 px-4 block">Register</ActiveLink>
      <img src="/path-to-your/profile-image.jpg" alt="Profile" className="text-white text-center shadow-background hover:bg-secondary hover:text-white font-bold py-2 px-4 block" />
    </div>
  );
}

export {TopNavbar};
