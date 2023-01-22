import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import SingleProductPage from '../Routes/SingleProductPage'

import { singleProductName } from '../All Data/singleProductName'
import Address from '../Pages/AddAddress/Address'
import AddToCart from '../Pages/AddToCart/AddToCart'
import NewAccount from '../Pages/SignUp'
import ProductsList from '../Pages/ProductsList'

import Payment from '../Pages/Payment'
import { Login } from '../Pages/Login'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/allsarees"
        element={<ProductsList path={'allsarees'} p={1} />}
      />
      <Route path="/signup" element={<NewAccount />} />
      <Route
        path="/alltopwear"
        element={<ProductsList path={'alltopwear'} p={1} />}
      />
      <Route path="/bedsheets" element={<ProductsList path={'bedsheets'} />} />
      <Route path="/dresses" element={<ProductsList path={'dresses'} />} />
      <Route path="/address" element={<Address />} />

      <Route path="/login" element={<Login />}></Route>
      <Route path="/payment" element={<Payment />} />

      <Route path="/Add to cart" element={<AddToCart />} />

      {singleProductName.map((el, ind) => {
        // console.log("dsfdsffefewfefeew", el);
       el= el.replaceAll(" ","").toLowerCase()
        return (
          <Route
            key={ind}
            path={`/${el}/:id`}
            element={<SingleProductPage productKey={el} />}
          />
        )
      })}
      {/* {singleProductName.map((el, ind) => (
        <Route
          key={ind}
          path={`/${el}/:id/Add to cart`}
          element={<AddToCart productKey={el} />}
        />
      ))} */}
    </Routes>
  )
}

export default AllRoutes
