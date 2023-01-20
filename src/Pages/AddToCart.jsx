import React from "react";
import "./AddToCart.css";

export default function AddToCart() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "35px" }}
    >
      {/* left side */}
      <div className="left-side">
        <h1>Cart |</h1>

        <div className="card-section">
          <div>
            <img
              className="img-class"
              src="https://images.meesho.com/images/products/175747025/5ugld_400.jpg"
              alt=""
            />
          </div>

          <div>
            <p className="name-class">Chinon sarees</p>

            <div className="flex">
              <p className="size-class">Size: Free size</p>
              <p>Qty: 2</p>
            </div>

            <p style={{ marginBottom: "18px" }}>$:466</p>

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

      <div class="vertical"></div>
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
