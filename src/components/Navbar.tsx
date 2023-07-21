import React from 'react';
import ActiveLink from './ActiveLink';
import '../styles.css';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-around mt-5">
      <ActiveLink to="/inspection-form" className="text-white">Inspection Form</ActiveLink>
      <ActiveLink to="/inspection-history" className="text-white">Inspection History</ActiveLink>
      <ActiveLink to="/inspection-type-management" className="text-white">Inspection Type Management</ActiveLink>
      <ActiveLink to="/user-management" className="text-white">User Management</ActiveLink>
      <ActiveLink to="/login" className="text-white">Login</ActiveLink>
      <ActiveLink to="/register" className="text-white">Register</ActiveLink>
    </nav>
  );
}

export default Navbar;
