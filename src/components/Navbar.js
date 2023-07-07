import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/country/India/UP">Country</NavLink>
      <NavLink to="/404">404</NavLink>
    </div>
  );
}

export default Navbar;
