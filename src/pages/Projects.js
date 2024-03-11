import { Link } from "react-router-dom";
import { Container, Card, CardImg, Button, Stack } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { FaChevronRight } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/a11y";

//TODO: update project lists

const Projects = ({ projects }) => {
  return (
    <Container>
      {/* <Row> */}
      <h1 className="text-center py-5">Some Projects</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        navigation
        autoplay
        // pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
        }}
        preventClicks
      >
        {projects.map((project) => {
          const { id, name, coverImg } = project;

          return (
            <SwiperSlide>
              {/* <Col key={id} className="col-lg-6 col-md-6 col-12 g-1 h-100"> */}
              <Card className=" ">
                <CardHeader className={`text-center bg-secondary text-light`}>
                  {name}
                </CardHeader>
                {/* <Link to={`/project-details/${id}`} className="nav-link h-100"> */}
                <CardImg
                  src={coverImg}
                  width="100%"
                  height="290"
                  alt={name}
                  className=" fit img-project py-3"
                ></CardImg>
                {/* </Link> */}
                <Card.Body className="row justify-content-center align-items-center">
                  <Link to={`/project-details/${id}`} className="text-center">
                    <Button variant={`text-center bg-dark `}>
                      <Stack
                        direction="horizontal"
                        className="align-items-center justify-content-center"
                      >
                        <p className="m-0 p-0 text-capitalize text-light">
                          View Details
                        </p>

                        <FaChevronRight className="ms-3" color="white" />
                      </Stack>
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
              {/* </Col> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* </Row> */}
    </Container>
  );
};

export default Projects;
