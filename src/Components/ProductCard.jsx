import React from "react";
import { Box, Badge } from "@chakra-ui/react";
import { img1 } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";
//import {AiFillStar} from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({
  onwards,
  delivery,
  rating,
  reviews,
  id,
  img1,
  name,
  price,
  productKey,
}) => {
  // console.log("Prodcut key of ", productKey);

  return (
    <div className="group over">
      <Link to={`/${productKey || "All Sarees"}/${id}`}>
        <div className="duration-500  border group-hover:shadow-sm group-hover:shadow-slate-500 w-[100%] rounded-3xl  ">
          {/* <img src={img1} alt="img1" height="350px" width="100%" /> */}

          <div className="h-[250px] ">
            <img
              className="w-[100%] rounded-tl-3xl  rounded-tr-3xl h-[100%] object-cover"
              src={img1}
              alt={name}
            />
          </div>
          <div className="px-4 py-4">
            <div className="text-md font-semibold text-slate-400">{name}</div>

            <div className="flex flex-col gap-y-2 ">
              <div className="flex items-end gap-x-2">
                <div className="text-2xl font-bold">{price}</div>
                <p className="text-sm font-semibold text-slate-400">
                  {onwards}
                </p>
              </div>
              <div className=" w-[110px] px-3 my-2 bg-slate-300 text-sm py-1 rounded-lg font-semibold">
                {delivery}
              </div>
              <div className=" flex items-center gap-x-2">
                <div className=" gap-x-1 px-2 rounded-2xl text-slate-50 text-lg font-semibold flex bg-green-400 items-center">
                  <p>{rating}</p>
                  <div>
                    <AiFillStar color="white" size={15} />
                  </div>
                </div>
                <div className="text-sm font-semibold text-slate-400">
                  {reviews}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;