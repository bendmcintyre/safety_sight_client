import React from 'react';
import { LeftNavbar } from './LeftNavbar';

const LeftBar: React.FC = () => {
  return (
    <div className="bg-background p-5 flex justify-between">
      <LeftNavbar />
    </div>
  );
}

export { LeftBar };
