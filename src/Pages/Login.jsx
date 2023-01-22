import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  useToast,
  color,
  background,
  Image,
} from "@chakra-ui/react";
import "./newaccount.css";

import { useState } from "react";
import { useContext } from "react";

import { Link, Navigate, useNavigate } from "react-router-dom";

export const Login = () => {
  let Login = {};
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [load, setLoad] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  let nam, val;
  const handleInputChange = (e) => {
    e.preventDefault();
    // console.log(e.target.value);

    nam = e.target.name;
    val = e.target.value;
    setUser({ ...user, [nam]: val });
  };

  let sighup = JSON.parse(localStorage.getItem("dataSignup"));
  const handleClic = () => {
    if (sighup) {
      setLoad(true);
      setTimeout(() => {
        let flag = false;
        let loginData = JSON.parse(localStorage.getItem("dataSignup"));
        for (let i = 0; i < loginData.length; i++) {
          if (
            loginData[i].email == user.email &&
            loginData[i].password == user.password
          ) {
            flag = true;
            let name = loginData[i].name;
            Login = {
              name,
              isAuth: true,
            };
            localStorage.setItem("dataLogin", JSON.stringify(Login));
          }
        }
        if (flag) {
          setLoad(false);

          toast({
            title: "Login Succesful.",

            status: "success",
            duration: 4000,
            isClosable: true,
          });
          navigate("/");
        } else {
          setLoad(false);
          toast({
            title: "Wrong Credentials.",

            position: "top",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
        }
      }, 1000);
    } else {
      alert("First you need to sign up");
      navigate("/signup");
    }
  };

  let data = JSON.parse(localStorage.getItem("dataLogin"));

  return (
    <div>
      <div className="flex flex-col background1">
      
      <p className="mb-8 text-3xl font-semibold text-center py-1 ring-2 ring-pink-400 rounded-md w-[30%] text-slate-500">User Login</p>
        <div className="flex flex-col px-8 py-8 box111 rounded-xl gap-y-4">
          <img
            src="https://images.meesho.com/images/marketing/1661417516766.webp"
            alt=""
          />

          <FormControl >
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
            />

            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
            />

            <Button
              onClick={handleClic}
              isLoading={load}
              loadingText="Submitting"
              colorScheme="pink"
              variant="outline"
              style={{ marginTop: "20px" }}
            >
              Login
            </Button>
            <br />
          </FormControl>
         <Link to="/signup" className="flex"> <button className=" hover:text-pink-400 w-[100px] rounded-3xl text-md font-semibold text-slate-50 ml-auto py-2 bg-slate-600">SignUp</button></Link>
        </div>
      </div>
    </div>
  );
};
