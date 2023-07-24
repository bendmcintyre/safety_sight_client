import React from 'react';
import  { TopNavbar } from './TopNavbar'; 

const Header: React.FC = () => {
  return (
    <header className="flex justify-end">
      <TopNavbar />
    </header>
  );
}

export {Header};
