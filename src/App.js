import React from "react";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";
// SPA
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Navigate to={"/login"} />} />
        <Route path="/landingpage" element={<LandingPage />} />
      </Routes>
    </Provider>
  );
};

export default App;
