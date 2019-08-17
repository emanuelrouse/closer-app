import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav'
import './HomePage.css';

// main more than likely needs to be a main component
function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <header>
          <h1>Welcome back, Username</h1>
        </header>
        <section>
          <h2>Create a new action plan</h2>
          <button>New Action Plan</button>
          <h3>Your action plans</h3>
          <ul>
            <li><Link to="/action-plan">Action Plan 1</Link></li>
            <li><Link to="/action-plan">Action Plan 2</Link></li>
          </ul>
        </section>
        <footer role="contentinfo">Footer</footer>
      </main>
    </>
  );
};

export default HomePage;