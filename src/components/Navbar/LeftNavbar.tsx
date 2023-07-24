import React from 'react';
import { ActiveLink } from './ActiveLink';

const LeftNavbar: React.FC = () => {
  return (
    <div className="rounded mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white">
      <div className="w-full h-full bg-primary rounded flex flex-col items-center">
        <nav className="items-center text-sm space-y-4">
          <ActiveLink to="/inspection-form" className="text-white text-center shadow-background hover:bg-secondary hover:text-white font-bold py-2 px-4 block">Inspect</ActiveLink>
          <ActiveLink to="/inspection-history" className="text-white text-center shadow-background hover:bg-secondary hover:text-white font-bold py-2 px-4 block">Inspection History</ActiveLink>
          <ActiveLink to="/inspection-detail" className="text-white text-center shadow-background hover:bg-secondary hover:text-white font-bold py-2 px-4 block">Inspection Details</ActiveLink>
          <ActiveLink to="/manage-users" className="text-white text-center shadow-background hover:bg-secondary hover:text-white font-bold py-2 px-4 block">Manage Users</ActiveLink>
          <ActiveLink to="/settings" className="text-white text-center shadow-background hover:bg-secondary hover:text-white font-bold py-2 px-4 block">Settings</ActiveLink>
        </nav>
      </div>
    </div>
  );
}

export { LeftNavbar };
