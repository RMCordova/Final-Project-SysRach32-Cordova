import React from 'react';
import { Link } from 'react-router-dom';
import './landingpage.component.css';

function LandingPage() {
  return (
    <div className="landing-page-container">
      <h1>Welcome to the Landing Page</h1>
      <p>This is the landing page content. Start exploring now!</p>
      <Link to="/MainMenu" className="btn btn-primary">Explore</Link>
    </div>
  );
}

export default LandingPage;
