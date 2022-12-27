import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logoImage from "../../images/LOGO.png";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import StorageIcon from "@mui/icons-material/Storage";

const Header = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.left}>
        <NavLink to="/" className={classes.navLink}>
          <img src={logoImage} alt="logo" />
        </NavLink>
      </div>
      <div className={classes.navMenu}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#fc6500" : "#f67f2f",
            textDecoration: isActive ? "underline" : "none",
          })}
          className={classes.navLink}
        >
          <BarChartIcon />
          Dashboard
        </NavLink>
        <NavLink
          to="/visualization"
          style={({ isActive }) => ({
            color: isActive ? "#fc6500" : "#f67f2f",
            textDecoration: isActive ? "underline" : "none",
          })}
          className={classes.navLink}
        >
          <PieChartIcon />
          Visualization
        </NavLink>
        <NavLink
          to="/fleet"
          style={({ isActive }) => ({
            color: isActive ? "#fc6500" : "#f67f2f",
            textDecoration: isActive ? "underline" : "none",
          })}
          className={classes.navLink}
        >
          <StorageIcon />
          Fleet Management
        </NavLink>
      </div>
      <div className={classes.right}>
        <div>
          <SearchIcon style={{ color: "#f67f2f", marginRight: "0.5rem" }} />
          <ChatBubbleOutlineIcon
            style={{ color: "#f67f2f", marginRight: "0.5rem" }}
          />
          <NotificationsIcon
            style={{ color: "#f67f2f", marginRight: "0.5rem" }}
          />
        </div>
        <div className={classes.profile}>
          <div className={classes.details}>
            <span>Name</span>
            <span>Details</span>
          </div>

          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"
            className={classes.img}
            alt="userImage"
          />
          <span>
            <KeyboardArrowDownIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
