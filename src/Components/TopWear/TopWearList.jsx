import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import TopWearCard from "./TopWearCard";
import styles from "../TopWear/Styles/TopWearList.module.css";
import { Link } from "react-router-dom";

const TopWearList = () => {
  const [TopWearData, setTopWearData] = useState([]);

  const getTopWearData = () => {
    axios
      .get("https://product-list-api.onrender.com/topWear")
      .then((res) => setTopWearData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getTopWearData();
  }, []);

  // console.log(sareeData);
  return (
    <div className={styles.topWearList}>
      {TopWearData &&
        TopWearData.map((ele) => {
          return <TopWearCard key={ele.id} {...ele} />;
        })}
    </div>
  );
};

export default TopWearList;
