// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
// import { initial } from "lodash";
import React, { useState, useEffect, memo } from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom/dist";
import ProductsList from "../Pages/ProductsList";
import { addSingleCart } from "../Redux/AddSingleData/action";
import { addtoCartAction } from "../Redux/AddtoCart/action";
import { getproducts, singleProduct } from "../Redux/Product/action";
import "./SingleProductPage.css";
// import FontAwesomeIcon from "@fortawesome/fontawesome-svg-core";

function SingleProductPage({ productKey }) {
  console.log("productKey:1211323232323 ", productKey);
  let newProductkey = productKey.replaceAll(" ", "").toLowerCase();
  // console.log("newProductkey: ", newProductkey);
  const { id } = useParams();

  // const [product, setProduct] = useState({});
  const product = useSelector((store) => store.productReducer.product);

  const item = useSelector((store) => store.addtoCartReducer.item);
  // console.log("item: ", item);
  const [addedCart, setAddedCart] = useState(false);
  const [productCount, setProductCount] = useState(0);
  const [size, setSize] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  // let arr = [];

  const handleAddCart = () => {
    // alert("Product Added");
    let newProduct = product;
    if (size) {
      let updateProduct = { ...newProduct, size };
      axios
        .post(
          "https://meshoo-mock-server-app.onrender.com/addtocartdata",
          updateProduct
        )
        .then((res) => {
          // console.log("res455666768888", res);
          dispatch(addtoCartAction(res.data));
        });
      setSize("");

      // arr.push(newProduct);

      setAddedCart(true);

      // alert("product added in cart");
      toast({
        title: "Product Added In Cart",
        description: "This Product Already Add In Cart",
        status: "success",
        duration: 1500,
        isClosable: true,
        position: "top",
      });

      return;
    } else {
      // alert("please select the size");
      toast({
        title: "Please Select The Size",
        description: "This Product Already Add In Cart",
        status: "success",
        duration: 1500,
        isClosable: true,
        position: "top",
      });
      
      return;
    }
    if (addedCart) {
      toast({
        title: "Account created.",
        description: "This Product Already Add In Cart",
        status: "success",
        duration: 1500,
        isClosable: true,
        position: "top",
      });

      return;
    }
    // if (size == "") {
    //   // toast({
    //   //   title: "Account created.",
    //   //   description: "Please select the size",
    //   //   status: "success",
    //   //   duration: 1500,
    //   //   isClosable: true,
    //   //   position: "top",
    //   // });
    //   // return;

    //   return;
    // } else {

    // }
  };
  // console.log("size1213", size);

  const handleSize = (e) => {
    // console.log("handleSIze");
    let newSize = e.target.innerText;
    setSize(newSize);
  };

  useEffect(() => {
    dispatch(singleProduct(newProductkey, id));
    localStorage.setItem("cardAdded", JSON.stringify(product));

    setSize(product.size);
    // return () => {
    //   return dispatch(singleProduct(newProductkey, id));
    // };
  }, [id]);
  // console.log("size", size);
  // console.log("product: ", product);

  // console.log("state: ", state);
  // console.log("product rmcfomrcosize", product.size ?"working" :"notworking");

  return (
    <div>
      <div className="flex flex-col mt-5 ml-20 mr-20 lg:flex-row md:flex-col">
        {/* left side */}
        <div className="flex">
          <div className="leftdiv">
            <img
              className="w-20 mx-1 border-2 border-solid rounded border-sky-500 leftside"
              src={product.img1}
              alt=""
            />
          </div>

          <div className="left2div">
            {/* middle side */}
            <div className="mx-3 border-solid border border-sky-rgb(240 240 240)  rounded">
              <img
                width={"85%"}
                className="mt-1 mb-1 ml-auto mr-auto"
                src={product.img1}
                alt=""
              />
            </div>

            <div className="flex justify-evenly name">
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
          <div className="mx-3 py-3 px-5 border-solid border border-sky-rgb(240 240 240)  rounded rightside1">
            <h2 className="heading">{product.name}</h2>
            <h2 className="mt-2 text-lg font-bold font">{product.price}</h2>
            {/* <p className="rating">{product.rating}</p> */}
            <div className="flex items-center my-[5px]">
              <div className=" gap-x-1 px-2 rounded-2xl text-slate-50 text-lg font-semibold flex bg-green-400 items-center  mr-[14px]">
                <p>{product.rating}</p>
                <div>
                  <AiFillStar color="white" size={15} />
                </div>
              </div>
              <p className="text-sm font-semibold text-slate-400">
                {product.reviews}
              </p>
            </div>
            <p className="delivery">{product.delivery}</p>
          </div>

          <div className="mx-3 py-3 px-5 border-solid border border-sky-rgb(240 240 240)  rounded my-3 sizediv ">
            <h2 className="my-3 font-bold">Select Size</h2>
            <div className="flex gap-x-5">
              {product.size &&
                product.size.map((el, index) => {
                  return (
                    <button
                      onClick={(e) => handleSize(e)}
                      className="border px-4 text-lg font-semibold rounded-2xl hover:text-[#F43397] 
      hover:border-[#F43397] duration-200 text-slate-800"
                      key={index}
                    >
                      {el}
                    </button>
                  );
                })}
            </div>
          </div>

          <div className="mx-3 py-3 px-5 border-solid border border-sky-rgb(240 240 240)  rounded my-3 sizediv">
            <h2 className="my-5">Product Details</h2>
            <p>Name : {product.name}</p>
            {/* <p className="w-[30%]">Desc : {product.desc}</p> */}
            <p> Net Quantity (N): {product.quantity} </p>
            <p>Sizes : {product.size}</p>
            <p> Country of Origin : India</p>
          </div>
        </div>
      </div>
      {/* <ProductsList path={"BedSheets"} /> */}
    </div>
  );
}

export default memo(SingleProductPage);