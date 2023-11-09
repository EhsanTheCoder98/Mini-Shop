import React from 'react';
import Login from './components/Login';
import LandingPage from './components/LandingPage';

// SPA
import { Routes , Route , Navigate } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/*' element={<Navigate to={"/login"} />} />
      <Route path='/landingpage' element={<LandingPage />} />
    </Routes>
  );
}   

export default App;