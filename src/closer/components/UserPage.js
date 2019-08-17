import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import './UserPage.css';
 
function UserPage() {
  return (
    <>
      <Nav />
      <main role="main">
        <header>
        <h1>Welcome back, Username</h1>
        </header>
        <section>
          <h2>Create new action plan</h2>
          <button type="submit">New action plan</button>
          <h3>Your action plans</h3>
          <ul>
            <Link to="/action-plan">
              <li>Action plan 1</li>
            </Link>
            <Link to="/action-plan">
              <li>Action plan 2</li>
            </Link>
          </ul>
          </section>
        </main>
        <footer role="contentinfo">
          <h2>Footer</h2>
        </footer>
    </>
  );
};

 
 
export default UserPage;