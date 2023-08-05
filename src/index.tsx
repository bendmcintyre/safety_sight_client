import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const container = document.getElementById('root') as Element;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <div className="bg-primary dark:bg-dmbg h-full w-full">
    <App  />
    </div>
    
  </React.StrictMode>
);

