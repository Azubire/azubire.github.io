import { MDBNavbarBrand } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <MDBNavbarBrand>
        <span className="logo-span fw-bold fs-4">
          Azubire <span className="text-info">Peter</span>
        </span>
      </MDBNavbarBrand>
    </Link>
  );
};

export default Logo;
