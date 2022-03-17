import { Link } from "react-router-dom";
import "../styles/Navigation.scss";
import logo from "../images/logo.png";
import { ReactComponent as SearchIcon } from "../images/searchIcon.svg";
import Menu from "./Menu.jsx";

function Navigation() {
  return (
    <div className="navigation">
      <div className="navContainer">
        <Link to="/mainpage">
          <img className="logo" src={logo} alt="medialab logo" />
        </Link>
        <div className="search">
          <SearchIcon className="icon" />
          <span className="searchText">Search</span>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default Navigation;
