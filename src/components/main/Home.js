import {Row, Col, Container } from 'react-bootstrap';
import Hero from './Hero';
import svg1 from '../../assets/img/time.png';
import svg2 from '../../assets/img/hero.png';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import starSvg from '../../assets/img/home-shape.png';

const Home = ({ projectList }) => {
  return (
    <>
      <Hero />
      <main>
        <Container fluid className={``}>
          {/* section 1 */}
          <section className="py-5">
            <Container>
              {/* section 1 */}
              <Row className="pt-5 " id="">
                <Col className="col-md-6 col-12 d-flex justify-content-center flex-column position-relative ">
                  <img
                    src={starSvg}
                    alt="star svg"
                    className="position-absolute w-100 rounded-circle "
                  />
                  <h1 className="hero-text text-left">What I do?</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident assumenda neque eius molestiae blanditiis quas
                    sequi sunt omnis autem officiis fugit, id officia
                    consequatur numquam
                  </p>
                  <br />
                  <blockquote className="text-center">
                    Most of y'all are wyling, you are not to be tamed
                  </blockquote>
                </Col>
                <Col className="col-md-6 col-12">
                  <img src={svg2} alt="vector-img" className="img-fluid" />
                </Col>
              </Row>
              {/* section 2 */}
              <Row className="pt-5" id="">
                <Col className="col-md-6 col-12">
                  <img src={svg1} alt="vector-img" className="img-fluid" />
                </Col>
                <Col className="col-md-6 col-12 order-first order-md-last d-flex justify-content-center flex-column position-relative">
                  {/* <div className="w-50 position-absolute h-50 top-0 rounded-circle bg-secondary"></div> */}
                  <h1 className="hero-text text-left">What I do?</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident assumenda neque eius molestiae blanditiis quas
                    sequi sunt omnis autem officiis fugit, id officia
                    consequatur numquam
                  </p>
                  <br />
                  <blockquote className="text-center">
                    This one is not your type@ of shit
                  </blockquote>
                </Col>
              </Row>
            </Container>
          </section>

          {/* scetion 2 */}
          <section id="skills" className="py-5">
            <Skills />
          </section>

          {/* scetion 3 */}
          <section id="projects" className="py-5">
            <Projects projects={projectList} />
          </section>

          {/* scetion 3 */}
          <section id="about" className="py-5">
            <About />
          </section>
        </Container>
      </main>
    </>
  );
};

export default Home;