import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import styles from "../Saree/Styles/SareeList.module.css";
import ProductCard from "../ProductCard";

const SareeList = () => {
  const [sareeData, setSareeData] = useState([]);
  const [loading,setLoading]=useState(false)

  const getSarrees = () => {
    setLoading(true)
    axios
      .get("https://product-list-api.onrender.com/saree")
      .then((res) =>{
        setSareeData(res.data)
        setLoading(false)
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    
    getSarrees();
   
  }, []);

  // console.log(sareeData);
  if(loading){
    return (
      <div style={{marginTop:"100px",fontSize:"40px"}}>
          <h1>Loading...</h1>
      </div>
    ) 
    
  }
  return (
    <div className={styles.sareeList}>
      {sareeData &&
        sareeData.map((ele) => {
          return <ProductCard key={ele.id} {...ele} />;
        })}
    </div>
  );
};

export default SareeList;
