import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as productReducer } from "./Product/reducer";
import { reducer as authReducer } from "./Authentication/reducer";
import { reducer as addtoCartReducer } from "./AddtoCart/reducer";
import { reducer as addSingelReducer } from "./AddSingleData/reducer";
import { reducer as orderAddressReducer} from "./OrderAddress/reducer";

let rootReducer = combineReducers({
  productReducer,
  authReducer,
  addtoCartReducer,
  addSingelReducer,
  orderAddressReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
