import { NavLink } from "react-router-dom";
import "./Navbar.css"
import navLogo from "./../../assets/hale-logo.png";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={navLogo} alt="" />
      </div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/what-we-do">What we do</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>
    </nav>
  );
}
