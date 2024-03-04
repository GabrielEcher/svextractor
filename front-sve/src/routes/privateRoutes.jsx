import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

export const PrivateRoute = () => {
  const { authenticated } = useContext(AuthContext);
  return authenticated ? <Outlet /> : <Navigate to="/" />;
};