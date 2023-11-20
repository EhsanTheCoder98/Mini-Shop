import React from "react";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";
// SPA
import { Routes, Route, Navigate } from "react-router-dom";

const NavbarAndPage = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Navigate to="/landingpage" />} />
      <Route path="/landingpage" element={<LandingPage />} />
    </Routes>
  </>
);

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Navigate to={"/login"} />} />
        <Route path="/landingpage" element={<NavbarAndPage />} />
      </Routes>
    </Provider>
  );
};

export default App;
