import React from 'react';
import { useLocation, Link } from 'react-router-dom';

interface ActiveLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string; // Add className as an optional prop
}

const ActiveLink: React.FC<ActiveLinkProps> = ({ to, children, className }) => {
  const location = useLocation();

  return (
    <Link to={to} className={`${className} ${location.pathname === to ? 'active' : ''}`}>
      {children}
    </Link>
  );
}

export { ActiveLink };
