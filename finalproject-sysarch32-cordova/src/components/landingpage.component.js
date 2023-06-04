import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './landingpage.component.css';
import MainMenuPage from './mainmenu.component';

function LandingPage() {
  return (
    <div className="landing-page-container">
      <h1>Welcome to the Landing Page</h1>
      <p>This is the landing page content. Start exploring now!</p>
      <Link to="/mainmenu-page" className="btn btn-primary">Explore</Link>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/mainmenu-page" element={<MainMenuPage />} />
      </Routes>
    </div>
  );
}

export default LandingPage;

