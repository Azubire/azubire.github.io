import { Offcanvas,OffcanvasHeader,OffcanvasBody,OffcanvasTitle,Button } from "react-bootstrap";
import { useState } from "react";
import NavElement from "./NavElement";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";

const SideNav = ({showSideNav,handleClose,isDarkMode}) => {
   
    return (
      <>
        <Offcanvas
          show={showSideNav}
          onHide={handleClose}
          id="offcanvasNavBar"
          aria-labelledby="offcanvasNavBarLabel"
          placement="start"
          className={isDarkMode ? "bg-dark text-white" : "bg-light text-dark"}
        >
          <OffcanvasHeader>
            <OffcanvasTitle id="offcanvasNavBarLabel" className="text-white">
              <Logo />
            </OffcanvasTitle>
            <FaTimes onClick={handleClose} size={20} className="pointer" />
          </OffcanvasHeader>
          <OffcanvasBody>
            <NavElement
              className={isDarkMode ? "text-white" : "text-dark"}
              showIcon={true}
              hide={handleClose}
              show={showSideNav}
            />
            <Button variant="outline-secondary" className="ms-3 mt-3">
              Resume
            </Button>
          </OffcanvasBody>
        </Offcanvas>
      </>
    );
}

export default SideNav;