// src/Home.js
import React from 'react';

import { Link } from 'react-router-dom';
function Home() {
  
  return (
    <div>
      <nav>
        <ul><li><Link to="/Profile">Profile</Link></li></ul>
        <ul><li><Link to="/Account">Account</Link></li></ul>
        
      </nav>
    </div>
  );
}

export default Home;
