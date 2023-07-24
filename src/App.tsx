import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Navbar/TopBar';
import { LeftBar } from './components/Navbar/LeftBar';
import { RoutesComponent } from './components/Navbar/Routes';
import './styles.css'; 

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col bg-custom-image min-h-screen bg-gradient-custom bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end">
        <Header />
        <div className="flex flex-grow">
          <LeftBar />
          <RoutesComponent />
        </div>
      </div>
    </Router>
  );
}

export { App };
