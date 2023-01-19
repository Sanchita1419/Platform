import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import DashboardPage from "./pages/DashboardPage";
import Visualization from "./pages/Visualization";
import FleetManagement from "./pages/FleetManagement";
import { useSelector } from "react-redux";
import DeviceManagement from "./pages/DeviceManagement";
import DeviceManagementDetail from "./pages/DeviceManagementDetail";
import SubscriptionPage from "./pages/SubscriptionPage";
import ReportsPage from "./pages/ReportsPage";
function App() {
  // const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={!isLoggedIn ? <Landing /> : <DashboardPage />}
        />
        <Route path="/visualization" element={<Visualization />} />
        <Route path="/fleet" element={<FleetManagement />} />
        <Route path="/fleet/devicemanagement" element={<DeviceManagement />} />
        <Route
          path="/fleet/devicemanagement/:id"
          element={<DeviceManagementDetail />}
        />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/reports" element={<ReportsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
