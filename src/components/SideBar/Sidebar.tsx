import { FaHome } from "react-icons/fa";
import { TiDocumentAdd } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";

import { NavLink, Link } from "react-router-dom";
import "./SideBar.css";

const Sidebar = () => {
  return (
    <ul className="list">
      <li className="list-item">
        <NavLink to="/">
          <FaHome size={25} />
          <div>Dashboard</div>
        </NavLink>
      </li>
      <li className="list-item">
        <NavLink to="/add">
          <TiDocumentAdd size={25} />
          <div>Add Expense</div>
        </NavLink>
      </li>
      <li className="list-item">
        <NavLink to="/search">
          <FaSearch size={25} />
          <div>Search Expense</div>
        </NavLink>
      </li>
    </ul>
  );
};

export default Sidebar;
