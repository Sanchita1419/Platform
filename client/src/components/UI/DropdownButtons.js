import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import classes from "./DropdownButtons.module.css";
const DropdownButtons = (props) => {
  const [title, setTitle] = useState(props.name);
  const [value, setValue] = useState("");
  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
    setTitle(e);
  };
  return (
    // <Dropdown className={classes.dd}>
    //   <Dropdown.Toggle
    //     style={{ width: `${props.width}` }}
    //     className={classes.ddToggle}
    //     variant=""
    //     id="dropdown"
    //     menuVariant="dark"
    //   >
    //     {props.name}
    //   </Dropdown.Toggle>
    //   <Dropdown.Menu className={classes.ddMenu}>
    //     {props.actions.map((action) => (
    //       <Dropdown.Item
    //         className={classes.ddItem}
    //         value="plant"
    //         href="#"
    //         onSelect={handleSelect}
    //       >
    //         {action}
    //       </Dropdown.Item>
    //     ))}
    //   </Dropdown.Menu>
    // </Dropdown>

    <DropdownButton
      style={{ width: `${props.width}` }}
      className={classes.ddButton}
      title={title}
      onSelect={handleSelect}
    >
      {props.actions.map((action) => (
        <Dropdown.Item className={classes.ddItem} eventKey={action}>
          {action}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default DropdownButtons;
