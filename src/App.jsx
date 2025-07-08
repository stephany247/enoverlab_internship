import { NavLink, Routes, Route } from "react-router-dom";
import { assets } from "./assets/assets";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Entertainment from "./pages/Entertainment";
import Logout from "./pages/Logout";
import Settings from "./pages/Settings";
import SmartHome from "./pages/SmartHome";
import EmergencyContact from "./pages/EmergencyContact";
import Header from "./components/ui/header/Header";
import Sidebar from "./components/ui/sidebar/Sidebar";
import 'leaflet/dist/leaflet.css';


// // Reusable Sidebar Link Component
// const SidebarLink = ({ to, icon: Icon, label }) => (
//   <NavLink to={to}>
//     {({ isActive }) => (
//       <div
//         className={`p-4 w-full flex items-center gap-4 ${
//           isActive
//             ? "text-[#013BC0] font-medium bg-[#E6ECF9]"
//             : "text-[#666666] hover:text-[#013BC0]"
//         }`}
//       >
//         <Icon
//           className={`w-5 h-5 ${
//             isActive ? "text-[#013BC0]" : "text-gray-[#666666]"
//           }`}
//         />
//         <p>{label}</p>
//       </div>
//     )}
//   </NavLink>
// );

export default function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 p-6">
      {/* Sidebar */}
      <Sidebar />

{/* >>>>>>> origin/main */}
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
  )}
