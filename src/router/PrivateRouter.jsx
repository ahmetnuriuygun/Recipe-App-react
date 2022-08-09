import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const PrivateRouter = () => {
  return JSON.parse(sessionStorage.getItem("kullanici")) === "osman" ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRouter;
