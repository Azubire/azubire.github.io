import { Col, Row, Container } from "react-bootstrap";
import social from "../assets/img/about.png";

const Hero = (params) => {
  return (
    <Container fluid c id="home">
      <Container>
        <Row>
          <Col className=" col-12 col-md-7 pt-5 d-flex justify-content-center align-items-center">
            <h3 className="hero-text text-sm-start py-sm-0 py-3 text-center ">
              <div className="pb-3">
                Hello{" "}
                <span className=" span-text text-info ">there! &#x1F44B;</span>
              </div>
              I'm Peter Azubire, a{" "}
              <span className="span-text text-info">Full Stack Developer</span>{" "}
              with a passion for building user-friendly applications.
              <br />
              <div className="pt-3 text  ">
                I'm always looking for new challenges and opportunities to
                collaborate.
                <br />
              </div>
              <div className="span-text-greeth text-warning pt-3 font-italic">
                Let's connect! &#x1F60E;
              </div>
            </h3>
          </Col>
          <Col className=" col-12 col-md-5 pt-5 hover-zoom">
            <img className="img-fluid" src={social} alt="hero-svg" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Hero;
