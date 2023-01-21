export const handleAddress = (e) =>(dispatch) => {
    const { name, value } = e.target;
    // console.log(name,value);d
    switch (name) {
      case "name":
        dispatch({ type: "SET_NAME", name: value });
        break;
      case "city":
        dispatch({ type: "SET_CITY", city: value });
        break;
      case "phone":
        dispatch({ type: "SET_PHONE", phone: value });
        break;
      case "houseNo":
        dispatch({ type: "SET_HOUSENO", houseNo: value });
        break;
      case "roadName":
        dispatch({ type: "SET_ROADNAME", roadName: value });
        break;
      case "pincode":
        dispatch({ type: "SET_PINCODE", pincode: value });
        break;
      case "state":
        dispatch({ type: "SET_STATE", state: value });
        break;
      default:
        break;
    }
  };