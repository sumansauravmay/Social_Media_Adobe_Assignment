import React from 'react'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Post from '../pages/Post'
import Update from '../pages/Update'
import Deletepost from '../pages/Deletepost'
import Userdelete from '../pages/Userdelete'
// import UserUpdate from '../pages/UserUpdate';
import { Routes,Route } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/delete_user" element={<Userdelete/>}></Route>
        {/* <Route path="/update_user" element={<UserUpdate/>}></Route> */}

        <Route path="/post" element={<Post/>}></Route>
        <Route path="/update" element={<Update/>}></Route>
        <Route path="/delete" element={<Deletepost/>}></Route>
       
    </Routes>
  )
}

export default AllRoutes