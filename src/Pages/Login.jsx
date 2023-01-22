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

import { Link, Navigate } from "react-router-dom";

export const Login = () => {
  let Login = {};
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [load, setLoad] = useState(false);
  const toast = useToast();

  let nam, val;
  const handleInputChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    nam = e.target.name;
    val = e.target.value;
    setUser({ ...user, [nam]: val });
  };

  const handleClic = () => {
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
  };

  let data = JSON.parse(localStorage.getItem("dataLogin"));

  return (
    <div>
      <div className="background1">
        <div className="box111">
          <img
            src="https://images.meesho.com/images/marketing/1661417516766.webp"
            alt=""
          />

          <FormControl>
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
        </div>
      </div>
    </div>
  );
};
