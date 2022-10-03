import React from "react";
import {Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/Login/Login";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../themeConfig";
import Register from "../components/Register/Register"


const PublicRoutes = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="*" element={(<Navigate to="/login" /> || <Navigate to="/Register" /> )} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default PublicRoutes;
