import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import PajeNew from "../PajeNew/PajeNew";
import Categotie from "../LesCatégories/Categotie";
import PajeCommender from "../CommenderPrudact/PajeCommender";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import ShopCrad from "../Context/ShopCrad";
import NavBar from "../NavBar/NavBar";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <ShopCrad>
          <NavBar />

          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/proudact/:id" Component={PajeCommender} />
            <Route path="/newproidacts" Component={PajeNew} />
            <Route path="/categorie/:id" Component={Categotie} />
            <Route path="/login" Component={Login} />
            <Route path="/mycart" Component={ShoppingCart} />
          </Routes>

          <Footer />
        </ShopCrad>
      </BrowserRouter>
    </>
  );
}
