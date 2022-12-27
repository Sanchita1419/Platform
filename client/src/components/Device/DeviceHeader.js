import React from "react";
import DropdownButton from "../UI/DropdownButton";
import HelpIcon from "@mui/icons-material/Help";
import classes from "./DeviceHeader.module.css";
const DeviceHeader = () => {
  return (
    <div className={classes.deviceHeader}>
      <h2>Device Management</h2>
      <div className={classes.buttonContainer}>
        <DropdownButton name="Plant" />
        <DropdownButton name="Line" />
        <label className={classes.switch}>
          <input type="checkbox" />
          <span className={`${classes.slider} ${classes.round}`}></span>
        </label>
        <HelpIcon style={{ color: "#2196F3", margin:"0 15px", fontSize: "2.2rem" }} />
      </div>
    </div>
  );
};

export default DeviceHeader;
