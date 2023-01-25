import ClearIcon from "@mui/icons-material/Clear";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SettingsIcon from "@mui/icons-material/Settings";
import StorageIcon from "@mui/icons-material/Storage";
import TabletAndroidIcon from "@mui/icons-material/TabletAndroid";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Device.module.css";
import DeviceHeader from "./DeviceHeader";
import { axiosInstance } from "../../config";
import { ColorRing } from "react-loader-spinner";
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
  // {
  //   deviceid: "123",
  //   type: "FPI",
  //   name: "NVIDIA Orin #1 (Fluroscent Penetrant Inspection)",
  //   state: "Running",
  // },
];
const totalCost = deviceInfo.reduce((total, obj) => obj.cost + total, 0);
console.log(totalCost);
const Device = () => {
  const [clusterData, setClusterData] = useState({});
  const [state, setState] = useState("Running");
  const [isLoading, setIsLoading] = useState(true);

  /* fetch deviceData from db */
  useEffect(() => {
    const fetchData = async () => {
      // if (Object.keys(clusterData) === 0) {
      const response = await axiosInstance.get("/kube");

      // console.log(response.data[0].ip_address);
      console.log("data");
      console.log(response.data.nodes.node);
      setClusterData(response.data);
      setIsLoading(false);
    };
    // };
    fetchData();
  }, []);
  console.log("Test");
  console.log(clusterData);

  /* start action */
  const handleStart = () => {
    console.log("Starting");
    setState("Running");
  };

  /* stop action */
  const handleStop = () => {
    console.log("Stoping");
    setState("Stopped");
  };
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

      {isLoading ? (
        <div className="loadingContainer">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#114A62"]}
          />
        </div>
      ) : (
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
              {clusterData.nodes.node.map((d) => (
                //{deviceInfo.map((d) => (
                <tr key={d}>
                  <td>{d}</td>
                  <td>
                    <button
                      className={`${classes.stateButton} ${
                        state === "Stopped" ? classes.stop : classes.running
                      }`}
                    >
                      {state}
                    </button>
                  </td>
                  <td>
                    <SignalCellularAltIcon />
                  </td>
                  <td>
                    {/* <Link
                    style={{ textDecoration: "none", color: "#114A62" }}
                    to={`/fleet/devicemanagement/${d.deviceid}`}
                    state={{ type: "" , name: d }}
                  >
                    <SettingsIcon style={{ cursor: "pointer" }} />
                  </Link> */}

                    {/* <SettingsIcon
                    style={{ cursor: "pointer" }}
                    onClick={showDetailHandler(d.deviceid, d.type)}
                  /> */}
                  </td>
                  <td className={classes.operationButtons}>
                    <div className={classes.buttonGroup}>
                      <button
                        style={{ backgroundColor: "rgb(139, 211, 211)" }}
                        onClick={handleStart}
                      >
                        Start
                      </button>
                      <button style={{ backgroundColor: "rgb(127, 240, 197)" }}>
                        Restart
                      </button>
                      <button
                        style={{ backgroundColor: "rgb(255, 218, 218)" }}
                        onClick={handleStop}
                      >
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
      )}
    </div>
  );
};

export default Device;
