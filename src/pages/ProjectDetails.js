import { useState, useEffect, useLayoutEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBBtn } from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";

const ProjectDetails = ({ projectList }) => {
  const [state, setstate] = useState({
    name: "",
    desc: "",
    img: "",
    stack: [{ icon: "", name: "" }],
    address: "",
  });
  const url = useParams();
  const projectId = parseInt(url.id);
  const { name, desc, img, stack, siteUrl, github } = state;
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  useEffect(() => {
    const getId = async (id) => {
      const project = await projectList.find((item) => item.id === id);
      setstate(() => project);
    };
    getId(projectId);
  }, [projectId, projectList]);

  return (
    <MDBContainer className="py-5">
      <MDBRow>
        <MDBCol
          md="6"
          sm="12"
          className="d-flex flex-column  text-center order-last"
        >
          <h1 className="display-4 fw-bold">{name}</h1>
          <p className="fs-6 text-center">{desc}</p>
          <div className="d-sm-flex my-5 justify-content-center align-content-center">
            {siteUrl ? (
              <a href={siteUrl} target={"_blank"} rel="noopener noreferrer">
                <MDBBtn color="primary mx-2 mt-3" className=" py-2">
                  Visit website
                </MDBBtn>
              </a>
            ) : (
              <MDBBtn
                color="primary mx-2 mt-3"
                disabled={true}
                className=" py-2"
              >
                Demo Not Online
              </MDBBtn>
            )}

            {github ? (
              <a href={github} target={"_blank"} rel="noopener noreferrer">
                <MDBBtn color="success mx-2 mt-3" className=" py-2">
                  View on github
                </MDBBtn>
              </a>
            ) : (
              <MDBBtn
                color="danger mx-2 mt-3"
                disabled={true}
                className=" py-2"
              >
                Private Github Repo
              </MDBBtn>
            )}
          </div>
        </MDBCol>
        <MDBCol className="hover-zoom">
          <img src={img} alt={name} height="290" className="fit w-100" />
        </MDBCol>
      </MDBRow>

      <MDBRow className="justify-content-center">
        <h1 className="text-center py-4">
          <span className="hero-text text-danger">Technologies</span> Used
        </h1>
        {stack.map((item, index) => {
          const { icon, name } = item;
          return (
            <MDBCol
              key={index}
              className="col-md-2 col-3 d-flex flex-column justify-content-center align-items-center align-content-center"
            >
              {icon}
              <p className="m-0">{name}</p>
            </MDBCol>
          );
        })}
      </MDBRow>
    </MDBContainer>
  );
};

export default ProjectDetails;
