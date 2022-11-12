import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  OffcanvasTitle,
  Button,
} from "react-bootstrap";
import NavElement from "./NavElement";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import DownloadBtn from "./DownloadBtn";

const SideNav = ({ showSideNav, handleClose, isDarkMode }) => {
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
            <Logo hide={handleClose} show={showSideNav} />
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
          <DownloadBtn />
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};

export default SideNav;
