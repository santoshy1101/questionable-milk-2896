import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/dist";
import "./SingleProductPage.css";
// import FontAwesomeIcon from "@fortawesome/fontawesome-svg-core";

function SingleProductPage() {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    axios(`https://product-list-api.onrender.com/saree/${id}`).then((res) => {
      console.log("res: ", res);
      // console.log(res.data);
      setProduct(res.data);
    });
  }, [id]);
  //   console.log("id", id);
  //   console.log("product: ", product);
  return (
    <div className="flex mt-5 ml-20 mr-20">
      {/* left side */}
      <div className="flex">
        <div>
          <img
            className="w-20 mx-1 border-solid border-2 border-sky-500  rounded"
            src={product.image}
            alt=""
          />
        </div>

        <div>
          {/* middle side */}
          <div className="mx-3 border-solid border border-sky-rgb(240 240 240)  rounded">
            <img
              width={"85%"}
              className="mt-1 mb-1 ml-auto mr-auto"
              src={product.image}
              alt=""
            />
          </div>

          <div className="flex justify-evenly  name">
            <button className="addbtn">
              <span>
                <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
              </span>
              Add to Cart
            </button>
            <button className="addbtn2">
              {" "}
              <span>
                <FontAwesomeIcon icon="fa-solid fa-angles-right" />
              </span>{" "}
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="mx-3 py-3 px-5 border-solid border border-sky-rgb(240 240 240)  rounded ">
          <h2 className="heading">{product.name}</h2>
          <h2 className="font-bold font text-lg mt-2">{product.dis_price}</h2>
          <p className="rating">Rating</p>
          <p className="delivery">Free Delivery</p>
        </div>

        <div className="mx-3 py-3 px-5 border-solid border border-sky-rgb(240 240 240)  rounded my-3 ">
          <h2 className="font-bold my-3">Select Size</h2>
          <p className="border border-solid border-sky-rgb(244 51 151) rounded my-1 ">
            Free Size
          </p>
        </div>

        <div className="mx-3 py-3 px-5 border-solid border border-sky-rgb(240 240 240)  rounded my-3">
          <h2 className="my-5">Product Details</h2>
          <p>Name : {product.name}</p>
          <p> Net Quantity (N): </p>
          <p>Sizes : </p>
          <p> Country of Origin : India</p>
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;
