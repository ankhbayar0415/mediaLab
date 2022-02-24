import "../styles/Navigation.scss";
import logo from "../images/logo.png";
import searchIcon from "../images/searchIcon.png";
import Menu from "./Menu.js";

function Navigation() {
  return (
    <div className="navigation">
      <div className="navContainer">
        <img className="logo" src={logo} alt="medialab logo" />
        <div className="search">
          <img className="searchIcon" src={searchIcon} alt="search icon" />
          <span className="searchText">Search</span>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default Navigation;
