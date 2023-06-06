import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import { FaOpencart } from "react-icons/fa";
import { GiBurningBook } from "react-icons/gi";
import { useGlobalContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

function Navbar() {
  const { cartItems } = useGlobalContext();
  const navigate = useNavigate();

  function Handlenav() {
    navigate("/");
    scroll.scrollToTop();
  }

  return (
    <div className={style.Main}>
      <h1 onClick={() => Handlenav()}>Book <GiBurningBook style={{ width: "2.5rem", height: "2.5rem" }} /></h1>
      <div className={style.links}>
        <NavLink className={style.link} to={"/"}>Home</NavLink>
        <NavLink className={style.link} to={"/Cart"}>Cart</NavLink>
        <span className={style.cart}>
          <h3> <FaOpencart style={{ width: "2rem", height: "2rem" }} />{cartItems.length}</h3>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
