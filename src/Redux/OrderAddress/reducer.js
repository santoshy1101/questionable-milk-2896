
const initialState = {
    userDetails: {
      name:"",
      city: "",
      phone:"",
      houseNo:"",
      roadName:"",
      pincode:"",
      state:""
      },
  };
  
  
 export const reducer = (state = initialState, action) => {
    // console.log(state, action)
    switch (action.type) {
      case "SET_NAME":
        return { ...state, userDetails: { ...state.userDetails, name: action.name } };
      case "SET_CITY":
        return { ...state, userDetails: { ...state.userDetails, city: action.city } };
      case "SET_PHONE":
        return { ...state, userDetails: { ...state.userDetails, phone: action.phone } };
      case "SET_HOUSENO":
        return { ...state, userDetails: { ...state.userDetails, houseNo: action.houseNo } };
      case "SET_ROADNAME":
        return { ...state, userDetails: { ...state.userDetails, roadName: action.roadName } };
      case "SET_PINCODE":
        return { ...state, userDetails: { ...state.userDetails, pincode: action.pincode } };
      case "SET_STATE":
        return { ...state, userDetails: { ...state.userDetails, state: action.state } };
      default:
        return state;
    }
  };
  