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
            Hey <span className="span-texts">there ! &#x1F44B;</span>
            <br /> I'm Azubire Peter, a Full Stack Developer residing in Ghana
            &#127468;&#127469;. My journey into the world of programming has
            been an exciting one, fueled by a passion that has been with me for
            years. It wasn't until {new Date().getFullYear() - 2019} years ago
            that I made the bold decision to turn that passion into a
            profession, venturing into the dynamic realms of Software
            Development and Web Development.
          </p>
          <p>
            Throughout this journey, I've been committed to honing my skills,
            pushing boundaries, and staying at the forefront of new trends and
            technologies. The ever-evolving landscape of software development
            keeps me on my toes, and I thrive on the challenges it brings.
          </p>
          <p>
            Beyond the lines of code, you'll find me immersed in a world of
            diverse interests. Whether I'm navigating virtual landscapes in
            video games, exploring the cinematic realm through movies, cheering
            on my favorite football teams, or letting good music transport me to
            another dimension, I believe in a holistic approach to life that
            complements the precision of coding with the richness of
            experiences.
          </p>
          <p className="d-inline">
            I'm excited about the endless possibilities in the world of
            technology and look forward to contributing my skills and creativity
            to innovative projects. Let's connect and explore the exciting
            intersections of technology and creativity together! :{" "}
            <FaHandPointRight size={20} />
          </p>
          <a
            className="mx-3"
            href="https://github.com/Azubire"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub size={20} />
          </a>
          <a href="mailto:azubirepeter@gmail.com">
            <SiGmail size={20} />
          </a>
          <a
            className="mx-3"
            href="https://www.linkedin.com/in/peter-azubire-1a3b1b229"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://twitter.com/p_azubire"
            rel="noreferrer"
            target="_blank"
          >
            <FaTwitter size={20} />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
