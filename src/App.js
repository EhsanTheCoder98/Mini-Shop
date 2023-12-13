import React from "react";

// components
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import RecentBuys from "./components/RecentBuys";
import LikedProducts from "./components/LikedProducts";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";

// SPA
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

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
        <Route path="/*" element={<Navigate to={"/login"}/>} />
        <Route path="/landingpage/*" element={<NavbarAndPage />}>
          <Route index element={<LandingPage />} />
          <Route path="productdetail/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />}/>
          <Route path="profile" element={<Profile />}/>
        </Route>
      </Routes>
    </Provider>
  );
};


export default App;
