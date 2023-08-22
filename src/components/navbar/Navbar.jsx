import React from "react";
import "./navbar.scss";
import ThemeMode from "../thememode/ThemeMode";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <h1>Know your country 🌎</h1>

      <div className="search"></div>
      <span className="navitem" onClick={props.button}>
        <ThemeMode />
      </span>
    </div>
  );
};

export default Navbar;
