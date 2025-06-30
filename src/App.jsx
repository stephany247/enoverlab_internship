import { NavLink, Routes, Route } from "react-router-dom";
import { assets } from "./assets/assets";
import Home from "./components/Home";
import Schedule from "./components/Schedule";
import Entertainment from "./components/Entertainment";
import Logout from "./components/Logout";
import Settings from "./components/Settings";
import SmartHome from "./components/SmartHome";
import EmergencyContact from "./components/EmergencyContact";
import {
  FiHome,
  FiCalendar,
  FiPhone,
  FiMonitor,
  FiMusic,
  FiSettings,
  FiLogOut,
  FiSmartphone

} from "react-icons/fi";

// Reusable Sidebar Link Component
const SidebarLink = ({ to, icon: Icon, label }) => (
  <NavLink to={to}>
    {({ isActive }) => (
      <div
        className={`p-4 w-full flex items-center gap-4 ${
          isActive
            ? "text-[#013BC0] font-medium bg-[#E6ECF9]"
            : "text-[#666666] hover:text-[#013BC0]"
        }`}
      >
        <Icon
          className={`w-5 h-5 ${
            isActive ? "text-[#013BC0]" : "text-gray-[#666666]"
          }`}
        />
        <p>{label}</p>
      </div>
    )}
  </NavLink>
);


export default function App() {
  return (
    <div className="min-h-screen   grid grid-cols-1 lg:grid-cols-[300px_1fr] bg-[#EAEEF0] p-10">
      {/* Sidebar */}
      <aside className="hidden lg:block">
        <div className="w-[287px] fixed bg-white h-[814px] rounded-[16px]  flex flex-col justify-between">
          {/* Top Section */}
          <div>
            {/* Logo Section */}
            <div className="flex items-center gap-2 h-[90px] mb-6 p-5">
              <img
                src={assets.logo}
                alt="Company Logo"
                className="w-[28px] h-[25px]"
              />
              <h1 className="text-[25px] text-[#013BC0] font-[600]">Jermai</h1>
            </div>

            <hr className="border-t border-[#E5E5E5] mb-8" />

            {/* Nav Links */}
            <nav className="flex flex-col space-y-2">
              <SidebarLink to="/home" icon={FiHome} label="Home" />
              <SidebarLink
                to="/schedule"
                icon={FiCalendar}
                label="Schedule"
              />
              <SidebarLink
                to="/emergencycontact"
                icon={FiPhone}
                label="Emergency Contact"
              />
              <SidebarLink
                to="/smarthome"
                icon={FiSmartphone}
                label="Smart Home"
              />
              <SidebarLink
                to="/entertainment"
                icon={FiMusic}
                label="Entertainment"
              />
            </nav>

            {/* Bottom Section */}

            <div className="flex flex-col space-y-2 mt-20">
              <SidebarLink
                to="/settings"
                icon={FiSettings}
                label="Settings"
              />
              <SidebarLink
                to="/logout"
                icon={FiLogOut}
                label="Log Out"
              />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="text-black ml-4   rounded-md">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/emergencycontact" element={<EmergencyContact />} />
          <Route path="/smarthome" element={<SmartHome />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/Logout" element={<Logout />} />
        </Routes>
      </main>
    </div>
  );
}
