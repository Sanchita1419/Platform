import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Frame0 from "../../images/Frame0.jpg";
import Frame1 from "../../images/Frame1.jpg";
import Frame2 from "../../images/Frame2.jpg";
import Frame3 from "../../images/Frame3.jpg";
import blank from "../../images/blank.png";

import DropdownButtons from "../UI/DropdownButtons";
import FilterButton from "../UI/FilterButton";
import classes from "./Report.module.css";
import Select from "react-select";
import { axiosInstance } from "../../config";
import DetailReport from "./DetailReport";

const dropdownData = [
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
const plantData = {
  name: "Plant",
  actions: ["Plant 1", "Plant 2", "Plant 3"],
};
const lineData = {
  name: "Line",
  actions: ["Line 1", "Line 2", "Line 3"],
};
const partNoData = {
  name: "Part No.",
  actions: ["1", "2", "3"],
};
const dateRangeData = {
  name: "Date Range",
  actions: ["Past 2 days", "Past 5 days", "Past 10 days"],
};
const granularityData = {
  name: "Granularity",
  actions: ["Granularity 1", "Granularity 2", "Granularity 3"],
};
const Report = (props) => {
  const [reportData, setReportData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  // const [value, setValue] = useState("");
  const [filters, setFilters] = useState({});
  const [photo, setPhoto] = useState("");
  const [value, setValue] = useState("");

  const onShowDetail = () => {
    // setValue(id);
    setShowDetail(true);
  };
  const hideDetailHandler = () => {
    setShowDetail(false);
  };
  const handleFilter = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  const sendValue = (value, name) => {
    handleFilter(name.toLowerCase(), value);
    console.log(value);
    console.log(name);
  };
  // console.log(filters);

  /* UseEffect for fetching */
  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get("/data");
      setReportData(response.data);
      // const img = reportData[0].lowlight_image;
      // const base64String = btoa(
      //   String.fromCharCode(...new Uint8Array(img.data))
      // );
      // setPhoto(base64String);
    };
    fetchData();
  }, [reportData]);
  console.log(reportData);
  //console.log(reportData[0]);
  //console.log(reportData[0].lowlight_image);
  //const img = reportData[0].lowlight_image;
  //console.log(img);
  //const base64String = btoa(String.fromCharCode(...new Uint8Array(img.data)));
  // const p = "data:image/jpeg;base64," + base64String;
  //setPhoto(base64String);
  //console.log(base64String);
  //setPhoto("data:image/jpeg;base64," + base64String);
  /* UseEffect for filtering */

  useEffect(() => {
    // setFilteredData(
    //   reportData.filter((item) => {
    //     Object.entries(filters).every(([key, value]) =>
    //       item[key].includes(value)
    //     );
    //   })
    // );
    const newData = reportData.filter((item) => {
      for (var key in filters) {
        if (item[key] === undefined || item[key] !== filters[key]) return false;
      }
      return true;
    });
    setFilteredData(newData);
    //console.log(newData);
  }, [reportData, filters]);

  //console.log("Filtered: " + filteredData);
  // const handleCloseReport = () => {
  //   props.onConfirm();
  // };
  // const handleFilters = (e) => {
  //   const value = e.target.value;
  //   console.log(value);
  //   setFilters({
  //     ...filters,
  //     [e.target.name]: value,
  //   });
  // };
  return (
    <>
      {!showDetail ? (
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
            <DropdownButtons
              width="100px"
              data={plantData}
              sendValue={sendValue}
            />
            <DropdownButtons
              width="100px"
              data={lineData}
              sendValue={sendValue}
            />
            <DropdownButtons
              width="120px"
              data={partNoData}
              sendValue={sendValue}
            />
            <DropdownButtons
              width="150px"
              data={dateRangeData}
              sendValue={sendValue}
            />
            <DropdownButtons
              width="150px"
              data={granularityData}
              sendValue={sendValue}
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
              {reportData.map((d) => (
                <tr key={d._id}>
                  <td>1</td>
                  <td>1</td>
                  <td>{d.part_no}</td>
                  <td>{d.date.slice(0, 10)}</td>
                  <td>{d.time}</td>
                  <td>Pending</td>
                  <td>
                    {/* {photo ? (
                      <img
                        src={`data:image/jpeg;base64,${d.lowlight_image}`}
                        onClick={onShowDetail}
                        alt="thumbnail"
                      />
                    ) : (
                      <img src={blank} alt="thumbnail" />
                    )} */}
                    <img
                      src={`data:image/jpeg;base64,${d.lowlight_image}`}
                      onClick={() => {
                        setShowDetail(true);
                        setValue(d._id);
                      }}
                      alt="thumbnail"
                    />
                  </td>
                  <td>X</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      ) : (
        <DetailReport value={value} onClose={hideDetailHandler} />
      )}
    </>
  );
};

export default Report;
