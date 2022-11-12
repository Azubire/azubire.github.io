import { MDBNavbarBrand } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Logo = ({ show, hide }) => {
  const handleClick = () => {
    show && hide();
  };

  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <MDBNavbarBrand onClick={handleClick}>
        <span className="logo-span fw-bold fs-4">
          Azubire <span className="text-info">Peter</span>
        </span>
      </MDBNavbarBrand>
    </Link>
  );
};

export default Logo;
