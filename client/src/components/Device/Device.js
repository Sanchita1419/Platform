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
import Assign from "./Assign";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
];
const totalCost = deviceInfo.reduce((total, obj) => obj.cost + total, 0);
// console.log(totalCost);
const Device = () => {
  const [clusterData, setClusterData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState("Stopped");
  const [showAssign, setShowAssign] = useState(false);
  const [item, setItem] = useState("");

  /* fetch deviceData from kube */
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axiosInstance.get("/kube");
  //     // console.log("data");
  //     // console.log(response.data.nodes.node);
  //     setClusterData(response.data);
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, []);

  /* fetch data from kube every 10 seconds */

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get("/kube");
      setClusterData(response.data);
      // setState("Running");
      // const podNo = clusterData.pods.deployments.length;
      // console.log(podNo);
      // setState(() => {
      //   if (podNo > 0) {
      //     return "Running";
      //   } else {
      //     return "Stopped";
      //   }
      // });
      setIsLoading(false);
      // console.log(response.data.pods.deployments.length);

      // console.log(state);
    };
    fetchData();
    const interval = setInterval(() => fetchData(), 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // console.log(noOfPods);
  // if (!isLoading) {
  //   if (clusterData.pods.deployments.length > 0) {
  //     setState("Running");
  //   }
  // }
  const sendItem = (i) => {
    setItem(i);
  };
  /* start action */
  const handleStart = async () => {
    toast("Started", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setState("Running");
    const response = await axiosInstance.post("/kube/start");
    console.log(response);
    console.log("Starting");
  };

  /* stop action */
  const handleStop = async () => {
    console.log("Stoping");
    setState("Stopped");
    const response = await axiosInstance.post("/kube/stop");
    console.log(response);
  };
  const handleHideAssign = () => {
    setShowAssign(false);
  };
  const handleShowAssign = () => {
    setShowAssign(true);
  };
  const navigate = useNavigate();

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {!showAssign ? (
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
                    //{clusterData.map((d) => (
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
                        <Link
                          style={{ textDecoration: "none", color: "#114A62" }}
                          to={`/fleet/devicemanagement/${d.deviceid}`}
                          state={{ type: "", name: d }}
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
                          <button
                            style={{ backgroundColor: "rgb(139, 211, 211)" }}
                            onClick={handleStart}
                          >
                            Start
                          </button>
                          <button
                            style={{ backgroundColor: "rgb(127, 240, 197)" }}
                          >
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
                          <button
                            style={{ backgroundColor: "rgb(177, 182, 255)" }}
                            onClick={handleShowAssign}
                          >
                            Assign
                          </button>
                          <button
                            style={{ backgroundColor: "rgb(198, 177, 255)" }}
                          >
                            Remove
                          </button>
                          <button
                            style={{ backgroundColor: "rgb(254, 255, 177)" }}
                          >
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
      ) : (
        <Assign sendItem={sendItem} onClose={handleHideAssign} />
      )}
    </>
  );
};

export default Device;
