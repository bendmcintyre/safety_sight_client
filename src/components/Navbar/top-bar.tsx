import React from 'react';
import { TopNavbar } from './top-navbar';

const TopBar: React.FC = () => {
  return (
    <header className="flex justify-end">
      <TopNavbar />
    </header>
  );
}

export {TopBar};
