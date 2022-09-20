import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import CreatePost from '../components/Menu/HeaderMenus/CreatePost';
import SearchBar from '../components/Menu/HeaderMenus/SearchBar';
import Notifications from '../components/Menu/HeaderMenus/Notifications';
import menuIcon from '../assets/images/icons/menu.png';
import Direct from '../components/Menu/HeaderMenus/Direct';

function Header() {
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  };
  
  // const handleClose = () => {
  // };

  return (
    <Container id="header-layout" className="h-100">
      <Row>
        <Col id="header-layout_left" className="d-flex">
          <SearchBar />
          <CreatePost />
        </Col>
        <Col id="header-layout_right" className="d-flex">
          <Direct />
          <Notifications />
          <Button
            id="menu_forRightSidebar"
            // aria-controls={open ? 'menu_forRightSidebar' : undefined}
            // aria-haspopup="true"
            // aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <img src={menuIcon} width="16" height="16" alt="menu icon" />
          </Button>
        </Col>
        {/* direct */}
        {/* notifications */}
        {/* hamburger menu */}
      </Row>
    </Container>
  );
}

export default Header;
