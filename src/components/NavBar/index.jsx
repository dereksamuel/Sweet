import React from "react";
import { MdFavorite, MdHome, MdPerson } from "react-icons/md";
import Logo from "../Logo/index.jsx";
import { Link, Nav } from "./styles.js";

export default function NavBar() {
  return (
    <Nav>
      <div className="links">
        <Link
          to={"/profile"}
          className="Button1"
          active={location.pathname === "/profile"}
        >
          <MdPerson />
        </Link>
        <Link
          to="/"
          className="Button2"
          active={location.pathname === "/"}
        >
          <MdHome />
        </Link>
        <div><Logo></Logo></div>
        <Link
          to="/favorites"
          className="Button3"
          active={location.pathname === "/favorites"}
        >
          <MdFavorite />
        </Link>
      </div>
    </Nav>
  );
  //FIXME: ARRÉGLA EL ENRUTADO FIX THIS
}
