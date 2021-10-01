import React from "react";
import "./Navbar.css";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import logo from "../../images/logo/logo.png";
export default function Navbar() {
  return (
    <div className="sideHelper">
      <div className="sideHelperLayout">
          <NavLink to='/'>
        <img src={logo} id="musicImageAnime"  className="logo" alt="thht" />
        </NavLink>
        <NavLink to='/favourites'>
        <div className="fav" title="favourites">
          <FavoriteIcon  style={{ fontSize: "2rem" }} />
        </div>
        </NavLink>
        <NavLink to="/musicList" >
        <div className="library" title="My Library">
          <LibraryMusicIcon  style={{ fontSize: "2rem" }} />
        </div>
        </NavLink>
        <NavLink to="/favourites2" >
        <div className="queue" title="My Queue">
          <FavoriteIcon style={{ fontSize: "2rem" }} />
        </div>
        </NavLink>
        <div className="account" title="My Account">
          <AccountCircleIcon  style={{ fontSize: "2rem" }} />
        </div>
      </div>
    </div>
  );
}
