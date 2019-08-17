import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import RegistrationForm from './components/RegistrationForm';
// import UserPage from './components/UserPage';
import ActionPlanPage from './components/ActionPlanPage';
import './App.css';

function App() {
  return (
    <main className="app">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/registration" component={RegistrationForm} />
        <Route path="/action-plan" component={ActionPlanPage} /> 
      </Switch>
    </main>
  );
}

export default App;