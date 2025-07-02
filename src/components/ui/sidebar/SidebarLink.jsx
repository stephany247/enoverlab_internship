import { NavLink } from "react-router-dom";

// Reusable Sidebar Link Component
const SidebarLink = ({ to, icon: Icon, label }) => (
  <NavLink to={to}>
    {({ isActive }) => (
      <div
        className={`p-4 w-full flex items-center gap-4 group transition-colors duration-300 ease-in-out ${
          isActive
            ? "text-blue font-medium bg-soft-blue"
            : "text-gray-text hover:text-blue"
        }`}
      >
        <Icon
          className={`w-5 h-5 ${
            isActive ? "text-blue" : "text-gray-text group-hover:text-blue"
          }`}
        />
        <p>{label}</p>
      </div>
    )}
  </NavLink>
);

export default SidebarLink;
