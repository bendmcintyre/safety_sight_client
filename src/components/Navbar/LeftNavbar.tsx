import React from 'react';
import { ActiveLink } from './ActiveLink';

const LeftNavbar: React.FC = () => {
  return (
    <div className="rounded mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="w-full h-full bg-secondary rounded flex flex-col items-center">
        <div className="flex-shrink-0 p-4">
          <img className="h-20 w-20" alt="Safety Sight Logo" src="Link Logo Here"></img>
        </div>
        <nav className="items-center text-sm space-y-4">
          <ActiveLink to="/inspection-form" className="text-white text-center shadow-background bg-primary hover:bg-secondary hover:text-white font-bold py-2 px-4 rounded block">Inspect</ActiveLink>
          <ActiveLink to="/inspection-history" className="text-white text-center shadow-background bg-primary hover:bg-secondary hover:text-white font-bold py-2 px-4 rounded block">Inspection History</ActiveLink>
          <ActiveLink to="/inspection-detail" className="text-white text-center shadow-background bg-primary hover:bg-secondary hover:text-white font-bold py-2 px-4 rounded block">Inspection Details</ActiveLink>
          <ActiveLink to="/settings" className="text-white text-center shadow-background bg-primary hover:bg-secondary hover:text-white font-bold py-2 px-4 rounded block">Settings</ActiveLink>
          <ActiveLink to="/manage-users" className="text-white text-center shadow-background bg-primary hover:bg-secondary hover:text-white font-bold py-2 px-4 rounded block">Manage Users</ActiveLink>
          <ActiveLink to="/settings" className="text-white text-center shadow-background bg-primary hover:bg-secondary hover:text-white font-bold py-2 px-4 rounded block">Settings</ActiveLink>
        </nav>
      </div>
    </div>
  );
}

export { LeftNavbar };
