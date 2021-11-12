import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "../hooks/UserContext";

import PrivateRoute from "./private-route";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import Register from "../pages/Register";

export default function AllRoutes() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route exact path="/registrar" element={<Register />} />
          <Route
            exact
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </UserProvider>
  );
}
