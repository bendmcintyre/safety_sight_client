import React from 'react';
import Navbar from '../Navbar';
import '../../styles.css';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 p-5">
      <h1 className="text-white text-center text-2xl">SafetySight</h1> {/* Or replace this with your logo */}
      <Navbar />
    </header>
  );
}

export default Header;
