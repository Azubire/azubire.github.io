import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaHandPointRight,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import profile from "../../assets/img/azubire.jpg";

const About = () => {
  return (
    <Container>
      <Row>
        <Col className="col-md-4 col-12 text-center">
          <h1 className="">About Me</h1>
          <p>Know who I am</p>
        </Col>
      </Row>
      <Row>
        <Col className="col-md-4 d-flex justify-content-center align-items-center">
          <Card className="border-0 shadow-none w-100 bg-d">
            <img
              src={profile}
              alt=""
              className="card-img border-bottom border-primary border-3"
            />
            <Card.Body>
              <Card.Text className="text-dark text-center">
                I'm a Google Enthusiast!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-md-8 col-12 pt-5 pt-md-0">
          <h1>Bio</h1>
          <p>
            Hey <span className="span-texts">everyone! &#x1F44B;</span>
            <br />
            I am Azubire Peter from Bolgatanga, Ghana.
            <br />I am currently a 3rd year Computer Science student of
            <a
              href="https://ktu.edu.gh"
              rel="noreferrer"
              target={"_blank"}
              className="text-decoration-none"
            >
              Koforidua Technical University
            </a>
            at Koforidua, Ghana. I've always loved programming but never took
            the step to do it until 3 years ago when I decided to start a career
            as a developer. I've since been an enthusiast to web development, I
            am constantly learning and improving on my current skill set,
            getting my hands on new technologies.
          </p>
          <p>
            Aside coding, i like to spend my time playing video games, watching
            movies and football.
          </p>
          <p className="d-inline">
            Lets connect : <FaHandPointRight size={20} />
          </p>
          <a
            className="mx-3"
            href="https://github.com/Azubire"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub size={25} />
          </a>
          <a
            className="mx-3"
            href="https://www.linkedin.com/in/peter-azubire"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin size={25} />
          </a>
          <a
            className="mx-3"
            href="https://twitter.com/p_azubire"
            rel="noreferrer"
            target="_blank"
          >
            <FaTwitter size={25} />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
