import { FaHome } from "react-icons/fa";
import { TiDocumentAdd } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import "./SideBar.css"

const Sidebar = () => {
    return (
        <ul className="list">
            <li className="list-item">
                <NavLink to="/">
                <FaHome size={25}/> 
                <div>Dashboard</div>
                </NavLink>
            </li>
               <li className="list-item">
                <NavLink to="/add">
                <TiDocumentAdd  size={25}/> 
                <div>Add Expense</div>
                </NavLink>
            </li>
        </ul>
    )
}

export default Sidebar