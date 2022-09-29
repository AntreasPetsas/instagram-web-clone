import React from "react";
import Button from "react-bootstrap/Button";
import CreatePost from "../components/Menu/HeaderMenus/CreatePost";
import SearchBar from "../components/Menu/HeaderMenus/SearchBar";
import Notifications from "../components/Menu/HeaderMenus/Notifications";
import menuIcon from "../assets/images/icons/menu.png";
import Direct from "../components/Menu/HeaderMenus/Direct";
import "../assets/sass/layouts/header.scss";

function Header() {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {};

  // const handleClose = () => {
  // };

  return (
    <div id="header-layout" className="h-100">
      <div className="inner">
        <div id="header-layout_left" className="d-flex">
          <SearchBar />
          <CreatePost />
        </div>
        <div id="header-layout_right" className="d-flex">
          <Direct />
          <Notifications />
          <Button
            // aria-controls={open ? 'menu_forRightSidebar' : undefined}
            // aria-haspopup="true"
            // aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <img src={menuIcon} width="16" height="16" alt="menu icon" />
          </Button>
        </div>
        {/* direct */}
        {/* notifications */}
        {/* hamburger menu */}
      </div>
    </div>
  );
}

export default Header;
