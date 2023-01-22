import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {AiFillStar} from "react-icons/ai"
const ListOfRating = [
  {
    ratingName: 1},


    {ratingName: 2},

    {ratingName: 3},

    {ratingName: 4},
  
]

const Filter = ({filtByRating,sortingHandler}) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const initState = searchParams.getAll('category')
  const [category, setCategory] = useState( [])
  const [ratArr, setRatArr] = useState( [])
  const [initSort,setinitSort]= useState("")
  const[sort, setSort] = useState(initSort || "")

  const handleChecked = (e) => {
    const item = e.target.value
    let newCategory = [...category]
    if (newCategory.includes(item)) {
      // newCategory.splice(newCategory.indexOf(item), 1)
      newCategory = newCategory.filter((ele) => ele !== item)
    } else {
      newCategory.push(item)
    }
    setCategory(newCategory)
  }


  useEffect(() => {
    const params = {
      category,
    }
    sort &&(params._sort="rating")
    sort &&  (params._order=sort) 
    
    //   _order:sort
    setSearchParams(params)
  }, [category,sort])

  const ratingHandler =(e)=>{

    if(e.target.checked){
      // console.log("retring",e.target.value)
          filtByRating(e.target.value)
          setRatArr([...ratArr,e.target.value])

    }
    else{
      console.log("retring",e.target.checked)
          filtByRating(false)
      let arr = ratArr.indexOf(e.target.value)
      arr

    }
  }


  const sorting=(item)=>{
    setinitSort(item)
    sortingHandler(item)
  }


  // console.log(ratArr)
  return (
    <div className='px-10 py-5'>
      <h2 className="my-4 text-xl font-semibold text-center " >Filter</h2>
       <h2 className="px-2 text-xl font-semibold border-2">Filter Rating</h2>
 
      {ListOfRating.map((ele, ind) => {
        return (
          <div
            className="flex items-center justify-between px-4 border "
            key={ind}
          >
            <input
              type="checkbox"
              className="w-5 h-10 border-2 "
              value={ele.ratingName}
              onChange={(e)=>ratingHandler(e)}
              // checked={category.includes(ele.ratingName)}

            />
            <div className=" gap-x-1 px-2 rounded-2xl text-slate-50 text-lg font-semibold flex bg-green-400 items-center">
                  <p>{ele.ratingName}+</p>
                  <div>
                    <AiFillStar color="white" size={15} />
                  </div>
                </div>
          </div>
        )
      })} 

      
      <div className='my-4 inlo w-[200px]'>
      <h2 className="px-2 text-xl font-semibold border-2">Sort By Price</h2>


      <div  className="flex items-center justify-between px-4 border ">
      <input type="radio" className="w-5 h-10 border-2 " name="sort" value="asc" onChange={(e)=>sorting(e.target.value)} checked={initSort=="asc"}/>
      <label >Low To High</label>
      </div>
      <div  className="flex items-center justify-between px-4 border ">
      <input type="radio" className="w-5 h-10 border-2 " name="sort" value="desc" onChange={(e)=>sorting(e.target.value)} checked={initSort=="desc"}/>
      <label >High To Low</label>
      </div>
      </div>
    </div>
  )
}

export default Filter
