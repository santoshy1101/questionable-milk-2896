import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./AddToCart.css";
import {
  decrementActionCart,
  getTotalActionCart,
  increamentActionCart,
  removeActionCart,
} from "../../Redux/AddtoCart/action";
import { Link } from "react-router-dom";
import axios from "axios";
import { BsPlusSquareFill } from "react-icons/bs";
import { AiFillMinusSquare } from "react-icons/ai";

export default function AddToCart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const { item, totalAmount, totalItem } = useSelector((store) => {
    return {
      item: store.addtoCartReducer.item,
      totalAmount: store.addtoCartReducer.totalAmount,
      totalItem: store.addtoCartReducer.totalItem,
    };
  });

  const isAuth = useSelector((store) => store.authReducer.isAuth);
  console.log("isAuth: ", isAuth);
  // console.log("item:23242 ", item);
  console.log("totalAmount: ", totalAmount);

  const dispatch = useDispatch();
  const [overightData, setOverightData] = useState([]);

  // const getData = () => {
  //   // axios.post("http://localhost:8080/posts",)

  //   axios
  //     .get("http://localhost:8080/posts")
  //     .then((res) => setOverightData(res.data));
  // };

  // let newProduct;
  // const hadleAdd = () => {
  //   console.log("Add");
  //   axios.post("http://localhost:8080/posts", newProduct);
  // };

  useEffect(() => {
    // getData();
    // newProduct = item.map((curElem) => {
    //   if (curElem.id === overightData.id) {
    //     return { ...curElem, quantity: overightData.quantity };
    //   }
    //   return curElem;
    // });

    dispatch(getTotalActionCart());
  }, [item]);

  return (
    <>
      {item.length === 0 ? (
        <div>
          <img
            src="https://images.meesho.com/images/pow/empty-cart.png"
            className="m-auto mt-4"
            alt=""
          />
          <p className="emptycart">Your Cart is empty</p>
          <div className="text-center ">
            <Link to="/">
              <button className="viewbtn">Viem Product</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-around max-h-full px-4 py-8 sm:items-start gap-y-3 gap-x-4 sm:flex-row ">
          {/* left side */}

          <div className="">
            <h1
              className="decoration-black
    font-medium
    text-[18px]"
            >
              Cart <span className="text-slate-400">| {totalItem} Item</span>
            </h1>
            <div className="flex gap-y-4 flex-col mb-8 border items-center px-8 py-5 w-[100%]  shadow-xl rounded-sm ">
              {item.map.length > 0 &&
                item.map(({ id, img1, price, size, quantity, name }) => {
                  return (
                    <div
                      className="flex sm:gap-2 items-center font-semibold border  gap-y-8 px-4 flex-col md:flex-row py-8  shadow-md rounded-sm w-[100%]"
                      key={id}
                    >
                      <div className="rounded-lg w-[100%] sm:w-[200px]  h-[170px] ">
                        <img
                          className="w-[100%] h-[100%]  object-contain"
                          src={img1}
                          alt={name}
                        />
                      </div>

                      <div className="flex flex-col  w-[100%] gap-y-4">
                        <p className="text-sm ">{name}</p>

                        <div className="flex justify-between items-center text-[10px]">
                          <p className="w-[120px] te">Size: {size}</p>
                          <div className="flex items-center gap-x-2 w-[] ">
                            Qty:
                            <div
                              onClick={() => dispatch(decrementActionCart(id))}
                            >
                              <AiFillMinusSquare size={25} />
                            </div>
                            <input
                              className=" text-center w-[10%]  "
                              type="text"
                              placeholder={quantity}
                              disabled
                            />
                            <div
                              onClick={() => dispatch(increamentActionCart(id))}
                            >
                              <BsPlusSquareFill size={20} />
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-4 ">Price: {price}</div>

                        <button
                          className="text-[#F43397] text-start "
                          onClick={() => dispatch(removeActionCart(id))}
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Right side */}
          <div className="text-[12px] h-[90%] lg:w-[300px] md:w-[290px] sm:w-[40%] w-[290px] px-8 py-4 border flex flex-col gap-y-2 shadow-2xl rounded-sm ">
            <h2 className="text-xl font-bold">Price Details</h2>

            <div className="flex justify-between py-2 font-semibold">
              {/* className="flex justify-between" */}
              <p>Total Product Price </p>
              <p>₹{totalAmount}</p>
            </div>
            <div className="border-[0.5px]"></div>
            {/* style={{ border: "1px solid rgb(240 240 240)" }} */}
            <div className="flex justify-between font-semibold">
              {/* className="flex items-center justify-between" */}
              <p>Order Total </p>
              <p>₹{totalAmount}</p>
            </div>
            <Link to={"/checkout/address"}>
              <div className="py-2 my-2 md:text-2xl text-[14px] text-center bg-[#F43397] rounded-lg text-slate-50">
                Continue
              </div>
            </Link>
            <div className="w-[100%]">
              <img
                src="	https://images.meesho.com/images/marketing/1588578650850.webp"
                className="w-[100%]"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
          
    </>
  );
}
