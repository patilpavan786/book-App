import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={style.Main}>
      <h1>Book</h1>
      <div className={style.links}>
        <NavLink className={style.link} to={"/"}>Home</NavLink>
        <NavLink className={style.link} to={"/About"}>About</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
