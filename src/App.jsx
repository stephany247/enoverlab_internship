import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Schedule from "./components/pages/Schedule";
import Entertainment from "./components/pages/Entertainment";
import Logout from "./components/pages/Logout";
import Settings from "./components/pages/Settings";
import SmartHome from "./components/pages/SmartHome";
import EmergencyContact from "./components/pages/EmergencyContact";
import Sidebar from "./components/ui/sidebar/Sidebar";
import Header from "./components/ui/header/Header";

export default function App() {
  return (
    // <Router>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6">
      {/* sidebar  */}
      <Sidebar />
      {/* Main Content */}
      <main className="col-span-3 space-y-4">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/emergencycontact" element={<EmergencyContact />} />
          <Route path="/smarthome" element={<SmartHome />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </main>
    </div>
    // </Router>
  );
}
