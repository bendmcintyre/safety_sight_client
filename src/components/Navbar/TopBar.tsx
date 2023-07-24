import React from 'react';
import  { TopNavbar } from './TopNavbar'; 

const TopBar: React.FC = () => {
  return (
    <header className="flex justify-end">
      <TopNavbar />
    </header>
  );
}

export {TopBar};
