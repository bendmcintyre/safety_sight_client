import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/common/Header';
import Routes from './components/Routes';
import './styles.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
