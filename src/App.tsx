import React, { lazy, createContext, useState, useEffect } from 'react';
import { themeChange } from 'theme-change';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { AppRouter } from './app/components/app-router';

// attach axios to the window object
// so it can be used globally
// for example in the axios interceptors
(window as any).axios = axios;

// TODO: Refactor/repuropse this loader
import { useUserLoader } from './app/hooks/use-user-loader';

import './styles.css';

export const App: React.FC = () => {
  useUserLoader();

  //const { user } = useSelector((state: any) => state.user);
  //const isLoggedIn = new Function('return ' + user)();

  //const navTo = user ? '/app/welcome' : '/login';

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
  <>
    {/*
      <div>
        <h1>isLoggedIn: {JSON.stringify(isLoggedIn)}</h1>
        <h1>user: {JSON.stringify(user)}</h1>
        <h1>navTo: {JSON.stringify(navTo)}</h1>
      </div>
      */}
      <AppRouter />
      {/* 
    <Router>
      <Routes>
        <Route path="/app/*" element={<Layout />} />
        <Route path="*" element={<Navigate to={navTo} replace />}/>
      </Routes>
    </Router>
Place new routes over this */}
    </>
  );
}