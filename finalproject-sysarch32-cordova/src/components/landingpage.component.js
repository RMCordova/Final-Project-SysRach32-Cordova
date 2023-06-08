import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './landingpage.component.css';
import MainMenu from './mainmenu.component';

function LandingPage() {
  return (
    <div className="landing-page-container">
      <Link to="/mainmenu-page" className="btn btn-primary">Explore</Link>
      <Routes>
        <Route path="/mainmenu-page" element={<MainMenu />} />
      </Routes>
    </div>
  );
}

export default LandingPage;
