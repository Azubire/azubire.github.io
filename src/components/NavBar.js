import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import SideNav from "./SideNav";
import NavElement from "./NavElement";
import { FaBars, FaSun } from "react-icons/fa";
import Logo from "./Logo";
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

        <div className="d-flex">
          <Nav className="d-none d-lg-flex justify-content-center align-content-center ">
            <NavElement />
            <DownloadBtn />
          </Nav>
          <div className="d-flex ms-5 justify-self-end">
            <FaSun
              onClick={toggleTheme}
              size={20}
              className={`${!isDarkMode && "text-dark"} pointer  my-auto ml-5`}
            />
          </div>
        </div>
        <FaBars
          onClick={handleShow}
          size={20}
          className="pointer d-block d-lg-none"
        />
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
