import React from "react";
import {Dropdown} from "react-bootstrap";
import classes from "./DropdownButton.module.css"
const DropdownButton = (props) => {
  return (
    <Dropdown className={classes.dd}>
      <Dropdown.Toggle className={classes.ddToggle} variant="" id="dropdown-basic" menuVariant="dark">
        {props.name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownButton;
