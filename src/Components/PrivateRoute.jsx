import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";

export default function PrivateRoute({ children }) {
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  console.log("isAuth: ", isAuth);
  //   const navigate = useNavigate();

  if (!isAuth) {
    // return navigate("/login");
    alert("You need first Login");
    return <Navigate to="/login" />;
  }
  return children;
}
