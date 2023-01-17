import React, { useState } from 'react'
import { TfiMobile } from 'react-icons/tfi'
import { CiSearch } from 'react-icons/ci'
import { VscAccount } from 'react-icons/vsc'
import { FiShoppingCart } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'

const navListData = [
  {
    category: 'All Women Ethnic',
    sub_category: ['View All'],
  },
  {
    category: 'Sarees',
    sub_category: [
      'All Sarees',
      'Silk Sarees',
      'Cotton Silk Sarees',
      'Cotton Sarees',
      'Georgette Sarees',
      'Chiffon Sarees',
      'Satin Sarees',
      'Embroidered Sarees',
    ],
  },
  {
    category: 'Kurtis',
    sub_category: [
      'All Kurtis',
      'Anarkali',
      'Kurties',
      'Rayon',
      'Kurties',
      'Cotton',
      'Kurties',
      'Embroidered',
      'Kurtis',
    ],
  },
  {
    category: 'Kurta Sets',
    sub_category: ['All Kurtis Sets'],
  },
  {
    category: 'Suits & Dress Material',
    sub_category: [
      'All Suits & Dress Material',
      'Cotton',
      'Embroidered Suits',
      'Chanderi Suits',
    ],
  },
  {
    category: 'Other Ethnic',
    sub_category: [
      'Blouses',
      'Dupattas',
      'Lehanga',
      'Gown',
      'Ethnic Bottomwear',
    ],
  },
]

const Navbar = () => {
  const [searchText, setSearchText] = useState('')
  const [navCatSelect, setNavCatSelect] = useState('');

  const navigate = useNavigate();


  const searchTextClearHandler = () => {
    setSearchText('')
  }
  return (
    <div>
      <div className="border-b-[1.2px]  border-gray-400 flex px-8 items-center justify-between">
        {/* nav-top left side div */}
        <div className="flex justify-center items-center">
          <div className="w-[170px]">
            {/* logo */}
            <Link to="/"><img className="w-[100%]" src={logo} alt="logo" /></Link>
          </div>
          {/*  input box div */}
          <div className="border-cyan-400  rounded-lg  gap-x-1 px-2 py-2  flex justify-center items-center border shadow-md">
            <div className="flex items-center font-bold text-slate-400">
              <CiSearch size={25} />
            </div>
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              placeholder="Try Saree, Kurti or Search by Product Code"
              className=" rounded-sm flex text-[15px] font-[600] w-[300px] outline-none "
            />
            <div
              onClick={searchTextClearHandler}
              className={` ${
                searchText.length > 0 ? 'text-gray-500' : 'text-white'
              }  cursor-pointer `}
            >
              <RxCross2 size={20} />
            </div>
          </div>
        </div>
        {/* nav-top right side div */}
        
        <div className="flex  gap-4 justify-between  items-center">
          <div className="flex flex-row justify-between  items-center">
            <div>
              <TfiMobile size={20} />
            </div>
            <div>Download App</div>
          </div>
          <div className="h-[45px] border border-gray-400"></div>
          <div className="">Become a Supplier</div>
          <div className="h-[45px] border border-gray-400"></div>
          <div className="flex flex-col  p-2 justify-center items-center">
            <div>
              <VscAccount size={20} />
            </div>
            <div>Profile</div>
          </div>
          <div className="flex flex-col  p-2 justify-center items-center">
            <div>
              <FiShoppingCart size={20} />
            </div>
            <div>Cart</div>
          </div>
        </div>
      </div>
      {/* Navbar */}
      <div>
        <ul className="flex border justify-between   px-8">
          <li
            className="navlist_category  "
            onMouseEnter={(e) => setNavCatSelect(e.target.textContent)}
            onMouseLeave={(e) => setNavCatSelect(e.target.textContent)}
          >
          Women Ethnic
            {/* Navbar category */}
          </li>
          <li className="navlist_category">Women Western</li>
          <li className="navlist_category">Men</li>
          <li className="navlist_category">Kids</li>
          <li className="navlist_category">Home & Kitchen</li>
          <li className="navlist_category">Beauty & Health</li>
          <li className="navlist_category">Jewellery & Accessories</li>
          <li className="navlist_category">Bags & Footwear</li>
          <li className="navlist_category">Electronics</li>
        </ul>

        {/* After hover part of category */}
        <div
        onMouseLeave={(e) => setNavCatSelect("")}
          className={` flex  w-[95%] ml-[40px] z-[9999] shadow-2xl rounded-br-[20px] rounded-bl-[20px] ${
            navCatSelect === 'Women Ethnic' ?  'block' :'hidden'
          }`}
        >
          {/*  All Womens Ethnenic */}

          {/* first map for all categories under the navbar category one by one */}
          {navListData.map(({category,sub_category},index) => (
            <ul key={index} className={` ${index%2===0 ? "bg-[#ffffff]" : "bg-[#e5e9f0]" } px-[6px] py-2 rounded-bl-[90px]`}>
              <li className="text-[#F43397] font-[600]   mb-3 ">
               {category}
              </li>
              <ul >
              {/* second map for all sub categories under the after hover categoery */}
                {
                  sub_category.map((ele,subInd)=>(
                    <li  className=' hover:bg-slate-400 cursor-pointer text-[15px] px-6 py-[4px] duration-200  rounded-bl-[90px]' onClick={()=>navigate(`/${ele}`)}  key={subInd}>{ele}</li>
                  ))
                }
              </ul>
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
