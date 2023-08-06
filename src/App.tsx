import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { useUserLoader } from './hooks/use-user-loader';

import { TopBar } from './components/navbar/top-bar';
import { RoutesComponent } from './components/navbar/routes';
import { InspectionProvider } from './components/inspection/inspection-context';
import './styles.css'; 

const App: React.FC = () => {
  useUserLoader();

  return (
    <InspectionProvider>
      <Router>
        <div className="m-10 p-10 rounded-lg shadow-lg bg-primary dark:bg-dmbg">
          <TopBar />
          
          <div className="grid grid-cols-12">
            
            <div className="col-span-10">
              <RoutesComponent />
            </div>
          </div>
        </div>
      </Router>
    </InspectionProvider>
  );
}

export {
  App,
};
