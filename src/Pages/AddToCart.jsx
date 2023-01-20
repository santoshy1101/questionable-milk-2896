import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./AddToCart.css";
import {
  decrementActionCart,
  getTotalActionCart,
  increamentActionCart,
  removeActionCart,
} from "../Redux/AddtoCart/action";
import { Link } from "react-router-dom";

export default function AddToCart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const { item, totalAmount, totalItem } = useSelector((store) => {
    return {
      item: store.addtoCartReducer.item,
      totalAmount: store.addtoCartReducer.totalAmount,
      totalItem: store.addtoCartReducer.totalItem,
    };
  });
  // console.log("item:23242 ", item);
  console.log("totalAmount: ", totalAmount);

  const dispatch = useDispatch();

  useEffect(() => {
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
          <div className=" text-center ">
            <Link to="/">
              <button className="viewbtn">Viem Product</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center my-3">
          {/* left side */}

          <br />
          <div className=" flex flex-col gap-y-4 ">
            <h1
              className="decoration-black
    font-medium
    text-[18px]"
            >
              Cart{" "}
              <span style={{ color: "rgb(153, 153, 153)" }}>
                | {totalItem} Item
              </span>
            </h1>
            {item.map.length > 0 &&
              item.map(({ id, img1, price, size, quantity, name }) => {
                return (
                  <div className="left-side" key={id}>
                    <div className="card-section">
                      <div>
                        <img className="img-class" src={img1} alt={name} />
                      </div>

                      <div>
                        <p className="name-class">{name}</p>

                        <div className="flex">
                          <p className="size-class">Size: {size}</p>
                          <p>
                            Qty:
                            <i
                              className="fas fa-minus minus ml-[20px]"
                              onClick={() => dispatch(decrementActionCart(id))}
                            ></i>
                            <input
                              className=" text-center w-[10%] ml-[5px] "
                              type="text"
                              placeholder={quantity}
                              disabled
                            />
                            <i
                              className="fas fa-plus add"
                              onClick={() => dispatch(increamentActionCart(id))}
                            ></i>
                          </p>
                        </div>

                        <p style={{ marginBottom: "18px" }}>{price}</p>

                        <button
                          className="rem-class"
                          onClick={() => dispatch(removeActionCart(id))}
                        >
                          REMOVE
                        </button>
                      </div>

                      <div>
                        <button className="edit-class m-[10px]">EDIT</button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="vertical"></div>

          {/* Right side */}
          <div className="right-side ">
            <h2 className="price-class">Price Details</h2>

            <div className="total-class">
              {/* className="flex justify-between" */}
              <p>Total Product Price </p>
              <p>₹{totalAmount}</p>
            </div>
            <hr style={{ border: "1px solid rgb(240 240 240)" }} />
            {/* style={{ border: "1px solid rgb(240 240 240)" }} */}
            <div className="order-class ">
              {/* className="flex justify-between items-center" */}
              <p>Order Total </p>
              <p>₹{totalAmount}</p>
            </div>
            <Link to={"/address"}>
              <button className="ctn-class">Continue</button>
            </Link>
            <img
              src="	https://images.meesho.com/images/marketing/1588578650850.webp"
              className="img-class2"
              alt=""
            />
          </div>
        </div>
      )}
    </>
  );
}