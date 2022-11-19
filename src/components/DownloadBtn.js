import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import cv from "../assets/cv/cv.pdf";

function DownloadBtn() {
  return (
    <a download="azubire_peter_resume.pdf" href={cv}>
      <MDBBtn color="primary" className="ms-3">
        Download CV
      </MDBBtn>
    </a>
  );
}

export default DownloadBtn;
