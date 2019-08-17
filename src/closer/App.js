import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import RegistrationForm from "./components/RegistrationForm";
import HomePage from "./components/HomePage";
// import UserPage from "./components/UserPage";
import ActionPlanPage from "./components/ActionPlanPage";
import "./App.css";

function App() {
  return (
    <main className="app">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/registration" component={RegistrationForm} />
        <Route path="/action-plan" component={ActionPlanPage} /> 
      </Switch>
    </main>
  );
}

export default App;