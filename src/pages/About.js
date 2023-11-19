import { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaGithub,
  FaHandPointRight,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import profile from "../assets/img/azubire.jpg";

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(null);
  const darkMode = localStorage.getItem("isDarkMode");

  useEffect(() => {
    setIsDarkMode((prev) => {
      if (darkMode === "true") return true;
      if (darkMode === "false") return false;
    });
  }, [darkMode]);

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
              alt="profile"
              className="card-img border-bottom border-primary border-3"
            />
            <Card.Body className={!isDarkMode && "bg-dark"}>
              <Card.Text
                className={`${
                  isDarkMode ? "text-dark" : "text-white"
                } text-center text-uppercase`}
              >
                I do it when I say yes!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-md-8 col-12 pt-5 pt-md-0">
          <h1>Bio</h1>
          <p>
            Greetings <span className="span-texts">everyone ! &#x1F44B;</span>
            <br /> I'm Azubire Peter, a Full Stack Developer residing in Ghana
            &#127468;&#127469;. My passion for programming has been a
            long-standing interest, but it wasn't until{" "}
            {new Date().getFullYear() - 2019} years ago that I decided to take
            the plunge into a career in software development. Since then, I've
            been dedicated to the fields of Software Development and Web
            Development, consistently enhancing my skills and staying abreast of
            new trends and technologies.
          </p>
          <p></p>
          <p>
            Beyond coding, I enjoy spending my time indulging in video games,
            watching movies, following football, and immersing myself in good
            music.
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
          <a href="mailto:azubirepeter@gmail.com">
            <SiGmail size={25} />
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
