import React from "react";
import classes from "./FpiStart.module.css";
import Button from "../UI/Button"
import { PropaneSharp } from "@mui/icons-material";

const FpiStart = (props) => {
  return (
    <div className={classes.start}>
      <form className={classes.form} >
        <div className={classes.card}>
          <input
            type="text"
            className={classes.input}
            id="InspectorName"
            name="InspectorName"
            required
          />
          <label for="InspectorName">Inspector Name</label>
        </div>
        <div className={classes.card}>
          <input
            type="number"
            class="form-control"
            id="PartNumber"
            name="PartNumber"
            required
          />
          <label for="PartNumber">Part Number</label>
        </div>
        {/* <select
          class="form-select"
          aria-label="Default select example"
          name="InputSource"
        >
          <option selected value="1">
            1 Camera
          </option>
          <option value="4">4 Cameras</option>
        </select> */}
        <Button onClick={props.onClick} name="Start"/>
      </form>
    </div>
  );
};

export default FpiStart;
