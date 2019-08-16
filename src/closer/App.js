import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import './App.css';

function App() {
  return (
    <main className="app">
      <Route path='/' component={LandingPage} />
    </main>
  );
}

export default App;