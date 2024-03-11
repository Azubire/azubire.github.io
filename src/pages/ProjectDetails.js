import { useState, useEffect, useLayoutEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBBtn } from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/a11y";

const ProjectDetails = ({ projectList }) => {
  const [state, setstate] = useState({
    name: "",
    desc: "",
    img: "",
    stack: [{ icon: "", name: "" }],
    address: "",
  });
  const { id } = useParams();
  const projectId = parseInt(id);
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  useEffect(() => {
    const getProject = async (id) => {
      const project = await projectList.find((item) => item.id === id);
      setstate(() => project);
    };
    getProject(projectId);
  }, [projectId, projectList]);

  const { name, desc, images, stack, siteUrl, github } = state;

  return (
    <MDBContainer className="py-5">
      <MDBRow className="justify-content-center align-items-center">
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
                <MDBBtn
                  color="primary mx-2 mt-3"
                  className=" py-2 text-capitalize"
                >
                  Visit website
                </MDBBtn>
              </a>
            ) : (
              <MDBBtn
                color="primary mx-2 mt-3"
                disabled={true}
                className=" py-2 text-capitalize"
              >
                {id == 8 || id == 9
                  ? "Awaiting official launch 🚀"
                  : "Demo not online"}
              </MDBBtn>
            )}

            {github ? (
              <a href={github} target={"_blank"} rel="noopener noreferrer">
                <MDBBtn
                  color="success mx-2 mt-3"
                  className=" py-2 text-capitalize"
                >
                  View on github
                </MDBBtn>
              </a>
            ) : (
              <MDBBtn
                color="danger mx-2 mt-3"
                disabled={true}
                className=" py-2 text-capitalize"
              >
                Private Github Repo
              </MDBBtn>
            )}
          </div>
        </MDBCol>
        <MDBCol md="6" sm="12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            navigation
            autoplay
            // spaceBetween={50}
            slidesPerView={1}
            // thumbs={{
            //   swiper:
            //     thumbsSwiper && !thumbsSwiper?.destroyed ? thumbsSwiper : null,
            // }}
          >
            {images?.map((img, index) => (
              <SwiperSlide>
                <img
                  src={img}
                  alt={name}
                  height="290"
                  className="fit w-100 py-3 hover-zoom"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </MDBCol>
      </MDBRow>

      <MDBRow className="justify-content-center">
        <h1 className="text-center py-4">
          <span className="hero-text text-danger">Technologies</span> Used
        </h1>
        {stack?.map((item, index) => {
          const { icon, name } = item;
          return (
            <MDBCol
              key={index}
              className="col-md-2 col-3 d-flex flex-column justify-content-center align-items-center align-content-center mb-3"
            >
              {icon}
              <p className="m-0 text-center">{name}</p>
            </MDBCol>
          );
        })}
      </MDBRow>
    </MDBContainer>
  );
};

export default ProjectDetails;
