import React from "react";
import { createRoot } from 'react-dom/client'
import Footer from "./Footer";
import { AdminDashBoard } from "./AdminDashboard";
import { AddNewProduct } from "./AddProduct";
import Header from "./Header";
import { Home } from "./Home";
import { Outlet } from "react-router-dom";
import { FullRouter } from "./Router";

export const Main  = ()=>{
    return(
        <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}

const Root = createRoot(document.getElementById("root"))
Root.render(<FullRouter></FullRouter>)