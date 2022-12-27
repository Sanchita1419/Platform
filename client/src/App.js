import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Visualization from "./pages/Visualization";
import FleetManagement from "./pages/FleetManagement";
import { useSelector } from "react-redux";
import DeviceManagement from "./pages/DeviceManagement";
import DeviceManagementDetail from "./pages/DeviceManagementDetail";
function App() {
  const user = useSelector((state)=>state.auth.user)
// const isLoggedIn = true;
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={!user ? <Landing /> : <Dashboard />} />
        <Route path="/visualization" element={<Visualization />} />
        <Route path="/fleet" element={<FleetManagement />}/>
        <Route path="/fleet/devicemanagement" element={<DeviceManagement />}/>
        <Route path="/fleet/devicemanagement/:id" element={<DeviceManagementDetail />}/>


      </Routes>

    </BrowserRouter>
  );
}

export default App;
