import React from 'react';
import { Link } from 'react-router-dom';
import './landingpage.component.css'; // Import the CSS file for styling

function LandingPage() {
  return (
    <div className="landing-page-container">
      <h2>Welcome to the Landing Page</h2>
      <p>This is the landing page content.</p>
      <Link to="/main-menu" className="btn btn-primary">Explore</Link>
    </div>
  );
}

export default LandingPage;
