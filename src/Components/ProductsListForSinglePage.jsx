import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

import ProductCard from '../Components/ProductCard'
import Loading from '../Components/Loader/Loading'
import Pagination from '../Components/Pagination/Pagination'

const ProductsListForSinglePage = (prop) => {
  const { path, p } = prop
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  // let initState = searchParams.get('page')
  const [page, setPage] = useState(1)
  const loc = useLocation()
  // console.log(loc);
  const getProducts = async (arg = 1) => {
   const path="allsarees"
    // let newaPath =pathname.split("").filter((el)=> el!=="/" && el!== "%" && el!=="2" && el!=="0").join("").toLocaleLowerCase()
    let newPath = path.replaceAll(' ', '').toLowerCase()
    setLoading(true)
    axios
      .get(
        `https://meshoo-mock-server-app.onrender.com/allsarees?_page=${page}&_limit=16`,
      )
      .then((res) => {
        setLoading(false)
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })

    }

    console.log(data)

  useEffect(() => {
    getProducts(page)
    const params = {
      page,
      limit: 16,
    }
    //  setSearchParams(params)
    window.scrollTo(0, 0)
  }, [page, path])

  if (loading) {
    return <Loading />
  }
 
  // console.log("filt",data)


  return (
    <div className="px-8 py-10">
      <div className="">
        <div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-10 ">
          {data.length > 0 &&
            data.map((ele) => {
              return <ProductCard key={ele.id} {...ele} />
            })}
        </div>
      </div>
    </div>
  )
}

export default ProductsListForSinglePage
