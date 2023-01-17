import React from 'react';
import { Route, Routes } from 'react-router-dom';
import All_Sarees from '../Pages/All_Sarees';
import All_Top_Wear from '../Pages/All_Top_Wear';
import Bed_Sheets from '../Pages/Bed_Sheets';
import Home from '../Pages/Home';

const AllRoutes = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/All Sarees' element={<All_Sarees/>}/>
    <Route path='/All Top Wear' element={<All_Top_Wear/>}/>
    <Route path='/Bed Sheets' element={<Bed_Sheets/>}/>
    </Routes>
  )
}

export default AllRoutes