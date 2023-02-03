import React, { useEffect, useState } from "react";
import Modal from "../UI/Modal";
import Frame from "../Frame/Frame";
import classes from "./DetailReport.module.css";
import { axiosInstance } from "../../config";
const DetailReport = (props) => {
  const id = props.value;
  const [responseData, setResponseData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get(`/data/detail/${id}`);
      setResponseData(response.data);
    };
    fetchData();
  }, [id]);
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.image}>
        <div className={classes.imageBox}>
          <h2>Low Light</h2>
          <img
            src={`data:image/jpeg;base64,${responseData.lowlight_image}`}
            alt="lowlight_img"
          />
        </div>
        <div className={classes.imageBox}>
          <h2>White Light</h2>
          <img
            src={`data:image/jpeg;base64,${responseData.whitelight_image}`}
            alt="white_img"
          />
        </div>
        <div className={classes.imageBox}>
          <h2>Contoured Image</h2>
          <img
            src={`data:image/jpeg;base64,${responseData.contoured_image}`}
            alt="contoured_img"
          />
        </div>
      </div>
      <div className={classes.details}>
        {/* <h4>
          Defect Type : <span>{props.type}</span>
        </h4>
        <h4>
          Pass/Fail: <span>{props.status}</span>
        </h4> */}
        <div className={classes.detailsFooter}>
          {/* <div>
            <h5>Device Id: Dummy</h5>
            <h5>Plant: Dummy</h5>
            <h5>Part No: Dummy</h5>
            <h5>Shift: Dummy</h5>
          </div> */}

          <button onClick={props.onClose}>close</button>
        </div>
      </div>
    </Modal>
  );
};

export default DetailReport;
