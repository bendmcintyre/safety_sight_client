import React from 'react';
import Navbar from '../Navbar';
import '../../styles.css';


const Header: React.FC = () => {
  return (
    <header className="bg-background p-5">
       <img src={require('../../assets/headerlogo.png')} alt="Logo" />
      <Navbar />
    </header>
  );
}

export default Header;
