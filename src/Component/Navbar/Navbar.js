import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import {FaOpencart} from "react-icons/fa"
import { useGlobalContext } from "../../context";
function Navbar() {
  const {cartItems } = useGlobalContext();
  return (
    <div className={style.Main}>
      <h1>Book</h1>
      <div className={style.links}>
        <NavLink className={style.link} to={"/"}>Home</NavLink>
        <NavLink className={style.link} to={"/Cart"}>Cart</NavLink>
   <span  className={style.cart}>  <h3> <FaOpencart style={{width:"2rem", height:"2rem"}}/>{cartItems.length}</h3></span>  
      </div>
    </div>
  );
}

export default Navbar;
