import React from 'react';
import { TopNavbar } from './top-navbar';


const TopBar: React.FC = () => {
  return (
    
    <header className="flex justify-end rounded-xl bg-secondary dark:bg-dms shadow-inner mx-8 mb-8">
      
      <TopNavbar />
    </header>
  );
}

export {TopBar};
