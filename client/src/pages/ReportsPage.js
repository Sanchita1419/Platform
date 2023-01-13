import React, { useState } from "react";
import Header from "../components/Header/Header";
import Report from "../components/report/Report";

const ReportsPage = () => {
  const [showReport, setShowReport] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [name, setName] = useState("");
  // const showReportHandler = () => {
  //     console.log("Show report");
  //     setShowReport(true);
  //   };
  //   const hideReportHandler = () => {
  //     setShowReport(false);
  //   };
  const showDetailHandler = (name) => {
    console.log("Show Detail");
    setShowDetail(true);
    setName(name);
  };
  const hideDetailHandler = () => {
    setShowDetail(false);
  };
  return (
    <div>
      <Header />
      <Report
        //   onConfirm={hideReportHandler}
        onShowDetail={showDetailHandler}
      />
    </div>
  );
};

export default ReportsPage;
