import React from "react";
import { useState } from "react";
import Chart from "../components/Chart/Chart";
import Frame from "../components/Frame/Frame";
import Header from "../components/Header/Header";
import DetailReport from "../components/report/DetailReport";
import Report from "../components/report/Report";
import ButtonContainer from "../components/UI/ButtonContainer";
import Visualize from "../components/Visualize/Visualize";

const Visualization = (props) => {
  const [showReport, setShowReport] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [name, setName] = useState("");

  const showReportHandler = () => {
    console.log("Show report");
    setShowReport(true);
  };
  const hideReportHandler = () => {
    setShowReport(false);
  };
  const showDetailHandler = (name) => {
    console.log("Show Detail");
    setShowDetail(true);
    setName(name);
  };
  const hideDetailHandler = () => {
    setShowDetail(false);
  };
  return (
    <>
      <Header />
      <Visualize />
      {/* {showDetail && (
        <DetailReport
          type="Crack"
          status="Not OK"
          onClose={hideDetailHandler}
          frameName={name}
        />
      )}
      {!showReport && (
        <>
          
          <ButtonContainer onConfirm={showReportHandler} />
        </>
      )}
      {showReport && (
        <Report
          onConfirm={hideReportHandler}
          onShowDetail={showDetailHandler}
        />
      )} */}
    </>
  );
};

export default Visualization;
