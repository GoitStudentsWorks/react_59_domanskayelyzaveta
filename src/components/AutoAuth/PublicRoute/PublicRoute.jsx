import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/selectors';

const PublicRoute = () => {
  const token = useSelector(selectToken);
  return !token ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default PublicRoute;
