import { NavLink, Routes, Route } from "react-router-dom";
import { assets } from "./assets/assets";
import Home from "./components/Home";
import Schedule from "./components/Schedule";
import Entertainment from "./components/Entertainment";
import Logout from "./components/Logout";
import Settings from "./components/Settings";
import SmartHome from "./components/SmartHome";
import EmergencyContact from "./components/EmergencyContact";

// Reusable Sidebar Link Component
const SidebarLink = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      isActive
        ? "p-4 w-full text-[#013BC0] font-semibold bg-[#C7D4F1] rounded-md"
        : "p-4 w-full text-gray-600 hover:text-blue-600 rounded-md"
    }
  >
    <div className="flex items-center gap-4">
      <img src={icon} alt={`${label} icon`} className="w-5 h-5" />
      <p>{label}</p>
    </div>
  </NavLink>
);

export default function App() {
  return (
    <div className="min-h-screen   grid grid-cols-1 lg:grid-cols-[300px_1fr] bg-[#EAEEF0] p-10">
      {/* Sidebar */}
      <aside className="hidden lg:block" >
        <div className="w-[287px] fixed bg-white h-[814px] rounded-[16px] p-5 flex flex-col justify-between">
          {/* Top Section */}
          <div>
            {/* Logo Section */}
            <div className="flex items-center gap-2 h-[30px] mb-6">
              <img
                src={assets.logo}
                alt="Company Logo"
                className="w-[28px] h-[25px]"
              />
              <h1 className="text-[25px] text-[#013BC0] font-[600]">Jermai</h1>
            </div>

            <hr className="border-t border-[#E5E5E5] mb-4" />

            {/* Nav Links */}
            <nav className="flex flex-col space-y-2">
              <SidebarLink to="/home" icon={assets.homeIcon} label="Home" />
              <SidebarLink
                to="/schedule"
                icon={assets.scheduleIcon}
                label="Schedule"
              />
              <SidebarLink
                to="/emergencycontact"
                icon={assets.phoneIcon}
                label="Emergency Contact"
              />
              <SidebarLink
                to="/smarthome"
                icon={assets.smartphone}
                label="Smart Home"
              />
              <SidebarLink
                to="/entertainment"
                icon={assets.musicIcon}
                label="Entertainment"
              />
            </nav>

            {/* Bottom Section */}

            <div className="flex flex-col space-y-2 mt-20">
              <SidebarLink
                to="/settings"
                icon={assets.settingsIcon}
                label="Settings"
              />
              <SidebarLink
                to="/logout"
                icon={assets.logoutIcon}
                label="Log Out"
              />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="text-black ml-4  w-full  rounded-md">
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
