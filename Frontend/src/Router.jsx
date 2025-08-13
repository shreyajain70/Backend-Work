import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./Footer";
import { AdminDashBoard } from "./AdminDashboard";
import { AddNewProduct } from "./AddProduct";
import Header from "./Header";
import { Home } from "./Home";
import { Main } from "./main";
export function FullRouter(){
    return(
        <>
        <BrowserRouter basename="/">
        <Routes>
           <Route path="/" element={<Main></Main>}>
           <Route path="/Home" element={<Home></Home>}></Route>
           <Route path="/AdminDashBoard" element={<AdminDashBoard></AdminDashBoard>}></Route>
           <Route path="/PostedProduct" element={<AddNewProduct></AddNewProduct>}></Route>
           </Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}