import ClearIcon from "@mui/icons-material/Clear";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SettingsIcon from "@mui/icons-material/Settings";
import StorageIcon from "@mui/icons-material/Storage";
import TabletAndroidIcon from "@mui/icons-material/TabletAndroid";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Device.module.css";
import DeviceHeader from "./DeviceHeader";
const data = [
  {
    name: "No. of services",
    value: "5",
    icon: <StorageIcon />,
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
  },
  {
    name: "Total Uptime",
    value: "98%",
    icon: <HourglassTopIcon />,
  },
  {
    name: "Current month costs",
    value: "$624.0",
    icon: <MonetizationOnIcon />,
  },
];
const deviceInfo = [
  {
    deviceid: "123",
    name: "NVIDIA Orin #1 (Fluroscent Penetrant Inspection)",
    type: "FPI",
    state: "Stopped",
  },
  {
    deviceid: "123",
    type: "FPI",
    name: "NVIDIA Orin #1 (Fluroscent Penetrant Inspection)",
    state: "Running",
  },
];
const totalCost = deviceInfo.reduce((total, obj) => obj.cost + total, 0);
console.log(totalCost);
const Device = () => {
  // const [active, setActive] = useState(false);
  const navigate = useNavigate();
  // const toggleActive = () => {
  //   setActive(!active);
  // };
  // console.log(active);
  // const activeClass = active ? classes.isActive : "";

  // const showDetailHandler = (id, deviceType) => {
  //   console.log("clicked");
  //   navigate(`/fleet/devicemanagement/${id}`, {
  //     state: { type: deviceType, viewMode: active },
  //   });
  // };
  return (
    <div className={classes.device}>
      <DeviceHeader />

      {/* <div className={classes.deviceCardContainer}>
        {data.map((D) => (
          <div key={D.name} className={classes.deviceCard}>
            <p className={classes.name}>
              <ListItemIcon style={{ minWidth: "35px", color: "#114A62" }}>
                {D.icon}
              </ListItemIcon>
              {D.name}
            </p>
            <p className={classes.value}>{D.value}</p>
          </div>
        ))}
      </div> */}

      <div className={classes.table}>
        <table className={classes.deviceTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>State</th>
              <th>Metric</th>
              <th>Config</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {deviceInfo.map((d) => (
              <tr key={d.deviceid}>
                <td>{d.name}</td>
                <td>
                  <button
                    className={`${classes.stateButton} ${
                      d.state === "Stopped" ? classes.stop : classes.running
                    }`}
                  >
                    {d.state}
                  </button>
                </td>
                <td>
                  <SignalCellularAltIcon />
                </td>
                <td>
                  <Link
                    style={{ textDecoration: "none", color: "#114A62" }}
                    to={`/fleet/devicemanagement/${d.deviceid}`}
                    state={{ type: d.type, name: d.name }}
                  >
                    <SettingsIcon style={{ cursor: "pointer" }} />
                  </Link>
                  {/* <SettingsIcon
                    style={{ cursor: "pointer" }}
                    onClick={showDetailHandler(d.deviceid, d.type)}
                  /> */}
                </td>
                <td className={classes.operationButtons}>
                  <div className={classes.buttonGroup}>
                    <button style={{ backgroundColor: "rgb(139, 211, 211)" }}>
                      Start
                    </button>
                    <button style={{ backgroundColor: "rgb(127, 240, 197)" }}>
                      Restart
                    </button>
                    <button style={{ backgroundColor: "rgb(255, 218, 218)" }}>
                      Stop
                    </button>
                  </div>
                  <div className={classes.buttonGroup}>
                    <button style={{ backgroundColor: "rgb(177, 182, 255)" }}>
                      Assign
                    </button>
                    <button style={{ backgroundColor: "rgb(198, 177, 255)" }}>
                      Remove
                    </button>
                    <button style={{ backgroundColor: "rgb(254, 255, 177)" }}>
                      Upgrade
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Device;
