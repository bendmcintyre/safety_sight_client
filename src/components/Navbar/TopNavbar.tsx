import React from 'react';
import { ActiveLink } from './ActiveLink';

const TopNavbar: React.FC = () => {
  return (
    <div className="flex items-center space-x-4 space-y-4 text-sm ">
      <ActiveLink to="/notifications" className="">Notifications</ActiveLink>
      <ActiveLink to="/login" className="">Login</ActiveLink>
      <ActiveLink to="/register" className="">Register</ActiveLink>
      <img src="/path-to-your/profile-image.jpg" alt="Profile" className="rounded-full h-10 w-10" />
    </div>
  );
}

export {TopNavbar};
