import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import React from "react";

export const PrivateRoute: React.FC = () => {
  const { token } = useAuth();
  //return token ? <Outlet /> : <Navigate to="/login" />;
  return <Outlet />;
};