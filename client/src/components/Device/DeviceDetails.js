import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import DropdownButtons from "../UI/DropdownButtons";
import Input from "../UI/Input";
import ProgressBar from "react-bootstrap/ProgressBar";
import classes from "./DeviceDetails.module.css";
import { useLocation, useParams } from "react-router-dom";
import { axiosInstance } from "../../config";

import { ColorRing } from "react-loader-spinner";
const deviceDetailsData = [
  {
    id: 123,
    name: "NVIDIA Orin #1 (Fluroscent Penetrant Inspection)",
    accessories: ["Accessory 1", "Accessory 2"],
    applications: ["Application 1", "Application 2", "Application 3"],
    status: "Running",
    lastUsed: "10:00 am",
  },
];
const deviceData = {
  name: "NVDIA",
  actions: ["device 1", "device 2"],
};
const accessoryData = {
  name: "Accessory",
  actions: ["Accessory 1", "Accessory 2"],
};
const applicationData = {
  name: "FPI",
  // actions: ["Application 1", "Application 2"],
  actions: ["LLE"],
};
const DeviceDetails = (props) => {
  const params = useParams();
  const location = useLocation();
  // const deviceType = location.state.type;
  // const deviceName = location.state.name;
  const [filters, setFilters] = useState({});
  const [clusterData, setClusterData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  /* fetch deviceData from kube */
  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get("/kube");
      // console.log("data");
      // console.log(response.data.nodes.node);
      setClusterData(response.data);
      setIsLoading(false);
    };
    fetchData();
    const interval = setInterval(() => fetchData(), 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const handleFilter = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  const sendValue = (value, name) => {
    handleFilter(name, value);
    console.log(value);
    console.log(name);
  };
  console.log(filters);

  const handleInstall = () => {
    console.log("Installing start");
  };
  const nodes = clusterData.nodes;
  const pods = clusterData.pods;
  console.log(pods);
  // return (
  //   <>
  //     {props.viewMode ? (
  //       <div className={classes.deviceDetails}>
  //         <div className={classes.column}>
  //           <div className={classes.row}>
  //             <DropdownButtons
  //               data={deviceData}
  //               sendValue={sendValue}
  //               style={{ width: "150px" }}
  //             />
  //           </div>
  //           <div className={classes.row}>
  //             <DropdownButtons data={accessoryData} sendValue={sendValue} />
  //           </div>
  //           <div className={classes.row}>
  //             <DropdownButtons data={applicationData} sendValue={sendValue} />
  //           </div>
  //         </div>
  //         <div className={classes.column}>
  //           <div className={classes.row}>
  //             <input className={classes.nameInput} placeholder="Custom name" />
  //           </div>
  //           <div className={classes.row}>
  //             <input name="Custom Label" style={{ display: "none" }} />
  //           </div>
  //           <div className={classes.row}>
  //             <input name="Custom Label" style={{ display: "none" }} />
  //           </div>
  //         </div>
  //         <div className={classes.column}>
  //           <div className={classes.row}>
  //             <p>Device Id: {params.id}</p>
  //           </div>
  //           <div className={classes.row}>
  //             <button className={classes.installButton}>Install</button>
  //           </div>
  //           <div className={classes.row}>
  //             <button className={classes.installButton} onClick={handleInstall}>
  //               Install
  //             </button>
  //           </div>
  //         </div>
  //         <div className={classes.column}>
  //           <div className={classes.row}>
  //             <ProgressBar style={{ width: "150px" }} animated now={45} />
  //           </div>
  //           <div className={classes.row}>
  //             <ProgressBar
  //               style={{ width: "150px" }}
  //               animated
  //               now={45}
  //               color="progressColor"
  //             />
  //           </div>
  //           <div className={classes.row}>
  //             <ProgressBar style={{ width: "150px" }} animated now={45} />
  //           </div>
  //         </div>
  //       </div>
  //     ) :
  //     (
  //       <div className={classes.detailsTable}>
  //         <table className={classes.deviceDetailsTable}>
  //           <thead>
  //             <tr>
  //               <th>Device Id</th>
  //               <th>Name</th>
  //               <th>Accessories</th>
  //               <th>Application</th>
  //               <th>Status</th>
  //               <th>Last Used</th>
  //             </tr>
  //           </thead>
  //           {deviceDetailsData.map((data) => (
  //             <tbody>
  //               <tr>
  //                 {/* <td>{params.id}</td> */}
  //                 <td>123</td>
  //                 {/* <td>{data.name}</td> */}
  //                 <td>{data.name}</td>
  //                 <td>
  //                   {data.accessories.map((d) => (
  //                     <>
  //                       <span>{d}</span>
  //                       <br />
  //                     </>
  //                   ))}
  //                 </td>
  //                 <td>
  //                   {/* {data.applications.map((d) => (
  //                     <>
  //                       <span>{d}</span>
  //                       <br />
  //                     </>
  //                   ))} */}
  //                   {data.applications.map((d) => (
  //                     <>
  //                       <span>{d}</span>
  //                       <br />
  //                     </>
  //                   ))}
  //                 </td>
  //                 <td>
  //                   <button
  //                     style={{ cursor: "pointer" }}
  //                     className={`${classes.statusButton} ${
  //                       data.status === "Stopped"
  //                         ? classes.stop
  //                         : classes.running
  //                     }`}
  //                   >
  //                     {data.status}
  //                   </button>
  //                 </td>
  //                 <td>{data.lastUsed}</td>
  //               </tr>
  //             </tbody>
  //           ))}
  //         </table>
  //       </div>
  //     )
  //     }
  //   </>
  // );

  return (
    <>
      {props.viewMode ? (
        <div className={classes.deviceDetails}>
          <div className={classes.column}>
            <div className={classes.row}>
              <DropdownButtons
                data={deviceData}
                sendValue={sendValue}
                style={{ width: "150px" }}
              />
            </div>
            <div className={classes.row}>
              <DropdownButtons data={accessoryData} sendValue={sendValue} />
            </div>
            <div className={classes.row}>
              <DropdownButtons data={applicationData} sendValue={sendValue} />
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
              <button className={classes.installButton} onClick={handleInstall}>
                Install
              </button>
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
      ) : (
        <>
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
                <tbody>
                  <tr>
                    {/* <td>{params.id}</td> */}
                    <td>123</td>

                    <td>{nodes.node[0]}</td>

                    <td>
                      {/* {data.accessories.map((d) => (
                      <>
                        <span>{d}</span>
                        <br />
                      </>
                    ))} */}
                      <>
                        <span>Accessory 1</span>
                        <br />
                        <span>Accessory 2</span>
                        <br />
                      </>
                    </td>
                    <td>
                      {/* {data.applications.map((d) => (
                      <>
                        <span>{d}</span>
                        <br />
                      </>
                    ))} */}
                      {pods.deployments.length > 0 ? (
                        pods.deployments.map((d) => (
                          <>
                            <span>{d}</span>
                            <br />
                          </>
                        ))
                      ) : (
                        <>
                          <span>None</span>
                          <br />
                        </>
                      )}
                      {/* <>
                        <span>{pods.deployment[0]}</span>
                        <br />
                      </> */}
                    </td>
                    <td>
                      {/* <button
                    style={{ cursor: "pointer" }}
                    className={`${classes.statusButton} ${
                      data.status === "Stopped" ? classes.stop : classes.running
                    }`}
                  >
                    {data.status}
                  </button> */}
                    </td>
                    {/* <td>{data.lastUsed}</td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default DeviceDetails;
