import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './landingpage.component.css';
import MainMenuPage from './mainmenu.component';

function LandingPage() {
  return (
    <div className="landing-page-container">
      <Link to="/mainmenu-page" className="btn btn-primary">Explore</Link>
      <Routes>
        <Route exact path="/mainmenu-page" element={<MainMenuPage />} />
      </Routes>
    </div>
  );
}

export default LandingPage;

