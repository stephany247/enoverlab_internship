import { NavLink, Routes, Route } from "react-router-dom";
import { assets } from "./assets/assets";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Entertainment from "./pages/Entertainment";
import Logout from "./pages/Logout";
import Settings from "./pages/Settings";
import SmartHome from "./pages/SmartHome";
import EmergencyContact from "./pages/EmergencyContact";
import {
  FiHome,
  FiCalendar,
  FiPhone,
  FiMonitor,
  FiMusic,
  FiSettings,
  FiLogOut,
  FiSmartphone,
} from "react-icons/fi";
import Header from "./components/ui/header/Header";
import Sidebar from "./components/ui/sidebar/Sidebar";

// Reusable Sidebar Link Component
const SidebarLink = ({ to, icon: Icon, label }) => (
  <NavLink to={to}>
    {({ isActive }) => (
      <div
        className={`p-4 w-full flex items-center gap-4 ${
          isActive
            ? "text-blue font-medium bg-very-soft-blue"
            : "text-dark-gray hover:text-blue"
        }`}
      >
        <Icon
          className={`w-5 h-5 ${
            isActive ? "text-blue" : "text-dark-gray"
          }`}
        />
        <p>{label}</p>
      </div>
    )}
  </NavLink>
);

export default function App() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className="hidden md:block fixed w-60 bg-white shadow-md z-10 rounded-lg 
                      md:h-screen lg:h-auto md:overflow-y-auto lg:overflow-visible md:pb-15 lg:pb-40"
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 md:ml-58 lg:ml-64 p-4 space-y-4 md:overflow-y-auto ">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/emergencycontact" element={<EmergencyContact />} />
          <Route path="/smarthome" element={<SmartHome />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </main>
    </div>
  );
}
