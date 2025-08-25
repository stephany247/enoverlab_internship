import React from "react";
import SidebarLink from "../components/ui/sidebar/SidebarLink";
import {
  FiHome,
  FiCalendar,
  FiPhone,
  FiMonitor,
  FiMusic,
  FiSettings,
  FiLogOut,
  FiSmartphone,
  FiArchive
} from "react-icons/fi";
import { RiArrowGoBackFill } from "react-icons/ri";
// import { FiArchive } from "react-icons/fi";

function Explore() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <a href="/">
          <RiArrowGoBackFill  className="size-6" />
        </a>
        <h1 className="text-blue text-2xl font-semibold">Explore</h1>
        <span></span>
      </div>
      <nav className="flex flex-col gap-4 p-2  mt-6">
        <SidebarLink to="/schedule" icon={FiCalendar} label="Schedule" />
        <SidebarLink
          to="/emergencycontact"
          icon={FiPhone}
          label="Emergency Contact"
        />
        <SidebarLink to="/smarthome" icon={FiSmartphone} label="Smart Home" />
        <SidebarLink to="/entertainment" icon={FiMusic} label="Entertainment" />
        <SidebarLink to="/settings" icon={FiArchive} label="Subscription" />
      </nav>
    </div>
  );
}

export default Explore;
