import { Button, Heading, Box } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React from "react";
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/supplier.png";
import pic3 from "../../assets/buisnesswithZero.png";
import Footer from "../../Components/Footer/Footer";
import "./Home.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import Filter from "../../Components/Filter";
import ProductsListForSinglePage from "../../Components/ProductsListForSinglePage";
import ProductCard from "../../Components/ProductCard";
import axios from "axios";
import ProductsList from "../ProductsList";
import { Link } from "react-router-dom";
import Accordion1 from "../../Components/Accordion1";


const categoery = [
  {
    name: "Men top wear",
  },
  {
    name: "Women Top wear",
  },
  {
    name: "Kids Wear",
  },
];

const price = [
  {
    name: "Below 500",
  },
  {
    name: "500-1000",
  },
  {
    name: "1000-2000",
  },
  {
    name: "2000-3000",
  },
  {
    name: "3000-4000",
  },
];

const Home = () => {
  const [sortingHover, setsortingHover] = React.useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    let isAuth = JSON.parse(localStorage.getItem("dataSignup"));
    // console.log("profileName: ", profileName[0].name);
    if (isAuth) {
      setName(isAuth[0].name);
    }
  }, []);
  // console.log("name :", name);

  // useEffect(()=>{
  //   axios
  //   .get(
  //     `https://meshoo-mock-server-app.onrender.com/allsaree`,
  //   )
  //   .then((res) => {

  //     console.log(res.data);
  //     // setLoading(false)
  //     // setData(res.data)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //     // setLoading(false)
  //   })

  
  // },[])

  const filtByRating=(item)=>{
   
    item= +item
    // console.log("item",typeof(item))
    // setFilt(item)
    if(item){
      let newData = data.filter((el)=>{
       return el.rating>=item
      }) ;
      // console.log(newData);
    setFilt(newData)
    }
    else{
      setFilt(data)
    }
  }

  return (
    <div>
      {/* <p>Name :{name}</p> */}
      <div className=" lg:block hidden">
      <div className="flex justify-center mt-7">
        <img className="w-[66%]" src={pic1} alt="" />
      </div>
      <div className="flex justify-center align-middle mx-auto w-[70%] ">
        <div className="section123">
          <div className="flex justify-center mx-auto">
           <Link to="allsarees" className="cursor-pointer">
           <img
           style={{
             objectFit: "contain",
             height: "320px",
             padding: "1rem",
             marginTop: "6rem",
           }}
           src="https://images.meesho.com/images/marketing/1649760442043.webp"
           alt=""
         />
           </Link>
           <Link to="/alltopwear">
           <img
           style={{
             objectFit: "contain",
             height: "280px",
             padding: "1rem",
             marginTop: "8rem",
           }}
           src="https://images.meesho.com/images/marketing/1649760423313.webp"
           alt=""
         />
           </Link>
           <Link to="/dresses">
           <img
           style={{
             objectFit: "contain",
             height: "280px",
             padding: "1rem",
             marginTop: "8rem",
           }}
           src="https://images.meesho.com/images/marketing/1649759799809.webp"
           alt=""
         />
           </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center align-middle mx-auto w-[70%]">
        <div className="section245">
          <div className="flex justify-center mx-auto">
            <div className="mt-[22%] mr-3">
              <div className="px-16 py-3 m-auto text-2xl font-semibold rounded-full bg-slate-200">
                View All
              </div>
            </div>
            <div>
              <img
                style={{
                  objectFit: "contain",
                  height: "280px",
                  padding: "1rem",
                  marginLeft: "3%",
                  marginTop: "8rem",
                }}
                src="https://images.meesho.com/images/marketing/1649760808952.webp"
                alt=""
              />
              <img
                src="https://images.meesho.com/images/marketing/1664364866805.webp"
                alt=""
              />
            </div>
            <div>
              <img
                style={{
                  objectFit: "contain",
                  height: "280px",
                  padding: "1rem",
                  marginTop: "8rem",
                }}
                src="https://images.meesho.com/images/marketing/1649760703179.webp"
                alt=""
              />
              <img
                src="https://images.meesho.com/images/marketing/1664364917657.webp"
                alt=""
              />
            </div>
            <div>
              <img
                style={{
                  objectFit: "contain",
                  height: "280px",
                  padding: "1rem",
                  marginTop: "8rem",
                }}
                src="https://images.meesho.com/images/marketing/1649760786763.webp"
                alt=""
              />
              <img
                src="https://images.meesho.com/images/marketing/1664364898513.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="flex justify-center mt-7">
        <img className="w-[63%]" src={pic3} alt="" />
      </div>
      <div className="flex justify-center mt-7">
        <img className="w-[66%]" src={pic2} alt="" />
      </div>

     
      <div className="mx-auto mt-16 ml-8">
        <Heading>Products For You</Heading>
      </div>
 
      

      <div className="">
   
                <ProductsList/>
       </div>

      <Footer />
      <Accordion1/>
    </div>
  );
};

export default Home;
