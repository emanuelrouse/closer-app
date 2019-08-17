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
      </section>
    </>
  );
}

export default HomePage;