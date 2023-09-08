import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
//import reportWebVitals from './reportWebVitals';

import { GoogleOAuthProvider } from '@react-oauth/google';

import { store } from './app/store';
import { App } from './App';
import { SuspenseContent } from './app/components/layout';

const container = document.getElementById('root') as Element;
const root = createRoot(container);
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

root.render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
  {/* <React.StrictMode> */}
    <Suspense fallback={<SuspenseContent />}>
      <Provider store={store}>
        <App  />
      </Provider>
    </Suspense>
  {/* </React.StrictMode> */}
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();