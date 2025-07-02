import SidebarLink from "./SidebarLink";
import { assets } from "../../../assets/assets";
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

function Sidebar() {
  return (
    <aside className="hidden md:block">
      <div className="bg-white rounded-2xl flex flex-col justify-between">
        {/* Top Section */}
        <div>
          {/* Logo Section */}
          {/* <div className="flex items-center gap-2 h-[90px] mb-5"> */}
            <img src={assets.logo} alt="Company Logo" className="p-4 pb-12" />
            {/* <h1 className="text-2xl text-blue font-semibold">Jermai</h1> */}
          {/* </div> */}

          <hr className="border-t border-very-light-gray my-6" />

          {/* Nav Links */}
          <nav className="flex flex-col space-y-2">
            <SidebarLink to="/" icon={FiHome} label="Home" />
            <SidebarLink to="/schedule" icon={FiCalendar} label="Schedule" />
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

          <div className="flex flex-col space-y-2 mt-12">
            <SidebarLink to="/settings" icon={FiSettings} label="Settings" />
            <SidebarLink to="/logout" icon={FiLogOut} label="Log Out" />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
