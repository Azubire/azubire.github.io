import { useState, useEffect } from "react";
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

  useEffect(() => {
    const getId = async (id) => {
      const project = await projectList.find((item) => item.id === id);
      setstate(() => project);
    };
    getId(projectId);
  }, [projectId, projectList]);

  return (
    <>
      <MDBContainer className="py-5 h-100">
        <MDBRow>
          <MDBCol
            md="6"
            sm="12"
            className="d-flex flex-column  text-center order-last"
          >
            <h1 className="display-4 fw-bold">{name}</h1>
            <p className="fs-6 text-center">{desc}</p>
            <div className="d-sm-flex my-5 justify-content-center align-content-center">
              <a
                // eslint-disable-next-line no-script-url
                href={siteUrl ? siteUrl : "javascript:void(0)"}
                target={siteUrl && "_blank"}
                rel="noopener noreferrer"
              >
                <MDBBtn
                  color="primary mx-2 mt-3"
                  disabled={!siteUrl && true}
                  className=" py-2"
                >
                  {siteUrl ? "View Project" : "Demo Not Online"}
                </MDBBtn>
              </a>
              <a
                // eslint-disable-next-line no-script-url
                href={github ? github : "javascript:void(0)"}
                target={github && "_blank"}
                rel="noopener noreferrer"
              >
                <MDBBtn
                  color="warning mx-2 mt-3"
                  disabled={!github && true}
                  className=" py-2"
                >
                  {github ? "View On Github" : "Private Repo-Github"}
                </MDBBtn>
              </a>
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
    </>
  );
};

export default ProjectDetails;
