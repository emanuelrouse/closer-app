import React from 'react';
import Nav from './Nav';
import '../App.css';

function HomePage() {
  return (
    <>
      <Nav />
      <header role="banner">
        <h1>Closer App</h1>
        <h2>Close the distance</h2>
      </header>
      <section>
        <header>
          <h3>It's time to close the distance</h3>
        </header>
        <p>
          Closer helps you work out the steps required to close the distance and be with your loved one once and for all.
        </p>
      </section>
      <section>
        <header>
          <h3>Create your action plan today</h3>
        </header>
        <form action="" className="signup-form">
          <div>
            <label htmlFor="first-name">First name</label>
            <input placeholder="first-name" type="text" name="first-name" id="first-name" />
          </div>
          <div>
            <label htmlFor="last-name">Last name</label>
            <input placeholder="last-name" type="text" name="last-name" id="last-name" />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button type="submit">Sign up</button>
        </form>
      </section>
    </>
  );
}

export default HomePage;