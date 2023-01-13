import React from "react";
import DropdownButton from "../UI/DropdownButton";
import HelpIcon from "@mui/icons-material/Help";
import classes from "./SubscriptionHeader.module.css";
import Button from "../UI/Button";

const SubscriptionHeader = (props) => {
  return (
    <div className={classes.subscriptionHeader}>
      <div className={classes.addButton}>
        {props.addIsActive && (
          <Button name="+ Add" bgcolor="#047baa" bordercolor="#047baa" />
        )}
      </div>
      <h2>Active Subscriptions</h2>
      <div className={classes.buttonContainer}>
        <DropdownButton
          name="Plant"
          actions={["Plant 1", "Plant 2", "Plant 3"]}
        />
        <DropdownButton name="Line" actions={["Line 1", "Line 2", "Line 3"]} />
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
