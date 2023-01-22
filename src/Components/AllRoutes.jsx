import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import SingleProductPage from "../Routes/SingleProductPage";

import { singleProductName } from "../All Data/singleProductName";
import Address from "../Pages/AddAddress/Address";
// import AddToCart from "../Pages/AddToCart";
import NewAccount from "../Pages/SignUp";
import ProductsList from "../Pages/ProductsList";

import Payment from "../Pages/Payment";
import { Login } from "../Pages/Login";
import AddToCart from "../Pages/AddToCart/AddToCart";
import SearchComponent from "./SearchComponent";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/allsarees"
        element={
          <ProductsList productKey={"All Sarees"} path={"allsarees"} p={1} />
        }
      />
      <Route path="/signup" element={<NewAccount />} />
      <Route
        path="/alltopwear"
        element={
          <ProductsList
            productKey={"All Top Wear"}
            path={"All Top Wear"}
            p={1}
          />
        }
      />
      <Route
        path="/bedsheets"
        element={<ProductsList productKey={"bedsheets"} path={"bedsheets"} />}
      />
      <Route
        path="/dresses"
        element={<ProductsList productKey={"dresses"} path={"dresses"} />}
      />
      <Route path="/login" element={<Login />}></Route>

      <Route
        path="/payment"
        element={
          <PrivateRoute>
            {" "}
            <Payment />
          </PrivateRoute>
        }
      />

      <Route
        path="/Add to cart"
        element={
          <PrivateRoute>
            <AddToCart />
          </PrivateRoute>
        }
      />
      <Route
        path="/checkout/address"
        element={
          <PrivateRoute>
            <Address />
          </PrivateRoute>
        }
      />
      <Route path="/search" element={<SearchComponent />} />

      {singleProductName.map((el, ind) => {
        // console.log("dsfdsffefewfefeew", el);
        return (
          <Route
            key={ind}
            path={`/${el}/:id`}
            element={<SingleProductPage productKey={el} />}
          />
        );
      })}

      {/* {singleProductName.map((el, ind) => (
        <Route
          key={ind}
          path={`/${el}/:id/Add to cart`}
          element={<AddToCart productKey={el} />}
        />
      ))} */}
      <Route path="*" element={< ProductsList/>} />

    </Routes>
  );
};

export default AllRoutes;
