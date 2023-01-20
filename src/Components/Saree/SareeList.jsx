import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import styles from "../Saree/Styles/SareeList.module.css";
import ProductCard from "../ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getproducts } from "../../Redux/Product/action";

const SareeList = () => {
  const [sareeData, setSareeData] = useState([]);
  const [loading, setLoading] = useState(false);

  // use Redux formate
  // const { loading, sareeData } = useSelector((store) => {
  //   return {
  //     sareeData: store.productReducer.product,
  //     loading: store.productReducer.loading,
  //   };
  // });
  // const dispatch = useDispatch();

  const getSarrees = () => {
    setLoading(true);
    axios
      .get("https://meshoo-mock-server-app.onrender.com/allsarees")
      .then((res) => {
        setSareeData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getSarrees();
    // dispatch(getproducts("saree"));      //redux formate
  }, []);

  console.log(sareeData);
  if (loading) {
    return (
      <div style={{ marginTop: "100px", fontSize: "40px" }}>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className={styles.sareeList}>
      {sareeData.length > 0 &&
        sareeData.map((ele) => {
          return <ProductCard key={ele.id} {...ele} />;
        })}
    </div>
  );
};

export default SareeList;
