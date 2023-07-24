import React from 'react';
import  { TopNavbar } from './TopNavbar';

const Header: React.FC = () => {
  return (
    <header className="bg-background p-5 flex justify-end">
      <TopNavbar />
    </header>
  );
}

export {Header};
