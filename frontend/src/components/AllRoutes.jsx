import React from 'react'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Post from '../pages/Post'
import Update from '../pages/Update'

import { Routes,Route } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/allpost" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/post" element={<Post/>}></Route>
        <Route path="/update" element={<Update/>}></Route>
       
    </Routes>
  )
}

export default AllRoutes