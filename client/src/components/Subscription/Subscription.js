import ClearIcon from "@mui/icons-material/Clear";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SettingsIcon from "@mui/icons-material/Settings";
import StorageIcon from "@mui/icons-material/Storage";
import TabletAndroidIcon from "@mui/icons-material/TabletAndroid";
import { ListItemIcon } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Subscription.module.css";
import SubscriptionHeader from "./SubscriptionHeader";
const data = [
  {
    name: "No. of services",
    value: "5",
    icon: <StorageIcon />,
    disabled: true,
  },
  {
    name: "No. of Devices",
    value: "2",
    icon: <TabletAndroidIcon />,
  },
  {
    name: "Event Alerts",
    value: "43",
    icon: <ClearIcon />,
    disabled: true,
  },
  {
    name: "Total Uptime",
    value: "98%",
    icon: <HourglassTopIcon />,
    disabled: true,
  },
  {
    name: "Current month costs",
    value: "$624.0",
    icon: <MonetizationOnIcon />,
    disabled: true,
  },
];
const deviceInfo = [
  {
    deviceid: "123",
    name: "NVIDIA Orin #1 (Fluroscent Penetrant Inspection)",
    cost: 312,
  },
  {
    deviceid: "123",
    name: "NVIDIA Orin #1 (Fluroscent Penetrant Inspection)",
    cost: 312,
  },
];
const totalCost = deviceInfo.reduce((total, obj) => obj.cost + total, 0);
console.log(totalCost);
const Subscription = () => {
  return (
    <div className={classes.subscription}>
      <SubscriptionHeader />

      {/* <div
              className={`${classes.dropdown} ${activeClass}`}
              onClick={toggleActive}
            >
              Plant
              <ul className={classes.dropdownList}>
                <li>
                  <label>
                    <input type="checkbox" value="" name="" />
                    Action 1
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" value="" name="" />
                    Action 2
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" value="" name="" />
                    Action 3
                  </label>
                </li>
              </ul>
            </div> */}

      <div className={classes.subscriptionCardContainer}>
        {data.map((D) => (
          <div
            key={D.name}
            className={`${classes.subscriptionCard} ${
              D.disabled && classes.disabled
            }`}
          >
            <p className={classes.name}>
              <ListItemIcon style={{ minWidth: "35px", color: "#114A62" }}>
                {D.icon}
              </ListItemIcon>
              {D.name}
            </p>
            <p className={classes.value}>{D.value}</p>
          </div>
        ))}
      </div>
      <div className={classes.table}>
        <table>
          <tr>
            <th>Subscriptions</th>
            <th></th>
            <th>Usage</th>
          </tr>
          {deviceInfo.map((d) => (
            <tr key={d.deviceid}>
              <td>{d.name}</td>
              <td>
                <Link
                  style={{ textDecoration: "none", color: "#114A62" }}
                  to={`/fleet/devicemanagement/${d.deviceid}`}
                >
                  <SettingsIcon style={{ cursor: "pointer" }} />
                </Link>
              </td>
              <td>${d.cost} per month</td>
            </tr>
          ))}
          {/* <tr>
                <td>NVIDIA Orin #1 (Fluroscent Penetrant Inspection)</td>
                <td>
                <Link to={`/fleet/devicemanagement/${}`}>
    
                  <SettingsIcon style={{cursor:"pointer"}} />
                </Link>
                </td>
                <td>$312 per month</td>
              </tr> */}
          <tr style={{ color: "red" }}>
            <td></td>
            <td>Total cost</td>
            <td>${totalCost} per month</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Subscription;
