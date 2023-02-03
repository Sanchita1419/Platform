import React, { useState } from "react";
import ModalSm from "../UI/ModalSm";
import classes from "./Assign.module.css";
const Assign = (props, sendItem) => {
  const [item, setItem] = useState("");
  const itemChangeHandler = (event) => {
    setItem(event.target.value);
    sendItem(event.target.value);
  };
  console.log(item);
  return (
    <ModalSm onClose={props.onClose}>
      <div className={classes.assign}>
        <h4>Select Aplication</h4>
        <div
          className={classes.assignItems}
          onChange={itemChangeHandler.bind()}
        >
          <div className={classes.assignItem}>
            <input type="radio" value="FPI" name="applications" />
            <label>FPI</label>
          </div>
          <div className={classes.assignItem}>
            <input type="radio" value="LLE" name="applications" disabled />
            <label>LLE</label>
          </div>
          <div className={classes.assignItem}>
            <input type="radio" value="Other" name="applications" disabled />
            <label>Other</label>
          </div>
        </div>
      </div>
    </ModalSm>
  );
};

export default Assign;
