import React from "react";
import Button from "../UI/Button";
import DropdownButton from "../UI/DropdownButton";
import Input from "../UI/Input";
import ProgressBar from "react-bootstrap/ProgressBar";
import classes from "./DeviceDetails.module.css";
import { useLocation, useParams } from "react-router-dom";
const deviceDetailsData = [
  {
    id: 123,
    name: "NVIDIA Orin #1 (Fluroscent Penetrant Inspection)",
    accessories: ["Accessory 1", "Accessory 2"],
    applications: ["Application 1", "Application 2", "Application 3"],
    status: "Running",
    lastUsed: "10:00 am",
  },
  {
    id: 123,
    name: "NVIDIA Orin #2 (Fluroscent Penetrant Inspection)",
    accessories: ["Accessory 4", "Accessory 5", "Accessory 6"],
    applications: ["Application 2", "Application 3"],
    status: "Stopped",
    lastUsed: "08:00 am",
  },
];
const DeviceDetails = (props) => {
  const params = useParams();
  const location = useLocation();
  const deviceType = location.state.type;
  const deviceName = location.state.name;
  return (
    <>
      {props.viewMode ? (
        <div className={classes.detailsTable}>
          <table className={classes.deviceDetailsTable}>
            <thead>
              <tr>
                <th>Device Id</th>
                <th>Name</th>
                <th>Accessories</th>
                <th>Application</th>
                <th>Status</th>
                <th>Last Used</th>
              </tr>
            </thead>
            {deviceDetailsData.map((data) => (
              <tbody>
                <tr>
                  <td>{params.id}</td>
                  <td>{deviceName}</td>
                  <td>
                    {data.accessories.map((d) => (
                      <>
                        <span>{d}</span>
                        <br />
                      </>
                    ))}
                  </td>
                  <td>
                    {data.applications.map((d) => (
                      <>
                        <span>{d}</span>
                        <br />
                      </>
                    ))}
                  </td>
                  <td>
                    <button
                      style={{ cursor: "pointer" }}
                      className={`${classes.statusButton} ${
                        data.status === "Stopped"
                          ? classes.stop
                          : classes.running
                      }`}
                    >
                      {data.status}
                    </button>
                  </td>
                  <td>{data.lastUsed}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      ) : (
        <div className={classes.deviceDetails}>
          <div className={classes.column}>
            <div className={classes.row}>
              <DropdownButton
                name={deviceType}
                width="130px"
                actions={["device 1", "device 2"]}
              />
            </div>
            <div className={classes.row}>
              <DropdownButton
                name="Accessory"
                width="130px"
                actions={["Accessory 1", "Accessory 2"]}
              />
            </div>
            <div className={classes.row}>
              <DropdownButton
                name="Application"
                width="130px"
                actions={["Application 1", "Application 2"]}
              />
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.row}>
              <input className={classes.nameInput} placeholder="Custom name" />
            </div>
            <div className={classes.row}>
              <input name="Custom Label" style={{ display: "none" }} />
            </div>
            <div className={classes.row}>
              <input name="Custom Label" style={{ display: "none" }} />
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.row}>
              <p>Device Id: {params.id}</p>
            </div>
            <div className={classes.row}>
              <button className={classes.installButton}>Install</button>
            </div>
            <div className={classes.row}>
              <button className={classes.installButton}>Install</button>
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.row}>
              <ProgressBar style={{ width: "150px" }} animated now={45} />
            </div>
            <div className={classes.row}>
              <ProgressBar
                style={{ width: "150px" }}
                animated
                now={45}
                color="progressColor"
              />
            </div>
            <div className={classes.row}>
              <ProgressBar style={{ width: "150px" }} animated now={45} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeviceDetails;