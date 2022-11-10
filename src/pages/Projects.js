import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  Button,
  Stack,
} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/a11y";
import { FaChevronRight, FaEye } from "react-icons/fa";

const Projects = ({ projects }) => {
  return (
    <Container fluid>
      {/* <Row> */}
      <h1 className="text-center py-5">Recent Projects</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        navigation={{ disabledClass: "d-none" }}
        autoplay={{ delay: 7000 }}
        // pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={50}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
        }}
        preventClicks
      >
        {projects.map((project) => {
          const { id, name, color, img, stack } = project;

          return (
            <SwiperSlide>
              {/* <Col key={id} className="col-lg-6 col-md-6 col-12 g-1 h-100"> */}
              <Card className="">
                <CardHeader className={`text-center bg-secondary text-light`}>
                  {name}
                </CardHeader>
                <Link to={`/project-details/${id}`} className="nav-link h-100">
                  <CardImg
                    src={img}
                    width="100%"
                    alt={name}
                    className="img-project py-3"
                  ></CardImg>
                </Link>
                <Card.Body className="row justify-content-center align-items-center">
                  <Link to={`/project-details/${id}`} className="text-center">
                    <Button variant={`text-center bg-info `}>
                      <Stack
                        direction="horizontal"
                        className="align-items-center justify-content-center"
                      >
                        <p className="m-0 p-0 text-capitalize">View Details</p>

                        <FaChevronRight className="ms-3" />
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
