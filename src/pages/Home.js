import { Row, Col, Container } from "react-bootstrap";
import Hero from "./Hero";
import svg1 from "../assets/img/dashboard.jpeg";
import svg2 from "../assets/img/amico.svg";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import starSvg from "../assets/img/home-shape.png";

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
                  <h1 className="hero-text text-left  fw-bold">Who am I?</h1>
                  <p>
                    {/* I am a self-motivated developer that is focused on building
                    working solutions. I am a fast learner and constantly
                    learning new technologies in the industry */}
                    {/* I am an enthusiastic developer with a self-motivated
                    approach to crafting working solutions. My ability to
                    quickly grasp new concepts allows me to stay at the
                    forefront of evolving industry technologies. */}
                    Passionate full-stack developer with a knack for crafting
                    elegant and efficient solutions. Drawn to the constant
                    evolution of technology and its power to impact lives.
                    Driven by the challenge of learning, collaborating, and
                    building something meaningful.
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
                    {/* With {new Date().getFullYear() - 2020}+ years of Experience
                    as a developer, I build interactive, maintainable,
                    predictable,scalable, and high performing web applications
                    with a wide range of tools. */}
                    {/* With a solid background of {new Date().getFullYear() - 2020}
                    + years in development, I am adept at creating web
                    applications that are interactive, maintainable,
                    predictable, scalable, and high-performing, employing a
                    variety of tools. */}
                    I help businesses achieve their goals by building
                    applications that users love. My expertise in building
                    intuitive interfaces, robust APIs, and optimizing
                    performance ensures a seamless user experience and increased
                    engagement. I'm a team player who thrives on collaborating
                    closely with clients to understand their needs and deliver
                    exceptional results.
                  </p>
                  <br />
                  <blockquote className="text-center">
                    "First, solve the problem. Then write the code."
                    <br />
                    <span className="text-danger">-John Johnson</span>
                  </blockquote>
                </Col>
                <Col className="col-md-6 col-12 hover-zoom">
                  <img
                    src={svg1}
                    alt="vector-img"
                    className="img-fluid rounded "
                  />
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
