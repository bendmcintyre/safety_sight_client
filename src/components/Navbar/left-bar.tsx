import React from 'react';
import { LeftNavbar } from './left-navbar';

const LeftBar: React.FC = () => {
  return (
    <div className="bg-primary dark:bg-primary rounded w-1/2 flex place-items-center shadow-inner">
      
      <LeftNavbar />
      
    </div>
  );
}

export { LeftBar };
