
import React from "react";
import Header from "../components/Header/Header";
import Fleet from "../components/Fleet/Fleet"
import { Route, Routes, useMatch } from "react-router-dom";
import UserManagement from "./UserManagement";
import DeviceManagement from "./DeviceManagement";
import PlaceManagement from "./PlaceManagement";

const FleetManagement = () => {
  return (
    
    <>
      <Header />
      <Fleet/>
      {/* <Routes>
      <Route path="/" element={<Fleet/>}/>
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route path="/devicemanagement" element={<DeviceManagement />} />
        <Route path="/placemanagement" element={<PlaceManagement />} />
      </Routes> */}
    </>
  );
};

export default FleetManagement;
