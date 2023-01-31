import React, { useState } from "react";
import DropdownButtons from "../UI/DropdownButtons";
import HelpIcon from "@mui/icons-material/Help";
import classes from "./DeviceHeader.module.css";
const plantData = {
  name: "Plant",
  actions: ["Plant 1", "Plant 2", "Plant 3"],
};
const lineData = {
  name: "Line",
  actions: ["Line 1", "Line 2", "Line 3"],
};
const DeviceHeader = (props) => {
  // const [value, setValue] = useState("");
  const [filters, setFilters] = useState({});
  const handleFilter = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  const sendValue = (value, name) => {
    handleFilter(name, value);
    console.log(value);
    console.log(name);
  };

  return (
    <div className={classes.deviceHeader}>
      <div className={classes.addButton}>
        {props.addIsActive && <button className={classes.add}>+Add</button>}
        {/* <Button
            style={{ width: "100px" }}
            name="+ Add"
            bgcolor="#047baa"
            bordercolor="#047baa"
          /> */}
      </div>
      <h2>Device Management</h2>
      <div className={classes.buttonContainer}>
        <DropdownButtons data={plantData} sendValue={sendValue} />
        <DropdownButtons data={lineData} sendValue={sendValue} />
        {props.toggleIsActive && (
          <label className={classes.switch}>
            <input type="checkbox" />
            <span
              className={`${classes.slider} ${classes.round}`}
              onClick={props.onToggle}
            ></span>
          </label>
        )}
        <HelpIcon
          style={{ color: "#114A62", margin: "0 15px", fontSize: "2.2rem" }}
        />
      </div>
    </div>
  );
};

export default DeviceHeader;
