import {
  ADD_TO_CART,
  CLEAR_ITEM_CART,
  DECREMENT_ITEM_CART,
  GET_TOTAL_CART,
  INCREMENT_ITEM_CART,
  REMOVE_ITEM_CART,
} from "./actionTypes";

export const removeActionCart = (payload) => {
  return { type: REMOVE_ITEM_CART, payload };
};

export const clearActionCart = () => {
  return { type: CLEAR_ITEM_CART };
};

export const increamentActionCart = (payload) => {
  return { type: INCREMENT_ITEM_CART, payload };
};

export const decrementActionCart = (payload) => {
  return {
    type: DECREMENT_ITEM_CART,
    payload,
  };
};
export const getTotalActionCart = () => {
  return { type: GET_TOTAL_CART };
};

export const addtoCartAction = (payload) => {
  return { type: ADD_TO_CART, payload };
};
