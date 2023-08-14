import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { App } from './App';

const container = document.getElementById('root') as Element;
const root = createRoot(container);
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

root.render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
  {/* <React.StrictMode> */}
    <Suspense fallback={<div>Loading...</div>}>
      <App  />
    </Suspense>
  {/* </React.StrictMode> */}
  </GoogleOAuthProvider>
);
