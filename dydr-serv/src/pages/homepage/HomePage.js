import './HomePage.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

import Navbar from '../../comps/nav/Navbar.js';

function HomePage() {
    return (
    <div className="HomePage">
      <div className="Navbar">
        <Navbar />
      </div>
    </div>
    );
}

export default HomePage;