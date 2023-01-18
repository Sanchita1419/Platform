import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import { IconButton } from "@mui/material";
import React from "react";
import Frame0 from "../../images/Frame0.jpg";
import Frame1 from "../../images/Frame1.jpg";
import Frame2 from "../../images/Frame2.jpg";
import Frame3 from "../../images/Frame3.jpg";
import DropdownButtons from "../UI/DropdownButtons";
import FilterButton from "../UI/FilterButton";
import classes from "./Report.module.css";

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
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
// const plantOptions = ["Plant 1", "Plant 2", "Plant 3"];
const Report = (props) => {
  const handleCloseReport = () => {
    props.onConfirm();
  };

  return (
    <div className={classes.report}>
      <div className={classes.heading}>
        {/* <Button
          name="Back"
          bgcolor="#114A62"
          bordercolor="#114A62"
          onClick={handleCloseReport}
        /> */}
        <h2>Results and Reports</h2>
      </div>
      <div className={classes.dropdownContainer}>
        {/* <DropdownButtons
          width="100px"
          name="Plant"
          actions={["Plant", "Plant 1", "Plant 2", "Plant 3"]}
        /> */}
        <FilterButton
          name="Plant"
          actions={["Plant", "Plant 1", "Plant 2", "Plant 3"]}
        />
        <DropdownButtons
          width="100px"
          name="Line"
          actions={["Line 1", "Line 2", "Line 3"]}
        />
        <DropdownButtons
          width="120px"
          name="Part No."
          actions={["1", "2", "3"]}
        />
        <DropdownButtons
          width="150px"
          name="Date Range"
          actions={["Past 2 days", "Past 5 days", "Past 10 days"]}
        />
        <DropdownButtons
          width="150px"
          name="Granularity"
          actions={["Granularity 1", "Granularity 2", "Granularity 3"]}
        />
      </div>
      <div className={classes.iconButtonContainer}>
        <IconButton aria-label="download" size="large">
          <DownloadIcon style={{ color: "114A62" }} />
        </IconButton>
        <IconButton aria-label="print" size="large">
          <PrintIcon style={{ color: "114A62" }} />
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
