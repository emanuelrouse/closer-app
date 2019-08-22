import React from 'react';
import Nav from './Nav';
import './RegistrationForm.css';

function RegistrationForm() {
  return (
    <>
      <Nav />
      <form action="" className="registration-form">
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
  </>
  );
};

export default RegistrationForm;