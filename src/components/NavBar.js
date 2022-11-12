import { useState } from "react";
import {
  Container,
  FormCheck,
  Nav,
  Navbar,
  ToggleButton,
} from "react-bootstrap";
import SideNav from "./SideNav";
import NavElement from "./NavElement";
import { FaBars, FaSun } from "react-icons/fa";
import { MDBBtn } from "mdb-react-ui-kit";
import Logo from "./Logo";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
import DownloadBtn from "./DownloadBtn";

const NavBar = ({ setIsDarkMode, isDarkMode }) => {
  const [showSideNav, setShowSideNav] = useState(false);

  const handleShow = () => {
    setShowSideNav(true);
  };
  const handleClose = () => {
    setShowSideNav(false);
  };

  const toggleTheme = (e) => {
    // const checked = e.target.checked;
    !isDarkMode
      ? setIsDarkMode(() => {
          localStorage.setItem("isDarkMode", true);
          return true;
        })
      : setIsDarkMode(() => {
          localStorage.setItem("isDarkMode", false);
          return false;
        });
  };

  return (
    <Container>
      <Navbar
        bg={isDarkMode ? "dark" : "light"}
        variant={isDarkMode ? "dark" : "light"}
        expand="sm"
        className="justify-content-between shadow-none"
      >
        <Logo />
        <div className="d-flex justify-content-center align-content-center ">
          <FaSun
            onClick={toggleTheme}
            size={24}
            className={`${!isDarkMode && "text-dark"} pointer`}
          />
        </div>
        <Nav className="d-none d-sm-flex">
          <NavElement />
          <DownloadBtn />
        </Nav>
        <FaBars onClick={handleShow} className="pointer d-block d-sm-none" />
        <SideNav
          showSideNav={showSideNav}
          handleClose={handleClose}
          isDarkMode={isDarkMode}
        />
      </Navbar>
    </Container>
  );
};

export default NavBar;
