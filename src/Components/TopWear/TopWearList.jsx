import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import styles from "../TopWear/Styles/TopWearList.module.css";
import ProductCard from "../ProductCard";

const TopWearList = () => {
  const [TopWearData, setTopWearData] = useState([]);
  const [loading,setLoading]=useState(false)

  const getTopWearData = () => {
    setLoading(true)
    axios
      .get("https://meshoo-mock-server-app.onrender.com/alltopwear")
      .then((res) =>{
        setTopWearData(res.data)
        setLoading(false)
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
   
    getTopWearData();
   
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
    <div className={styles.topWearList}>
      {TopWearData &&
        TopWearData.map((ele) => {
          return <ProductCard key={ele.id} {...ele} />;
        })}
    </div>
  );
};

export default TopWearList;
