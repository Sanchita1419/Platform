import React, { useState } from "react";
import DeviceDetails from "../components/Device/DeviceDetails";
import DeviceHeader from "../components/Device/DeviceHeader";
import Header from "../components/Header/Header";

const DeviceManagementDetail = () => {
  const [active, setActive] = useState(false);
  const toggleHandler = () => {
    console.log("Toggling");
    setActive(!active);
  };
  return (
    <div>
      <Header />
      <DeviceHeader
        addIsActive="true"
        toggleIsActive="true"
        onToggle={toggleHandler}
      />
      <DeviceDetails viewMode={active} />
    </div>
  );
};

export default DeviceManagementDetail;
