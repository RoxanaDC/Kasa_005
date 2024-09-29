import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="header">
    <img className="header__logo" src="../logo.svg" alt="Logo_Kasa" />
    <nav className="header__navbar">
      {["/", "/about"].map((path, index) => (
        <NavLink
          key={index}
          className={({ isActive }) =>
            `header__navbar__link${isActive ? " active" : ""}`
          }
          to={path}
        >
          {path === "/" ? "Accueil" : "A propos"}
        </NavLink>
      ))}
    </nav>
  </header>
);

export default Header;
