import { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaGithub,
  FaHandPointRight,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
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
            Hey <span className="span-texts">everyone ! &#x1F44B;</span>
            <br /> I am Azubire Peter. A Full Stack Developer Living in Bolga,
            Ghana. I've always loved programming but never took a step to persue
            it until {new Date().getFullYear() - 2019} years ago, I decided to
            start a career as a software developer. I've since been an
            enthusiast to Software Development | Web Development. I am
            constantly learning and improving on my current skill set, getting
            my hands on new and evolving trends and technologies.
          </p>
          <p>
            Aside writing coding, I love to spend my time playing video games,
            watching movies, football and listening to good music.
          </p>
          <p className="d-inline">
            Lets connect : <FaHandPointRight className="danger" size={20} />
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
