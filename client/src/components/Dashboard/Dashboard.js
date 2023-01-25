import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { axiosInstance } from "../../config";
import { authActions } from "../../redux/authRedux";
import Button from "../UI/Button";
import classes from "./Dashboard.module.css";
const Dashboard = () => {
  const [img, setImg] = useState();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(authActions.logout());
  };
  const handleShow = async () => {
    const response = await axiosInstance.get("/data");
    const image = response.data.lowlight_image;
    const newImg = `data:image/jpg;base64,${image}`;
    setImg(newImg);
  };
  return (
    <div className={classes.dashboard}>
      <div className={classes.dashboardHeader}>
        <h2>Dashboard</h2>
        <Button
          name="Logout"
          bgcolor="#114A62"
          bordercolor="#114A62"
          onClick={handleLogOut}
        />
      </div>

      <div className={classes.testImg}>
        <button onClick={handleShow}>Show image</button>
        <div style={{ width: "fit-content" }}>{img}</div>
      </div>
    </div>
  );
};

export default Dashboard;
