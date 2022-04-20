import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import bg from "../../assets/img/bg2.png";

import {
  FaJs,
  FaLaravel,
  FaNode,
  FaNpm,
  FaReact,
  FaPhp,
  FaGithub,
  FaGit,
  FaBootstrap,
  FaNodeJs,
  FaHtml5,
  FaJava,
  FaCss3Alt,
  FaSass,
} from "react-icons/fa";

import { DiJqueryLogo } from "react-icons/di";
import {
  SiMongodb,
  SiAdobexd,
  SiMysql,
  SiVisualstudiocode,
} from "react-icons/si";

const mySkills = [
  {
    name: "java",
    i: <FaJava size={50} className="text-primary" />,
  },
  {
    name: "javScript",
    i: <FaJs size={50} className="text-primary" />,
  },

  {
    name: "c++",
    i: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        style={{ fill: "#0d6efd" }}
      >
        <path d="M 25 2 C 24.285156 2 23.574219 2.179688 22.933594 2.539063 L 6.089844 12.003906 C 4.808594 12.726563 4 14.074219 4 15.535156 L 4 34.464844 C 4 35.929688 4.808594 37.277344 6.089844 38 L 22.933594 47.460938 C 24.214844 48.183594 25.785156 48.183594 27.066406 47.460938 L 43.910156 38 C 45.195313 37.277344 46 35.925781 46 34.464844 L 46 15.535156 C 46 14.074219 45.191406 12.726563 43.910156 12.003906 L 27.066406 2.539063 C 26.425781 2.179688 25.714844 2 25 2 Z M 25 4 C 25.375 4 25.753906 4.09375 26.089844 4.28125 L 42.933594 13.746094 C 43.601563 14.125 44 14.804688 44 15.535156 L 44 24 L 42 24 L 42 22 L 40 22 L 40 24 L 38 24 L 38 26 L 40 26 L 40 28 L 42 28 L 42 26 L 44 26 L 44 34.464844 C 44 35.195313 43.601563 35.875 42.929688 36.253906 L 26.089844 45.71875 C 25.417969 46.09375 24.582031 46.09375 23.910156 45.71875 L 7.070313 36.253906 C 6.398438 35.875 6 35.199219 6 34.464844 L 6 15.535156 C 6 14.804688 6.398438 14.125 7.070313 13.746094 L 23.910156 4.28125 C 24.246094 4.09375 24.625 4 25 4 Z M 25 12 C 17.839844 12 12 17.839844 12 25 C 12 32.160156 17.839844 38 25 38 C 29.089844 38 32.886719 36.09375 35.339844 32.863281 L 36.023438 31.960938 L 29.96875 28.453125 L 29.421875 29.046875 C 28.292969 30.28125 26.691406 31 25 31 C 21.683594 31 19 28.316406 19 25 C 19 21.683594 21.683594 19 25 19 C 26.691406 19 28.292969 19.71875 29.421875 20.953125 L 29.96875 21.546875 L 36.023438 18.039063 L 35.339844 17.136719 C 32.886719 13.90625 29.089844 12 25 12 Z M 25 14 C 28.074219 14 30.886719 15.316406 32.945313 17.511719 L 30.203125 19.097656 C 28.757813 17.832031 26.960938 17 25 17 C 20.597656 17 17 20.597656 17 25 C 17 29.402344 20.597656 33 25 33 C 26.960938 33 28.757813 32.167969 30.203125 30.902344 L 32.945313 32.488281 C 30.886719 34.683594 28.074219 36 25 36 C 18.925781 36 14 31.074219 14 25 C 14 18.925781 18.925781 14 25 14 Z M 33 22 L 33 24 L 31 24 L 31 26 L 33 26 L 33 28 L 35 28 L 35 26 L 37 26 L 37 24 L 35 24 L 35 22 Z"></path>
      </svg>
    ),
  },
  {
    name: "PHP",
    i: <FaPhp size={50} className="text-primary" />,
  },
  {
    name: "Html",
    i: <FaHtml5 size={50} className="text-primary" />,
  },
  {
    name: "CSS",
    i: <FaCss3Alt size={50} className="text-primary" />,
  },
  {
    name: "laravel",
    i: <FaLaravel size={50} className="text-primary" />,
  },
  {
    name: "React",
    i: <FaReact size={50} className="text-primary" />,
  },
  {
    name: "Next.js",
    i: (
      <svg
        id="Layer_1"
        data-name="Layer 1"
        width={50}
        height={50}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 506.68 306.34"
        style={{ fill: "#0d6efd" }}
      >
        <path d="M119.55,79.9h95.57v7.61H128.31V144.8h81.63v7.61H128.31v62.9h87.8v7.62H119.55Zm104.13,0h10.15l45,62.9,46-62.9L387.37,0,284.6,149.41l53,73.52H327L278.83,156l-48.38,66.91H220.1l53.35-73.52L223.68,79.9Zm117.66,7.61V79.9h108.9v7.61H400.07V222.92h-8.76V87.51h-50ZM0,79.9H11l151,226.44-62.4-83.41L9.16,90.71l-.4,132.22H0ZM449.36,213a3.19,3.19,0,1,1,3.13-3.18,3.1,3.1,0,0,1-3.13,3.18Zm8.61-8.38h4.69a4.28,4.28,0,0,0,4.64,4.26c3.05,0,4.78-1.84,4.78-5.28V181.8h4.77v21.83c0,6.2-3.58,9.77-9.5,9.77-5.56,0-9.38-3.46-9.38-8.77Zm25.12-.27h4.73c.41,2.92,3.26,4.78,7.37,4.78,3.84,0,6.65-2,6.65-4.72,0-2.35-1.79-3.76-5.86-4.72l-4-1c-5.56-1.31-8.1-4-8.1-8.54,0-5.49,4.47-9.15,11.18-9.15,6.25,0,10.81,3.66,11.09,8.85h-4.65c-.45-2.84-2.92-4.62-6.5-4.62-3.77,0-6.28,1.82-6.28,4.6,0,2.2,1.62,3.47,5.62,4.41l3.39.83c6.31,1.47,8.91,4,8.91,8.68,0,5.9-4.57,9.6-11.85,9.6-6.82,0-11.4-3.53-11.74-9.05Z" />
      </svg>
    ),
  },
  {
    name: "Bootstrap",
    i: <FaBootstrap size={50} className="text-primary" />,
  },
  {
    name: "jQuery",
    i: <DiJqueryLogo size={50} className="text-primary" />,
  },
  {
    name: "Node.js",
    i: <FaNodeJs size={50} className="text-primary" />,
  },
  {
    name: "MySql",
    i: <SiMysql size={50} className="text-primary" />,
  },
  {
    name: "MongoDb",
    i: <SiMongodb size={50} className="text-primary" />,
  },
];

const myTools = [
  {
    name: "Git",
    i: <FaGit size={50} className="text-primary" />,
  },
  {
    name: "VsCode",
    i: <SiVisualstudiocode size={50} className="text-primary" />,
  },
  {
    name: "GitHub",
    i: <FaGithub size={50} className="text-primary" />,
  },
  {
    name: "AdobeXD",
    i: <SiAdobexd size={50} className="text-primary" />,
  },
  {
    name: "Npm",
    i: <FaNpm size={50} className="text-primary" />,
  },
  {
    name: "Node",
    i: <FaNode size={50} className="text-primary" />,
  },
  {
    name: "Saas",
    i: <FaSass size={50} className="text-primary" />,
  },
];
const Skills = () => {
  const [skills] = useState(mySkills);
  const [tools] = useState(myTools);

  // console.log(skills)
  return (
    <Container className="position-relative">
      <img
        src={bg}
        alt="bg-vector"
        className="position-absolute top-0 img-fluid vector"
      />
      <Row className="justify-content-between">
        <h1 className="text-center py-5">Tech Skills</h1>
        {skills.map((item, index) => {
          const { name, i } = item;

          return (
            <Col
              key={index}
              className="col-md-2 col-3 g-3 d-flex flex-column justify-content-center align-items-center"
            >
              {i}
              <p className="m-0 mt-2">{name}</p>
            </Col>
          );
        })}
        <h1 className="text-center py-5">Tools</h1>
        {tools.map((tool, index) => {
          const { name, i } = tool;

          return (
            <Col
              key={index}
              className="col-md-2 col-3 d-flex flex-column justify-content-center align-items-center align-content-center"
            >
              {i}
              <p className="m-0 mt-2">{name}</p>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Skills;
