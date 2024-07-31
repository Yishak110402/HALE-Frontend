import { NavLink } from "react-router-dom";
import "./Navbar.css"
import navLogo from "./../../assets/inverted-hale-logo.png";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={navLogo} alt="" />
      </div>
      <div className="nav-links">
        <NavLink>Home</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>What we do</NavLink>
        <NavLink>Contact Us</NavLink>
      </div>
    </nav>
  );
}
