import React from "react";
import "./Navbar.css";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import logo from "../../images/logo/logo.png";
export default function Navbar() {
  return (
    <div className="sideHelper">
      <div className="sideHelperLayout">
          <Link to='/'>
        <img src={logo} className="logo" alt="thht" />
        </Link>
        <Link to='/favourites'>
        <div title="favourites">
          <FavoriteIcon className="heart" style={{ fontSize: "2rem" }} />
        </div>
        </Link>
        <div title="My Library">
          <LibraryMusicIcon className="heart" style={{ fontSize: "2rem" }} />
        </div>
        <div title="My Queue">
          <QueueMusicIcon className="heart" style={{ fontSize: "2rem" }} />
        </div>
        <div title="My Account">
          <AccountCircleIcon className="heart" style={{ fontSize: "2rem" }} />
        </div>
      </div>
    </div>
  );
}
