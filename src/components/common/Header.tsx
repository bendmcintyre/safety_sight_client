import React from 'react';
import  { Navbar } from './Navbar';

const Header: React.FC = () => {
  return (
    <header className="bg-background p-5 flex justify-between">
      <Navbar />
      <div className="hidden md:block">
            <div className=" items-baseline space-x-4">
        <img src="/path-to-your/profile-image.jpg" alt="Profile" className="rounded-full h-10 w-10" />
        {/* Replace the '/path-to-your/profile-image.jpg' with the actual path to your profile image */}
        <button className="px-2 py-1 ml-2 rounded">Notifications</button>
        <button className="px-2 py-1 ml-2 rounded">Settings</button>
      </div>
      </div>
    </header>
  );
}

export {Header};
