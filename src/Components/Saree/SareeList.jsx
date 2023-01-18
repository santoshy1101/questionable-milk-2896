import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import SareeCard from "./SareeCard";
import styles from "../Saree/Styles/SareeList.module.css";
import { Link } from "react-router-dom";

const SareeList = () => {
  const [sareeData, setSareeData] = useState([]);

  const getSarrees = () => {
    axios
      .get("https://product-list-api.onrender.com/saree")
      .then((res) => setSareeData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getSarrees();
  }, []);

  // console.log(sareeData);
  return (
    <div className={styles.sareeList}>
      {sareeData &&
        sareeData.map((ele) => {
          return <SareeCard key={ele.id} {...ele} />;
        })}
    </div>
  );
};

export default SareeList;
