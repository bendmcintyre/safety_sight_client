import React from 'react';
import { ActiveLink } from '../ActiveLink';

const Navbar: React.FC = () => {
  return (
    <div className="rounded mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="w-full h-full bg-secondary  rounded ">
      <div className="flex  rounded">
      <div className="flex-shrink-0">
            <img className="h-20 w-20 " alt="Safety Sight Logo"></img> {/*src="Link Logo Here"*/} 
      </div>
      <div className="hidden md:block "> 
    <nav className="ml-10 flex items-center space-x-4 space-y-4 text-sm ">
      <ActiveLink to="/inspection-form" className="text-white text-center shadow-background bg-primary hover:bg-secondary hover:text-white font-bold py-2 px-4 rounded ">Inspect</ActiveLink>
      <ActiveLink to="/inspection-history" className="text-white text-center shadow-background bg-primary hover:bg-secondary hover:text-white font-bold py-2 px-4 rounded">Inspection History</ActiveLink>
      <ActiveLink to="/manage-inspections" className="text-white text-center shadow-background bg-primary hover:bg-secondary hover:text-white font-bold py-2 px-4 ounded">Manage Inspections</ActiveLink>
      <ActiveLink to="/manage-users" className="text-white text-center shadow-background bg-primary hover:bg-secondary hover:text-white font-bold py-2 px-4 rounded">Manage Users</ActiveLink>
      <ActiveLink to="/contact" className="text-white text-center shadow-background bg-primary hover:bg-secondary hover:text-white font-bold py-2 px-4 rounded">Contact</ActiveLink>
      <ActiveLink to="/login" className="text-white text-center shadow-background bg-primary hover:bg-secondary hover:text-white font-bold py-2 px-4 rounded">Login</ActiveLink>
      <ActiveLink to="/register" className="text-white text-center shadow-background bg-primary hover:bg-secondary hover:text-white font-bold py-2 px-4 rounded">Register</ActiveLink>
    </nav>
    </div>
    </div> 
      </div>
    </div>
  );
}

export {Navbar};
