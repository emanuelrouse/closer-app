import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav(props) {
  return ( 
  <nav role="navigation" className={props.className}>
    <ul className="nav-bar">
      <li>
        <Link to="/home" className="nav-links">
          Home
        </Link >
      </li>
      <li>    
        <Link to="/registration" className="nav-links">
          Register
        </Link >
      </li>
      <li>
        <Link to="/action-plan" className="nav-links">
          Action Plan
        </Link>
      </li>
    </ul>
  </nav>
  );
};

export default Nav;