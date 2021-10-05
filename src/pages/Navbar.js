import { NavLink } from "react-router-dom";

export default function Navbar (props) {
    
    return (
        <ul>
            <li>
                <NavLink exact activeClassName="active" className="pepe" to="/about">About</NavLink>
            </li>
            <li>
                <NavLink exact to="/profile/carlos/M">Profile</NavLink>
            </li>
            <li>
                <NavLink exact to="/categories">Categories</NavLink>
            </li>
            <li>
                <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
                <NavLink exact to="/counter">Counter Redux</NavLink>
            </li>
            <li>
                <NavLink exact to="/users">Users Redux</NavLink>
            </li>
        </ul>
    )
;}