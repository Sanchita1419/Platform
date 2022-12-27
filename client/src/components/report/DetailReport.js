import React from "react";
import Modal from "../UI/Modal";
import Frame from "../Frame/Frame";
import classes from "./DetailReport.module.css";
const DetailReport = (props) => {
  console.log(props.frameName);
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.image}>
        <div className={classes.imageBox}>
          <h2>White Light</h2>
          <img src={`/${props.frameName}.jpg`} />
        </div>
        <div className={classes.imageBox}>
          <h2>UV Light</h2>
          <img src={`/${props.frameName}.jpg`} />
        </div>
      </div>
      <div className={classes.details}>
        <h4>Defect Type : <span>{props.type}</span></h4>
        <h4>Pass/Fail: <span>{props.status}</span></h4>
        <div className={classes.detailsFooter}>
        <div>
            <h5>Device Id: Dummy</h5>
            <h5>Plant: Dummy</h5>
            <h5>Part No: Dummy</h5>
            <h5>Shift: Dummy</h5>
        </div>
        
        <button onClick={props.onClose}>close</button>
        </div>
      </div>
      
    </Modal>
  );
};

export default DetailReport;
