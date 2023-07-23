import React from 'react';
import { ActiveLink } from './ActiveLink';

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-col items-start mt-5">
      <ActiveLink to="/inspection-form" className="text-primary">Inspect</ActiveLink>
      <ActiveLink to="/inspection-history" className="text-primary">Inspection History</ActiveLink>
      <ActiveLink to="/manage-inspections" className="text-primary">Manage Inspections</ActiveLink>
      <ActiveLink to="/manage-users" className="text-primary">Manage Users</ActiveLink>
      <ActiveLink to="/contact" className="text-primary">Contact</ActiveLink>
      <ActiveLink to="/login" className="text-primary">Login</ActiveLink>
      <ActiveLink to="/register" className="text-primary">Register</ActiveLink>
    </nav>
  );
}

export {Navbar};
