import { NavLink } from "react-router-dom";

// Reusable Sidebar Link Component
const SidebarLink = ({ to, icon: Icon, label }) => (
  <NavLink to={to}>
    {({ isActive }) => (
      <div
        className={`p-4 w-full flex items-center gap-4 group transition-colors duration-300 ease-in-out shadow-sm md:shadow-none rounded-md md:rounded-none ${
          isActive
            ? "text-blue font-medium bg-[#E6ECF9]"
            : "text-black font-medium md:font-normal md:text-gray-text hover:text-blue hover:bg-light-blue/10"
        }`}
      >
        <Icon
          className={`w-6 h-6 md:w-5 md:h-5 font-bold ${
            isActive ? "text-blue" : "text-black md:text-gray-text group-hover:text-blue"
          }`}
        />
        <p>{label}</p>
      </div>
    )}
  </NavLink>
);

export default SidebarLink;
