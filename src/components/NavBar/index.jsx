import React from "react";
import { MdFavorite, MdHome, MdPerson } from "react-icons/md";
import Logo from "../Logo/index.jsx";
import { ButtonLink, Nav as NavBarContainer } from "./styles.js";
import { useLocation } from "react-router-dom";

export default function NavBar() {
  let location = useLocation();
  return (
    <NavBarContainer>
      <ul className="links">
        <ButtonLink
          to="/profile"
          replace
          active={String(location.pathname === "/profile")}
          className="Button1"
        >
          <MdPerson />
        </ButtonLink>
        <ButtonLink
          to="/"
          active={String(location.pathname === "/")}
          className="Button2"
        >
          <MdHome />
        </ButtonLink>
        <div><Logo></Logo></div>
        <ButtonLink
          to="/favorites"
          active={String(location.pathname === "/favorites")}
          className="Button3"
        >
          <MdFavorite />
        </ButtonLink>
      </ul>
    </NavBarContainer>
  );
}
