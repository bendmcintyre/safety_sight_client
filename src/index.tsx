import React from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { App } from './App';
import { ThemeProvider } from "@material-tailwind/react";

const container = document.getElementById('root') as Element;
const root = createRoot(container);
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

root.render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
  <React.StrictMode>
    <div className="bg-primary dark:bg-dmbg h-full w-full">
    <ThemeProvider >
      <App  />
    </ThemeProvider>
    </div>
  </React.StrictMode>
  </GoogleOAuthProvider>
);

