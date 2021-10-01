import React from "react";
import "./Navbar.css";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
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
        <div title="favourites">
          <FavoriteIcon className="heart" style={{ fontSize: "2rem" }} />
        </div>
        </NavLink>
        <NavLink to="/musicList" >
        <div title="My Library">
          <LibraryMusicIcon className="heart" id="lib" style={{ fontSize: "2rem" }} />
        </div>
        </NavLink>
        <NavLink to="/musicList" >
        <div title="My Queue">
          <QueueMusicIcon className="heart" id="lib" style={{ fontSize: "2rem" }} />
        </div>
        </NavLink>
        <div title="My Account">
          <AccountCircleIcon className="heart" style={{ fontSize: "2rem" }} />
        </div>
      </div>
    </div>
  );
}
