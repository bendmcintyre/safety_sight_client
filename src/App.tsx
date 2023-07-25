import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { TopBar } from './components/Navbar/TopBar';
import { LeftBar } from './components/Navbar/LeftBar';
import { RoutesComponent } from './components/Navbar/Routes';
import { InspectionProvider } from './components/inspection/InspectionContext';
import logo from './assets/logo_placeholder.png';
import './styles.css'; 

const App: React.FC = () => {
  return (
    <InspectionProvider>
      <Router>
        <div className="m-10 p-10 rounded-lg shadow-lg bg-primary">
          <TopBar />
          <div className="flex-shrink-0">
            <img className="w-16 h-16" alt="Safety Sight Logo" src={logo}></img>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-2 bg-primary">
              <LeftBar />
            </div>
            <div className="col-span-10">
              <RoutesComponent />
            </div>
          </div>
        </div>
      </Router>
    </InspectionProvider>
  );
}

export {App};

