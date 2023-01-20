import axios from "axios";
import {
  EDIT_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./actionType";

const getproductsRequestAction = () => {
  return { type: GET_PRODUCTS_REQUEST };
};

const getproductsSuccessAction = (payload) => {
  return { type: GET_PRODUCTS_SUCCESS, payload };
};

const getproductsFailureAction = () => {
  return { type: GET_PRODUCTS_FAILURE };
};

export const getproducts = (productKey) => (dispatch) => {
  dispatch(getproductsRequestAction());

  axios
    .get(`https://product-list-api.onrender.com/${productKey}`)
    .then((res) => {
      dispatch(getproductsSuccessAction(res.data));
    })
    .catch((err) => {
      dispatch(getproductsFailureAction());
    });
};

export const singleProduct = (productKey, id) => (dispatch) => {
  dispatch(getproductsRequestAction());

  axios
    .get(`https://meshoo-mock-server-app.onrender.com/${productKey}/${id}`)
    .then((res) => {
      console.log(res);
      dispatch(getproductsSuccessAction(res.data));
    })
    .catch((err) => {
      dispatch(getproductsFailureAction());
    });
};
