import React, { useState } from "react";
import DropdownButtons from "../UI/DropdownButtons";
import HelpIcon from "@mui/icons-material/Help";
import classes from "./SubscriptionHeader.module.css";
import Button from "../UI/Button";
const plantData = {
  name: "Plant",
  actions: ["Plant 1", "Plant 2", "Plant 3"],
};
const lineData = {
  name: "Line",
  actions: ["Line 1", "Line 2", "Line 3"],
};
const SubscriptionHeader = (props) => {
  // const [value, setValue] = useState("");
  // const [name, setName] = useState("");

  const [filters, setFilters] = useState({});
  const handleFilter = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  const sendValue = (value, name) => {
    handleFilter(name, value);
    console.log(value);
    console.log(name);
  };
  console.log(filters);

  return (
    <div className={classes.subscriptionHeader}>
      <div className={classes.addButton}>
        {props.addIsActive && (
          <Button name="+ Add" bgcolor="#047baa" bordercolor="#047baa" />
        )}
      </div>
      <h2>Active Subscriptions</h2>
      <div className={classes.buttonContainer}>
        {/* <DropdownButtons
          name="Plant"
          actions={["Plant 1", "Plant 2", "Plant 3"]}
          sendValue={sendValue}
        /> */}
        <DropdownButtons
          data={plantData}
          sendValue={sendValue}
          // name={plantData.name}
          // onSelect={handleFilter}
        />
        <DropdownButtons
          data={lineData}
          sendValue={sendValue}
          // onSelect={handleFilter(lineData)}
        />
        <label className={classes.switch}>
          <input type="checkbox" />
          <span className={`${classes.slider} ${classes.round}`}></span>
        </label>
        <HelpIcon
          style={{ color: "#114A62", margin: "0 15px", fontSize: "2.2rem" }}
        />
      </div>
    </div>
  );
};

export default SubscriptionHeader;
