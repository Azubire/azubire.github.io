import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

function DownloadBtn() {
  return (
    <Link target={"_blank"} to="/my-cv">
      <MDBBtn color="primary" className="ms-3">
        Download CV
      </MDBBtn>
    </Link>
  );
}

export default DownloadBtn;
