import React from 'react';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Post from '../pages/Post';
import Update from '../pages/Update';
import { Routes,Route } from 'react-router-dom';
import UserUpdate from '../pages/UserUpdate';


const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/allpost" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/post" element={<Post/>}></Route>
        <Route path="/update" element={<Update/>}></Route>
        <Route path="/update_name" element={<UserUpdate/>}></Route>
    </Routes>
  )
}

export default AllRoutes