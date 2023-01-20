import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import {  useLocation} from 'react-router-dom'
import SidebarSaree from '../Components/Saree/SidebarSaree'
import ProductCard from '../Components/ProductCard'
import Loading from '../Components/Loader/Loading'

const Dresses = () => {
  const {pathname} = useLocation();
  const [data,setData] = useState([])
  const [loading ,setLoading]= useState(false)

  useEffect(()=>{
    let newaPath =pathname.split("").filter((el)=> el!=="/" && el!== "%" && el!=="2" && el!=="0").join("").toLocaleLowerCase()

    setLoading(true)
    axios.get(`https://meshoo-mock-server-app.onrender.com/${newaPath}?_page=1&_limit=10`).then((res)=>{
      setLoading(false)
      setData(res.data)
    }).catch((err)=>{
      console.log(err)
      setLoading(false)
    })
  },[])
  if(loading){
    return <Loading/>
  }
  return (
    <div className="flex flex-row gap-x-20 px-8 justify-around py-10 ">
      <div className="border-2 hidden sm:block"  ><SidebarSaree/></div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-10 ">
      {
        data.length > 0 && data.map((ele)=>{
          return <ProductCard key={ele.id} {...ele} />
        })
      }
      </div>
    </div>
  )
}

export default Dresses