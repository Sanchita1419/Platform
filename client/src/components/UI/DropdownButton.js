import React from "react";
import { Dropdown } from "react-bootstrap";
import classes from "./DropdownButton.module.css";
const DropdownButton = (props) => {
  console.log(props.name);
  console.log(props.actions);

  return (
    <Dropdown className={classes.dd}>
      <Dropdown.Toggle
        style={{ width: `${props.width}` }}
        className={classes.ddToggle}
        variant=""
        id="dropdown"
        menuVariant="dark"
      >
        {props.name}
      </Dropdown.Toggle>
      {/* <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
      </Dropdown.Menu> */}
      <Dropdown.Menu className={classes.ddMenu}>
        {props.actions.map((action) => (
          <Dropdown.Item className={classes.ddItem} href="#">
            {action}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownButton;
