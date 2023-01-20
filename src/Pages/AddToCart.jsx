import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./AddToCart.css";

export default function AddToCart() {
  const [totalPrice,setTotalPrice] = useState(0)
  const item = useSelector((store) => store.addtoCartReducer.item);
  // console.log("item:23242 ", item);

  return (
    <div className="flex justify-center items-center">
      {/* left side */}
    
      <br />
      <div className=" flex flex-col gap-y-4 ">
      {item.map.length > 0 &&
        item.map(({ id, img1, price, quantity, name }) => {
          
          return (
            <div className="left-side" key={id}>

              <div className="card-section">
                <div>
                  <img className="img-class" src={img1} alt={name} />
                </div>

                <div>
                  <p className="name-class">{name}</p>

                  <div className="flex">
                    <p className="size-class">Size: Free size</p>
                    <p>Qty: {quantity}</p>
                  </div>

                  <p style={{ marginBottom: "18px" }}>{price}</p>

                  <button className="rem-class">REMOVE</button>
                </div>

                <div>
                  <button
                    className="edit-class"
                    style={{ margin: "10px 10px 10px 114px" }}
                  >
                    EDIT
                  </button>
                </div>
              </div>
            </div>
          );
        })}


      </div>
    
      <div className="vertical"></div>

      {/* Right side */}
      <div className="right-side">
        <h2 className="price-class">Price Details</h2>

        <div className="total-class">
          {/* className="flex justify-between" */}
          <p>Total Product Price </p>
          <p>$414</p>
        </div>
        <hr style={{ border: "1px solid rgb(240 240 240)" }} />
        {/* style={{ border: "1px solid rgb(240 240 240)" }} */}
        <div className="order-class ">
          {/* className="flex justify-between items-center" */}
          <p>Order Total </p>
          <p>$414</p>
        </div>

        <button className="ctn-class">Continue</button>
        <img
          src="	https://images.meesho.com/images/marketing/1588578650850.webp"
          className="img-class2"
          alt=""
        />
      </div>
    </div>
  );
}
