import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/common/Header';
import { RoutesComponent } from './components/Routes';
import './styles.css'; 


const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-custom-image min-h-screen bg-gradient-custom bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end">
        <div>
          <Header />
          <RoutesComponent />
        </div>
      </div>
    </Router>
  );
}

export {App};
