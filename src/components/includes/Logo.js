import { MDBNavbarBrand } from "mdb-react-ui-kit";


const Logo = () => {

    return (
      <MDBNavbarBrand href='#home'>
        <span className="logo-span fw-bold fs-4">
          Azubire <span className="text-danger">Peter</span>
        </span>
      </MDBNavbarBrand>
    );
} 

export default Logo;