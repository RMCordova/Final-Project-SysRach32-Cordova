import React from 'react';
import { Link } from 'react-router-dom';
import './mainmenu.component.css';

function MainMenu() {
  return (
    <div className="main-menu-container">
      <h2>Main Menu</h2>
      <ul>
        <li>
          <Link to="/job-listings">Job Listings</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/messages">Messages</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default MainMenu;
