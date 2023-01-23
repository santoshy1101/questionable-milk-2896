import { Link } from "react-router-dom";
import "./address.css";
import { ImLocation } from "react-icons/im";
import React, { useReducer, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAddress } from "../../Redux/OrderAddress/action";
import { useToast } from '@chakra-ui/react';

const Address = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const form = useRef(null);
  const dispatch = useDispatch();
  const userDetails = useSelector(
    (store) => store.orderAddressReducer.userDetails
  );
  // console.log(userDetails)
  const handleSubmit = (e) => {
    e.preventDefault();
    let empty = true;
    for (let key in userDetails) {
      userDetails[key] ? (empty = false) : (empty = true);
    }
    if (empty){
      toast({
        title: "Fill Details",
        description: "This Product Already Add In Cart",
        status: "success",
        duration: 1500,
        isClosable: true,
        position: "top",
      });
    } 
    
    console.log(userDetails);
  };

  const handleChange = (e) => {
    dispatch(handleAddress(e));
  };
  return (
    <div className="flex flex-col items-center py-16 bg-slate-100">
      <form ref={form} onSubmit={handleSubmit}>
        <div className="flex flex-col px-8 py-8 m-auto bg-white border gap-y-8 rounded-3xl">
          <div className="flex flex-col">
            {<label>Name</label>}
            <input
              className="address_input "
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              className="address_input"
              type="text"
              placeholder="Phone Number"
              name="phone"
              onChange={handleChange}
            />
          </div>
          <div className="flex">
            <div>
              <ImLocation size={30} />
            </div>
            <p className="text-3xl font-semibold">Address</p>
          </div>

          <div>
            <div className="flex flex-col gap-y-8">
              <div>
                <label>House no./ Building Name</label>
                <input
                  className="address_input"
                  type="text"
                  placeholder="House no./ Building Name"
                  name="houseNo"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Road Name/ Area Colony</label>
                <input
                  className="address_input"
                  type="text"
                  placeholder="Road Name/ Area Colony"
                  name="roadName"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Pincode</label>
                <input
                  className="address_input"
                  type="text"
                  placeholder="Pincode"
                  name="pincode"
                  onChange={handleChange}
                />
              </div>
              <div className="flex gap-x-4">
                <div>
                  <label>City</label>
                  <input
                    className="address_input"
                    type="text"
                    placeholder="City"
                    name="city"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>State</label>
                  <input
                    className="address_input"
                    type="text"
                    placeholder="State"
                    name="state"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label>NearbyLocation(optional)</label>
                <input
                  className="address_input"
                  type="text"
                  placeholder="NearbyLocation(optional)"
                />
              </div>
            </div>
          </div>
          <Link to={"/payment"}>
            <div
              type="submit"
              className=" text-center bg-[#F43397] hover:shadow-md text-2xl py-2 rounded-xl text-slate-50"
            >
              Save Address & Continue
            </div>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Address;
