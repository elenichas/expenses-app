import { FaHome } from "react-icons/fa";
import { TiDocumentAdd } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

import { NavLink,Link } from "react-router-dom";
import "./SideBar.css"

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
               <li className="list-item">
                <Link to="/">
                    <IoLogOut size={25} />
                    <div>Logout</div>
                </Link>
            </li>
        </ul>
    )
}

export default Sidebar