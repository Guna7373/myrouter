import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from 'react';
import AuthProvider from './'
import Hame from './Hame';
import Login from './Login';
import Proteced from './Proteced';
import Layout from './Layout';

export default function App() {
  // return (
  //   <div>
      {/* <BrowserRouter>
    <Routes> */}
        {/* <Route path='/' element={<Layout/>}> 
          <Route path='/Home' element={<Home/>}/>
        <Route path="/Profile" element={<Profile />} />
          <Route path="/Account" element={<Account />} /> 
        <Route path='/blogs/:id' element={<Blogs/>}/>
        <Route path='/contact/:id' element={<Contact/>}/> 
        <Route path='*' element={<Nopages/>}/> 
        </Route> */}
       
         {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
    <AuthProvider value={isAuthenticated}>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route path="/Hame" element={<Hame />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/proteced" element={<Proteced handleLogout={handleLogout} />} />
        </Routes>
      </Router>
    </AuthProvider>
    </BrowserRouter>
    
  );
}
}
