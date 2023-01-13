import React, { useEffect, useState } from "react";
import Button from "./Button";
import classes from "./ButtonContainer.module.css";
import { axiosInstance } from "../../config";
import { useDispatch } from "react-redux";
import { dataActions } from "../../redux/dataRedux";
import img1 from "../../images/img1.jpg";

const ButtonContainer = (props) => {
  // const [showReport, setShowReport] = useState(false)
  const dispatch = useDispatch();

  // useEffect(() => {
  //   let interval = setInterval(async() => {
  //     const res = await axiosInstance.get("/data/");
  //   }, 5000);
  //   if(res.data.img2) {
  //     clearInterval(interval);
  //   };
  // }, []);

  const handleStart = async () => {
    console.log("starting");

    //Send post request to fpi
    try {
      const response = await fetch("http://172.17.0.2:5500/start", {
        method: "post",
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }

    //Get image from db
    const res = await axiosInstance
      .get("/data/63a053d7dc10050ac1cb6545")
      .catch((err) => console.log(err, "Error"));

    console.log(res.data.img.data.data);
    const buffer = res.data.img.data.data;

    const base64String = btoa(String.fromCharCode(...new Uint8Array(buffer)));

    const base64Flag = "data:image/jpg;base64,";
    const imgStr = base64Flag + base64String;
    console.log(imgStr);
    dispatch(dataActions.setImage(imgStr));
  };

  const handleReset = () => {
    console.log("Reseting");
    dispatch(dataActions.resetImage());
  };
  const handleReport = () => {
    console.log("reporting");
    // setShowReport(true)
    props.onConfirm();
  };
  return (
    <div className={classes.buttonContainer}>
      <Button
        name="Start"
        bgcolor="rgb(1, 122, 37)"
        bordercolor="rgb(1, 122, 37)"
        onClick={handleStart}
      />
      <Button
        name="Reset"
        bgcolor="#f6932f"
        bordercolor="#f6932f"
        onClick={handleReset}
      />
      <Button
        name="Report"
        bgcolor="#114A62"
        bordercolor="#114A62"
        onClick={handleReport}
      />
    </div>
  );
};

export default ButtonContainer;
