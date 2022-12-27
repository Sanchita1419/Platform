import React from "react";
import classes from "./Fleet.module.css";
import PersonIcon from "@mui/icons-material/Person";
import AodIcon from "@mui/icons-material/Aod";
import PlaceIcon from "@mui/icons-material/Place";
import { Link, Route, Routes, useMatch } from "react-router-dom";


const Fleet = () => {
    
  return (
    <div className={classes.fleet}>
      <h2>Fleet Management</h2>
      <div className={classes.fleetCardContainer}>
        <Link style={{ textDecoration: "none" }} to="/usermanagement">
          <div className={classes.fleetCard} style={{ cursor: "not-allowed" }}>
            <p>
              <PersonIcon />
              USER
            </p>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/fleet/devicemanagement">
          <div className={classes.fleetCard}>
            <p>
              <AodIcon />
              DEVICE
            </p>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/placemanagement">
          <div className={classes.fleetCard} style={{ cursor: "not-allowed" }}>
            <p>
              <PlaceIcon />
              PLACE
            </p>
          </div>
        </Link>
      </div>
      
    </div>
  );
};

export default Fleet;
