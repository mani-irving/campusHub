import React from "react";
import { useUserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { currentUser } = useUserContext();
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
