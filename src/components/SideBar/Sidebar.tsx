import { FaChartPie } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import React from "react";
import "./SideBar.css";

const Sidebar = () => {
  return (
    <ul className="list">
      <li className="list-item">
        <NavLink to="/">
          <FaHome size={25} />
          <div>Home</div>
        </NavLink>
      </li>
      <li className="list-item">
        <NavLink to="/analytics">
          <FaChartPie size={25} />
          <div>Analytics</div>
        </NavLink>
      </li>
    </ul>
  );
};

export default Sidebar;
