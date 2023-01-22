import React, { useEffect, useState } from "react";
import { TfiMobile } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { navListData } from "../All Data/navCategoryList";
import { useDispatch, useSelector } from "react-redux";
import { getTotalActionCart } from "../Redux/AddtoCart/action";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useDebounce } from "use-debounce";
import ProductsList from "../Pages/ProductsList";
import ProductCard from "./ProductCard";
import SearchComponent from "./SearchComponent";
import { FcBusinessman } from "react-icons/fc";
const catList = [
  "Women Ethnic",
  "Women Western",
  "Men",
  "Kids",
  "Home & Kitchen",
  "Beauty & Health",
  "Jewellery & Accessories",
  "Bags & Footwear",
  "Electronics",
];

const Navbar = () => {
  // const [searchText, setSearchText] = useState("");
  const [navCatSelect, setNavCatSelect] = useState("");
  const [profile, setProfile] = useState("");
  const [navCatData, setNavCatData] = useState([]);
  const { WomenEthnic } = navListData;
  const navigate = useNavigate();

  //searchfunction
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 300);
  const [sarees, setSarees] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  // const [showDataSearch,setShowDataSearch]=useState(true)

  //UserName Logic
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  // console.log("isAuth: ", isAuth)
  let profileNameGet = JSON.parse(localStorage.getItem("dataSignup"));
  // console.log("profileNameGet: ", profileNameGet);
  // if(!profileName)
  let profileName;
  if (profileNameGet !== null) {
    profileName = profileNameGet[0].name;
  }
  // console.log("profileName: ", profileName);
  // console.log("profileName: ", profileName);

  useEffect(() => {
    fetch("https://meshoo-mock-server-app.onrender.com/allsarees")
      .then((response) => response.json())
      .then((data) => setSarees(data));
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm === "") {
      setSearchResults([]);
    } else {
      // setShowDataSearch(true);
      const results = sarees.filter((saree) =>
        saree.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [debouncedSearchTerm, sarees]);

  const { item, totalItem } = useSelector((store) => {
    return {
      item: store.addtoCartReducer.item,
      totalItem: store.addtoCartReducer.totalItem,
    };
  });

  const dispatch = useDispatch();

  const searchTextClearHandler = () => {
    // setSearchText("");
    setSearchTerm("");
  };
  const navHoverHandler = (hoverdCat) => {
    setNavCatSelect(hoverdCat);
    hoverdCat && setNavCatData(navListData[hoverdCat]);
  };

  const subCategoryClickHandler = (path) => {
    let newPath = path.replaceAll(" ", "").toLocaleLowerCase();

    setNavCatSelect("");
    navigate(`/${newPath}`);
  };

  useEffect(() => {
    dispatch(getTotalActionCart());
  }, [item]);

  const profileHandler = (file) => {
    file = file.toLowerCase().replaceAll(" ", "");
    if (
      file === "hello,useroradmintoaccessyourmeeshooaccountuseradminmyorders"
    ) {
      setProfile("profile");
    } else {
      setProfile(file);
    }
  };

  return (
    <>
      <div className="sticky top-0 bg-[#ffffff]">
        <div
          onMouseEnter={() => setNavCatSelect("")}
          className="border-b-[1.2px] relative  flex-col-reverse lg:flex-row  border-gray-400 flex px-8 items-center justify-between"
        >
          {/* nav-top left side div */}
          <div className="flex flex-col w-[100%]  lg:flex-row items-center border  justify-between lg:w-[40%]  gap-x-[40px] ">
            <div className="w-[60px] my-2 rounded-3xl hidden lg:block">
              {/* logo */}
              <Link to="/">
                <img className="w-[100%]  rounded-3xl" src={logo} alt="logo" />
              </Link>
            </div>
            {/*  input box div */}
            <div className="flex items-center justify-center px-2 py-2 rounded-lg lg:w-[400px] shadow-md border border-cyan-400 gap-x-1  w-[100%]">
              <div className="flex items-center font-bold text-slate-400">
                <CiSearch size={25} />
              </div>
              <input
                // value={searchText}
                // onChange={(e) => setSearchText(e.target.value)}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                placeholder="Try Saree, Kurti or Search by Product Code"
                className=" rounded-sm flex sm:text-[15px] text-[9px] font-[600]   w-[100%] outline-none "
              />
              <div
                onClick={searchTextClearHandler}
                className={` ${
                  searchTerm.length > 0 ? "text-gray-500" : "text-white"
                }  cursor-pointer `}
              >
                <RxCross2 size={20} />
              </div>
            </div>
          </div>
          {/* nav-top right side div */}

          <div className="flex items-center font-semibold  justify-between gap-4 lg:w-[40%]  w-[100%]">
            <div className="w-[60px] my-2 rounded-3xl lg:hidden sm:block">
              {/* logo */}
              <Link to="/">
                <img className="w-[100%] rounded-3xl" src={logo} alt="logo" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="flex flex-row items-center justify-between ">
                <div>
                  <TfiMobile size={20} />
                </div>
                <div>Download App</div>
              </div>
            </div>
            <div className="h-[45px] border border-gray-400 hidden lg:block"></div>
            <div className="hidden lg:block">Become a Supplier</div>
            <div className="h-[45px] border border-gray-400  hidden lg:block"></div>
            <div className="flex ">
              <div
                onMouseLeave={() => setProfile("")}
                onMouseEnter={(e) => profileHandler(e.target.textContent)}
                className={`flex flex-col  items-center justify-center p-2 cursor-pointer ${
                  profile === "profile" ? "text-[#F43397]" : "text-black"
                }`}
              >
                <div className="">
                  {isAuth ? (
                    <FcBusinessman size={20} />
                  ) : (
                    <VscAccount size={20} />
                  )}
                </div>
                <div>Profile</div>
              </div>
              <Link to="/Add to cart">
                <div className="flex flex-col items-center justify-center p-2 hover:text-[#F43397]">
                  <div
                    className={` ${
                      totalItem > 0 ? "block" : "hidden"
                    } px-2 text-lg font-semibold bg-[#F43397] rounded-full  text-slate-50`}
                  >
                    {totalItem}
                  </div>
                  <div>
                    <FiShoppingCart size={20} />
                  </div>
                  <div>Cart</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* Navbar */}
        <div className="hidden lg:block ">
          <ul
            className={
              "flex flex-row justify-between px-8 border max-[1099px]:px-4"
            }
          >
            {catList.map.length > 0 &&
              catList.map((ele, ind) => (
                <li
                  key={ind}
                  onMouseEnter={(e) => navHoverHandler(e.target.textContent)}
                  className={` py-[8px]  ${
                    navCatSelect === ele && "navlist_category_after_hover"
                  } `}
                >
                  {ele}
                </li>
              ))}
          </ul>

          {/* After hover part of category */}
          <div
            onMouseLeave={(e) => setNavCatSelect("")}
            className={` flex  w-[95%] ml-[40px] z-[99999] absolute shadow-2xl rounded-br-[20px] bg-[white] rounded-bl-[20px] ${
              navListData[navCatSelect] ? "block" : "hidden"
            }`}
          >
            {/*  All Womens Ethnenic */}

            {/* first map for all categories under the navbar category one by one */}
            {navCatData.length > 0 &&
              navCatData.map(({ category, sub_category }, index) => (
                <ul
                  key={index}
                  className={` ${
                    index % 2 === 0 ? "bg-white" : "bg-[#e5e9f0]"
                  } px-[6px] py-2 rounded-bl-[30px]`}
                >
                  <li className="text-[#F43397] font-[600]   mb-3 ">
                    {category}
                  </li>
                  <ul>
                    {/* second map for all sub categories under the after hover categoery */}
                    {sub_category.map((ele, subInd) => (
                      <li
                        className=" hover:bg-slate-400 cursor-pointer text-[15px] px-6 py-[4px] duration-200  rounded-bl-[90px]"
                        onClick={() => subCategoryClickHandler(ele)}
                        key={subInd}
                      >
                        {ele}
                      </li>
                    ))}
                  </ul>
                </ul>
              ))}
          </div>
        </div>

        <div
          onMouseLeave={() => setProfile("")}
          onMouseEnter={(e) => profileHandler(e.target.textContent)}
          className={`${profile === "profile" ? "block" : "hidden"} `}
        >
          <div className="  border absolute top-[50px] bg-white right-5 rounded-md shadow-2xl gap-y-4 py-4 w-[250px] flex flex-col px-4 group">
            <div>
              <p className="text-xl font-semibold">
                {isAuth ? profileName : "Hello, User Or Admin"}
              </p>
              <p className="text-[12px] font-semibold text-slate-400">
                To access your Meeshoo account
              </p>
            </div>
            {isAuth ? (
              ""
            ) : (
              <>
                {" "}
                <Link to="login">
                  {" "}
                  <div className="bg-[#F43397] cursor-pointer rounded-[4px] text-slate-50 text-center py-3 font-semibold text-xl">
                    User
                  </div>{" "}
                </Link>
                <div className="bg-[#F43397] cursor-pointer rounded-[4px] text-slate-50 text-center py-3 font-semibold text-xl">
                  Admin
                </div>
              </>
            )}

            <div className="border-[0.5px]"></div>

            <div className="flex items-center gap-x-4">
              <div>
                <HiOutlineShoppingBag size={20} />
              </div>
              <p className="text-lg font-semibold">My Orders</p>
            </div>
          </div>
        </div>
      </div>

      {searchResults.length > 0 && (
        <div>
          {searchResults.map((result, index) => (
            // <div key={result.id}>
            //   <h2>{result.name}</h2>
            //   <p>{result.price}</p>
            // </div>
            <SearchComponent
              productKey={"All Sarees"}
              key={index}
              {...result}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
