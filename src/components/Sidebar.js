import React from "react";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaHubspot, FaTools, FaSatelliteDish, FaUser } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, route: "/" },
    { name: "Hub List", icon: <FaHubspot />, route: "/hub-list" },
    { name: "Service Request", icon: <FaTools />, route: "/service-request" },
    { name: "Device Controller", icon: <FaSatelliteDish />, route: "/device-controller" },
    { name: "User Detail", icon: <FaUser />, route: "/user-detail" },
  ];

  return (
    <div className="sidebar">
      <div className="logo-section">
        <h1 className="logo-title">QK Wash</h1>
        <p className="logo-subtitle">Modern Admin Dashboard</p>
      </div>
      <div className="menu-section">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.route}
            className="menu-item"
            activeClassName="active"
          >
            <span className="menu-icon">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
