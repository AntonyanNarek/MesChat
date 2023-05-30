import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/login";
import Register from "./Pages/register";
import Home from "./Pages/home";
import AuthController from "./Pages/authController";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <AuthController>
              <Route index element={<Home />} />
            </AuthController>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
