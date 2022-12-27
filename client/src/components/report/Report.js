import Button from "../UI/Button";
import React, { useState } from "react";
import classes from "./Report.module.css";
import DropdownButton from "../UI/DropdownButton";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import { IconButton } from "@mui/material";
import DetailReport from "./DetailReport";
import Frame0 from "../../images/Frame0.jpg";
import Frame1 from "../../images/Frame1.jpg";
import Frame2 from "../../images/Frame2.jpg";
import Frame3 from "../../images/Frame3.jpg";

const data = [
  {
    name: "Frame0",
    partNo: "1",
    type: "Crack",
    thumbnail: Frame0,
    status: "Not OK",
  },
  {
    name: "Frame1",
    partNo: "2",
    type: "Crack",
    thumbnail: Frame1,
    status: "Not OK",
  },
  {
    name: "Frame2",
    partNo: "3",
    type: "Crack",
    thumbnail: Frame2,
    status: "Not OK",
  },
  {
    name: "Frame3",
    partNo: "4",
    type: "Crack",
    thumbnail: Frame3,
    status: "Not OK",
  },
];
const Report = (props) => {
  const handleCloseReport = () => {
    props.onConfirm();
  };

  return (
      <div className={classes.report}>
        <div className={classes.heading}>
          <Button
            name="Back"
            bgcolor="#4fb6df"
            bordercolor="blue"
            onClick={handleCloseReport}
          />
          <h2>Results and Reports</h2>
        </div>
        <div className={classes.dropdownContainer}>
          <DropdownButton name="PLANT" />
          <DropdownButton name="LINE" />
          <DropdownButton name="PART NO." />
          <DropdownButton name="DATE RANGE" />
          <DropdownButton name="GRANULARITY" />
        </div>
        <div className={classes.iconButtonContainer}>
          <IconButton aria-label="download" size="large">
            <DownloadIcon style={{color: "black"}}/>
          </IconButton>
          <IconButton aria-label="print" size="large">
            <PrintIcon style={{color: "black"}}/>
          </IconButton>
        </div>
        <div className={classes.table}>
          <table>
            <tr>
              <th>PLANT</th>
              <th>LINE</th>
              <th>PART NO</th>
              <th>DATE</th>
              <th>TIME</th>
              <th>STATUS</th>
              <th>THUMBNAIL</th>
              <th>COMMENTS</th>
            </tr>
            {data.map((d) => (
              <tr key={d.partNo}>
                <td>X</td>
                <td>X</td>
                <td>{d.partNo}</td>
                <td>X</td>
                <td>X</td>
                <td>{d.status}</td>
                <td>
                  <img
                    src={d.thumbnail}
                    onClick={() => props.onShowDetail(d.name)}
                    alt="thumbnail"
                  />
                </td>
                <td>X</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    
  );
};

export default Report;
