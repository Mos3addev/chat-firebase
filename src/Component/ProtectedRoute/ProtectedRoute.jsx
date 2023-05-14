import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import Login from "./../Login/Login";
import RouterLayout from "../RouterLayout/RouterLayout";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user } = useAuthContext();

  if (user === null) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}
