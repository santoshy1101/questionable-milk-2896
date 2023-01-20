import React from "react";
import { Route, Routes } from "react-router-dom";
import All_Sarees from "../Pages/All_Sarees";
import All_Top_Wear from "../Pages/All_Top_Wear";
import Bed_Sheets from "../Pages/Bed_Sheets";
import Home from "../Pages/Home";
import SingleProductPage from "../Routes/SingleProductPage";

import { singleProductName } from "../All Data/singleProductName";
import Address from "../Pages/Address";
import AddToCart from "../Pages/AddToCart";
import Payment from "../Pages/Payment";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/All Sarees" element={<All_Sarees />} />
      
      <Route path="/All Top Wear" element={<All_Top_Wear />} />
      <Route path="/Bed Sheets" element={<Bed_Sheets />} />
      <Route path="/checkout/address" element={<Address />} />
      <Route path="/checkout/payment" element={<Payment />} />
      <Route path="/Add to cart" element={<AddToCart />} />

      {singleProductName.map((el, ind) => (
        <Route key={ind} path={`/${el}/:id`} element={<SingleProductPage productKey={el} />} />
      ))}
      {singleProductName.map((el, ind) => (
        <Route key={ind} path={`/${el}/:id/Add to cart`} element={<AddToCart productKey={el} />} />
      ))}
      

     
    </Routes>
  );
};

export default AllRoutes;
