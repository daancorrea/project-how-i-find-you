import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const user = localStorage.getItem("desafiolabs:userData");

  return user ? children : <Navigate to="/" />;
}


