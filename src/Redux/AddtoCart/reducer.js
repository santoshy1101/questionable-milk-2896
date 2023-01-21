import {
  ADD_TO_CART,
  CLEAR_ITEM_CART,
  DECREMENT_ITEM_CART,
  GET_TOTAL_CART,
  INCREMENT_ITEM_CART,
  REMOVE_ITEM_CART,
} from "./actionTypes";

const initialState = {
  item: [],
  totalAmount: 0,
  totalItem: 0,
};

export const reducer = (state = initialState, action) => {
  if (action.type === ADD_TO_CART) {
    return { ...state, item: [...state.item, action.payload] };
  }

  if (action.type === REMOVE_ITEM_CART) {
    return {
      ...state,
      item: state.item.filter((curElem) => {
        return curElem.id !== action.payload;
      }),
    };
  }

  if (action.type === CLEAR_ITEM_CART) {
    return { initialState };
  }

  if (action.type === INCREMENT_ITEM_CART) {
    const updatedCart = state.item.map((curElem) => {
      if (curElem.id === action.payload) {
        return { ...curElem, quantity: curElem.quantity + 1 };
      }
      return curElem;
    });

    return { ...state, item: updatedCart };
  }

  if (action.type === DECREMENT_ITEM_CART) {
    const updatedCart = state.item
      .map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, quantity: curElem.quantity - 1 };
        }
        return curElem;
      })
      .filter((curElem) => curElem.quantity !== 0);
    return { ...state, item: updatedCart };
  }

  if (action.type === GET_TOTAL_CART) {
    let { totalItem, totalAmount } = state.item.reduce(
      (accum, curVal) => {
        let price = curVal.price.replace("₹", "");
        let quantity = curVal.quantity;
        // let { price, quantity } = curVal;

        let updatedTotalAmount = price * quantity;
        accum.totalAmount += updatedTotalAmount;

        accum.totalItem += quantity;
        return accum;
      },
      {
        totalItem: 0,
        totalAmount: 0,
      }
    );
    return { ...state, totalItem, totalAmount };
  }
  return state;
};
