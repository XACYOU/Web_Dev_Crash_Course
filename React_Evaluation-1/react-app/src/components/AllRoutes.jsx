import React, { useContext } from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  const { authDetails, login, logout } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/product-details" element={
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        } />
    </Routes>
  );
};

export default AllRoutes;
