// import "./newaccount.css";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Tooltip,
  useToast,
  Image,
} from "@chakra-ui/react";
import { AiFillLock } from "react-icons/ai";
export default function NewAccount() {
  let Data = JSON.parse(localStorage.getItem("dataSignup")) || [];
  const [erroi, setErr] = useState(false);
  const [focus, setFocus] = useState(false);

  const toast = useToast();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    isAuth: false,
  });
  let nam, val;
  const handleInputChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    nam = e.target.name;
    val = e.target.value;
    setUser({ ...user, [nam]: val });
  };
  const handleClick = () => {
    setFocus(true);
    setTimeout(() => {
      if (user.name === "" || user.email === "" || user.password === "") {
        setErr(true);
        setFocus(false);
      } else {
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        Data.push(user);
        localStorage.setItem("dataSignup", JSON.stringify(Data));
        setFocus(false);
      }
    }, 1000);
  };

  return (
    <div >
      <div className=" background1">
        <div className="flex flex-col px-8 py-8  box111 rounded-xl gap-y-4">
          <img
            src="https://images.meesho.com/images/marketing/1661417516766.webp"
            alt=""
          />

          <FormControl isInvalid={erroi}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
            />
            {erroi ? (
              <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
            />
            {erroi ? (
              <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}

            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
            />
            {erroi ? (
              <FormHelperText>Enter the Password</FormHelperText>
            ) : (
              <FormErrorMessage>Password is required.</FormErrorMessage>
            )}
            <Button
              onClick={handleClick}
              isLoading={focus}
              loadingText="Submitting"
              colorScheme="pink"
              variant="outline"
              style={{ marginTop: "20px" }}
            >
              Sign Up
            </Button>
            <br />
            <Link>
              Already logged in ?{" "}
              <Link to="/login" style={{ color: "blue" }}>
                Login
              </Link>
            </Link>
            <div style={{ fontSize: "12px" }}>
              By Creating an account,you agree to <br />{" "}
              <span style={{ color: "green" }}>terms and condition</span>,the
              payroll and our privacy policy
            </div>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
