import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return ( 
  <nav role="navigation">
    <Link to="/">
      Home
    </Link >
    <Link to="/register">
      Register
    </Link >
    <a href="/action-plan">
      Action
    </a>
  </nav>
  );
};

export default Nav;