import React from "react";
import Button from "../UI/Button";
import DropdownButton from "../UI/DropdownButton";
import Input from "../UI/Input";
import classes from "./DeviceDetails.module.css";
const DeviceDetails = () => {
  return (
    <div className={classes.deviceDetails}>
    {/* <div className={classes.addButton}>
    <Button  name="+ Add" bgColor="#2196f3"/>
    </div> */}
    <div className={classes.column}>

    
      <div className={classes.row}>
        <DropdownButton name="Device Type" />
        <Input name="Custom Label" />
        <p>Default_device_ID</p>
        <p>Status</p>
      </div>
      <div className={classes.row}>
        <DropdownButton name="Accessory" />
        <div></div>
        <button className={classes.installButton}>Install</button>
        <p>Status</p>
      </div>
      <div className={classes.row}>
        <DropdownButton name="Application" />
        <div></div>
        <button className={classes.installButton}>Install</button>
        <p>Status</p>
      </div>

      {/* <div className={classes.leftContainer}>
        <div className={classes.column} >
          <DropdownButton name="Device Type" />
          <Input name="Custom Label" />
        </div>

        <DropdownButton name="Accessory" />
        <DropdownButton name="Application" />
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.column}>
            <p>Default_device_ID</p>
            <p>Status</p>
        </div>
        <div className={classes.column}>
            <button className={classes.installButton}>Install</button>
            <p>Status</p>
        </div>
        <div className={classes.column}>
        <button className={classes.installButton}>Install</button>
            <p>Status</p>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default DeviceDetails;
