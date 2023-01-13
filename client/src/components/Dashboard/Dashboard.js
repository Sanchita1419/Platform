import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/authRedux";
import Button from "../UI/Button";
import classes from "./Dashboard.module.css";
const Dashboard = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(authActions.logout());
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
    </div>
  );
};

export default Dashboard;
