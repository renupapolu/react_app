import { Link } from "react-router-dom";
const NavItems=()=>(
  <div className="nav-items">
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
    </ul>
  </div>
);
export default NavItems;