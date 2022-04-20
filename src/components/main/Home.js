import { Row, Col, Container } from "react-bootstrap";
import Hero from "./Hero";
import svg1 from "../../assets/img/laptop.png";
import svg2 from "../../assets/img/amico.svg";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import starSvg from "../../assets/img/home-shape.png";

const Home = ({ projectList }) => {
  return (
    <>
      <Hero />
      <main>
        <Container fluid>
          {/* section 1 */}
          <section className="py-5">
            <Container>
              {/* section 1 */}
              <Row className="pt-5 " id="">
                <Col className="col-md-6 col-12 hover-zoom">
                  <img src={svg2} alt="vector-img" className="img-fluid" />
                </Col>
                <Col className="col-md-6 col-12 order-first order-md-last d-flex justify-content-center flex-column position-relative ">
                  <img
                    src={starSvg}
                    alt="star svg"
                    className="position-absolute w-100 rounded-circle"
                  />
                  <h1 className="hero-text text-left display-3 fw-bold">
                    Who am I?
                  </h1>
                  <p>
                    I am a self-motivated developer that is focused on creating
                    high-quality solutions to problems.
                  </p>
                  <br />
                  <blockquote className="text-center fst-italic">
                    "When I say I'ma do it? I'ma do it."
                    <br />
                    <span className="text-success">-Azubire Peter</span>
                  </blockquote>
                </Col>
              </Row>
              {/* section 2 */}
              <Row className="pt-5" id="">
                <Col className="col-md-6 col-12  d-flex justify-content-center flex-column position-relative">
                  <h1 className="hero-text text-left display-3 fw-bold">
                    What I do?
                  </h1>
                  <p>
                    With 2+ years of Experience as a developer, I build
                    interactive, maintainable, predictable,scalable, and high
                    performing web applications with a wide range of tools.
                  </p>
                  <br />
                  <blockquote className="text-center">
                    "First, solve the problem. Then write the code."
                    <br />
                    <span className="text-danger">-John Johnson</span>
                  </blockquote>
                </Col>
                <Col className="col-md-6 col-12 hover-zoom">
                  <img src={svg1} alt="vector-img" className="img-fluid" />
                </Col>
              </Row>
            </Container>
          </section>

          {/* scetion 2 */}
          <section id="skills" className="pb-5">
            <Skills />
          </section>

          {/* scetion 3 */}
          <section id="projects" className="pb-5">
            <Projects projects={projectList} />
          </section>

          {/* scetion 3 */}
          <section id="about" className="pb-5">
            <About />
          </section>
        </Container>
      </main>
    </>
  );
};

export default Home;
