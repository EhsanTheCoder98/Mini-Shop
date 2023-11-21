import React from "react";

// components
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";

// SPA
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

const NavbarAndPage = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Navigate to={"/login"} />} />
        <Route path="/landingpage/*" element={<NavbarAndPage />}>
          <Route index element={<LandingPage />} />
        </Route>
        <Route path="/productdetail" element={<ProductDetails />}/>
      </Routes>
    </Provider>
  );
};

export default App;
