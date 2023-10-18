import NavItems from "./NavItems";
import { App_Logo } from "../utils/constants";

const Header=()=>(
  <div className="header-div">
    <div className="logo">
        <img  className="logo-img" src={App_Logo}/>
    </div>
    <NavItems />
  </div>
);
export default Header;