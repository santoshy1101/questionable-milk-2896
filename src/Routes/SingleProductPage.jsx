// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
// import { initial } from "lodash";
import React, { useState, useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom/dist";
import ProductsList from "../Pages/ProductsList";
import { addSingleCart } from "../Redux/AddSingleData/action";
import { addtoCartAction } from "../Redux/AddtoCart/action";
import { getproducts, singleProduct } from "../Redux/Product/action";
import "./SingleProductPage.css";
// import FontAwesomeIcon from "@fortawesome/fontawesome-svg-core";

function SingleProductPage({ productKey }) {
  // console.log("productKey: ", productKey);
  let newProductkey = productKey.replaceAll(" ", "").toLowerCase();
  console.log("newProductkey: ", newProductkey);
  const { id } = useParams();

  // const [product, setProduct] = useState({});
  const product = useSelector((store) => store.productReducer.product);

  const item = useSelector((store) => store.addtoCartReducer.item);
  console.log("item: ", item);
  const [addedCart, setAddedCart] = useState(false);
  const [productCount, setProductCount] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast()

  let arr = [];

  const handleAddCart = () => {
    // alert("Product Added");
    let newProduct = product;
    if (addedCart) {
      toast({
        title: 'Account created.',
        description: "This Product Already Add In Cart",
        status: 'success',
        duration: 1500,
        isClosable: true,
        position: 'top',
      })
    
      return;
    }
    // if (newProduct === product) {
    //   alert("You Have alerady added");
    //   return;
    // }
    dispatch(addtoCartAction(newProduct));
    arr.push(newProduct);

    setAddedCart(true);
  };

  useEffect(() => {
    // axios(`https://product-list-api.onrender.com/saree/${id}`).then((res) => {
    //   // console.log("res: ", res);
    //   // console.log(res.data);
    //   setProduct(res.data);
    // });
    dispatch(singleProduct(newProductkey, id));
    localStorage.setItem("cardAdded", JSON.stringify(product));

    //  .then(res=> dispatch(addedCart(res.data)))
  }, [id]);
  //   console.log("id", id);
  //   console.log("product: ", product);

  // console.log("state: ", state);

  return (
    <div>
    <div className="flex mt-5 ml-20 mr-20">
      {/* left side */}
      <div className="flex">
        <div>
          <img
            className="w-20 mx-1 border-solid border-2 border-sky-500  rounded"
            src={product.img1}
            alt=""
          />
        </div>

        <div>
          {/* middle side */}
          <div className="mx-3 border-solid border border-sky-rgb(240 240 240)  rounded">
            <img
              width={"85%"}
              className="mt-1 mb-1 ml-auto mr-auto"
              src={product.img1}
              alt=""
            />
          </div>

          <div className="flex justify-evenly  name">
            {/* <Link to={"Add to cart"}> */}
            <button className="addbtn" onClick={handleAddCart}>
              {addedCart ? "Card Added" : "Add to Cart"}
            </button>
            {/* </Link> */}
            <Link to="/checkout/address">
              <button className="addbtn2">
                {" "}
                <span>
                  {/* <FontAwesomeIcon icon="fa-solid fa-angles-right" /> */}
                </span>{" "}
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="mx-3 py-3 px-5 border-solid border border-sky-rgb(240 240 240)  rounded ">
          <h2 className="heading">{product.name}</h2>
          <h2 className="font-bold font text-lg mt-2">{product.price}</h2>
          <p className="rating">{product.rating}</p>
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
    {/* <ProductsList path={"BedSheets"} /> */}
    </div>
  );
}

export default memo(SingleProductPage);
