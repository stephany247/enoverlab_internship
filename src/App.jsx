import { Routes, Route, useLocation } from "react-router";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Entertainment from "./pages/Entertainment";
import Logout from "./pages/Logout";
import Settings from "./pages/Settings";
import SmartHome from "./pages/SmartHome";
import EmergencyContact from "./pages/EmergencyContact";
import Sidebar from "./components/ui/sidebar/Sidebar";
import "leaflet/dist/leaflet.css";
import DeskopHeader from "./components/ui/header/DesktopHeader";
import BottomNav from "./components/ui/home/BottomNav";
import Explore from "./pages/Explore";

export default function App() {
  const location = useLocation();
  const hideBottomNav =
    location.pathname === "/explore" || location.pathname === "/logout";
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 p-6">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="col-span-3 space-y-4 ">
        <DeskopHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="emergencycontact" element={<EmergencyContact />} />
          <Route path="smarthome" element={<SmartHome />} />
          <Route path="entertainment" element={<Entertainment />} />
          <Route path="settings" element={<Settings />} />
          <Route path="logout" element={<Logout />} />
          <Route path="explore" element={<Explore />} />
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
        {!hideBottomNav && <BottomNav />}
      </main>
    </div>
  );
}
