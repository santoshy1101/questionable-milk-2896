import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import SingleProductPage from "../Routes/SingleProductPage";

import { singleProductName } from "../All Data/singleProductName";
import Address from "../Pages/Address";
import AddToCart from "../Pages/AddToCart";
import NewAccount from "../Pages/SignUp";
import ProductsList from "../Pages/ProductsList";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/All Sarees" element={<ProductsList path={"All Sarees"} p={1}/>} />
      <Route path="/signup" element={<NewAccount  />} />
      <Route path="/All Top Wear" element={<ProductsList path={"All Top Wear"} p={1}/>} />
      <Route path="/BedSheets" element={<ProductsList path={"BedSheets"}/>} />
      <Route path="/Dresses" element={<ProductsList path={"Dresses"}/>} />
      <Route path="/checkout/address" element={<Address />} />
      <Route path="/Add to cart" element={<AddToCart />} />

      {singleProductName.map((el, ind) => {
        console.log("dsfdsffefewfefeew", el);
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
    </Routes>
  );
};

export default AllRoutes;
