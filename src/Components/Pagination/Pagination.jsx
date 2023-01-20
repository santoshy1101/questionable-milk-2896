import React, { useState } from 'react'
import "./pagination.css"

const Pagination = ({ pageNumber, setPageNumber }) => {
  
    const nextPage = () => {
        setPageNumber(pageNumber + 1);
      };
    
      const prevPage = () => {
        setPageNumber(pageNumber - 1);
      };

  return (
    <div className=" flex justify-center text-slate-50 font-semibold my-16 items-center text-2xl gap-x-8">

    <button className={`${pageNumber ===1 ?  "bg-slate-300" : " hover:bg-pink-400"}  bg-slate-400 px-4 py-2 rounded-xl`}   onClick={prevPage} disabled = {pageNumber===1}>PRE</button>
    <button className=' bg-slate-400 px-4 py-2 rounded-xl ' >{pageNumber}</button>
    <button  className={`${pageNumber ===4 ?  "bg-slate-300" : " hover:bg-pink-400"}  bg-slate-400 px-4 py-2 rounded-xl`} onClick={nextPage } disabled = {pageNumber===4}>NEXT</button>
    </div>
    
  )
}

export default Pagination

