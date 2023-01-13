import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import classes from "./FilterButton.module.css";
const handleFilters = () => {};
const FilterButton = (props) => {
  return (
    <div>
      <select
        onfocus="this.size=10;"
        onblur="this.size=0;"
        onchange="this.size=1; this.blur();"
        className={classes.filterSelect}
        // name={props.name}
        onChange={handleFilters}
      >
        {/* <option className={classes.filterOption} disabled>
          {props.name}
        </option> */}
        {props.actions.map((action) => (
          <option className={classes.filterOption}>{action}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterButton;
