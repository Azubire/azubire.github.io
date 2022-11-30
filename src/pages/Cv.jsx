import React from "react";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import { FaGithub, FaGlobe, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import pp from "../assets/img/azubire.jpg";

const workExperience = [
  {
    title: "Freelance Web Developer, Push-Link Consult Ltd",
    subtitle: "Koforidua, Eastern Region - Feb 2022 - Current",
    duties: [
      {
        task: "Designed and built a full stack web application (thelebafrica) to facilitate event roadshows and bootcamps, a program designed to empower the youth through mentorship, training, and career guidance that targets all 10 Technical Universities in Ghana.",
        stack: "",
      },
      {
        task: "Redesigned and developed a business portfolio website (pushlinkconsult), a limited liability company that provides quality consultancy services with focus on partners such as Financial Service Providers, Hospitality, Insurance Companies,Educational Institutions, Enterprises, Corporate bodies and individuals.",
        stack: "",
      },
      {
        task: "Manages content updates on various inhouse products and maintains code.",
        stack: "",
      },
    ],
  },
  {
    title: "Developer intern, Norgence Inc",
    subtitle: "Bolgatanga, Upper East Region - Oct 2021 - Current",
    duties: [
      {
        task: "Designed and developed a Student Management System for internal use.",
        stack: "",
      },
      {
        task: "Trained students on web development.",
        stack: "",
      },
      {
        task: "Guided Junior High School (J.H.S) students through basic practical computer usage. A mobile ICT lab innitative ran by the company.",
        stack: "",
      },
      {
        task: "Lectured on 'The Importance of Young Ladies in IT' at a seminar organized by the company in a girls training institution.",
        stack: "",
      },
    ],
  },
  {
    title: "Tutor Mentor, Jesse Asante (SRC President)",
    subtitle: "koforidua Technical University - Feb 2021 - Jun 2021",
    duties: [
      {
        task: "Led a group of 100+ first year students through practical Objected-Oriented Programming with C++.",
        stack: "",
      },
      {
        task: "Supported Skills development by guiding and providing manifold instructional techniques to students.",
        stack: "",
      },
    ],
  },
];

const projects = [
  {
    title: "Lets Recycle",
    roles: "Freelance Designer, Developer",
    subtitle: "Koforidua Technical University, July 2022 - Sep 2022",
    duties: [
      {
        task: "Designed a set of intuitive Ui components for the Mobile App using figma ",
      },
      {
        task: "Developed the mobile app with React Native, TypeScript, React Native Paper,Expo, Redux",
      },
      {
        task: "Developed a RESTful API with NodeJs/ExpressJs, MySQL and JWT consumed by the frontend mobile app",
      },
      {
        task: "Developed an admin dashboard using NextJs, TypeScript and Material Ui to manage app content, Deployed to Vercel",
      },
    ],
  },
  {
    title: "Agro Plus",
    roles: "Lead Designer, Developer",
    subtitle: "Koforidua Technical University, Jun 2022 - Sep 2022",
    duties: [
      {
        task: "Designed app interface with Figma",
      },
      {
        task: "Developed app with TypeScript, React Native, Redux, Expo, NativeBase",
      },
      {
        task: "Designed and Developed an API with NodeJs/ExpressJs, MySQL, JWT ",
      },
      {
        task: "Designed and build an administrative Dashboard for monitoring and analytics with NextJs, TypeScript, Chakra Ui",
      },
    ],
  },
];

const Cv = () => {
  return (
    <Container fluid className=" ">
      <Row className="">
        <Col className=" col-4 d-flex flex-column bg-secondary text-light px-3">
          {/* image  */}
          <Image
            src={pp}
            className="img-circle rounded  mt-4    border-info border-3"
            alt="profiile photo"
          />
          {/* Profile */}
          <div className="text-light my-4 text-center">
            <h2 style={{ letterSpacing: 4 }} className=" opacity-95">
              Azubire Peter
            </h2>
            <h5 style={{ letterSpacing: 2 }} className="opacity-95">
              Full Stack Developer
            </h5>
          </div>
          {/* contact info  */}
          <Stack direction="horizontal" className="justify-content-between">
            <h4 className="font-weight-bold border-bottom border-3 pb-1 border-light ">
              Contact
            </h4>
          </Stack>
          <Stack direction="horizontal" className="align-items-center mb-2">
            <FaPhoneAlt />
            <p className="p-0 m-0 ms-2">+233 24 212 4312</p>
          </Stack>
          <Stack direction="horizontal" className="align-items-center mb-2">
            <SiGmail />
            <p className="p-0 m-0 ms-2">azubirepeter@gmail.com</p>
          </Stack>
          <Stack direction="horizontal" className="align-items-center mb-2">
            <FaGithub />
            <p className="p-0 m-0 ms-2">
              <a
                target="_blank"
                href="https://github.com/azubire"
                rel="noreferrer"
                className="text-decoration-none text-light"
              >
                github.com/azubire
              </a>
            </p>
          </Stack>
          <Stack direction="horizontal" className="align-items-center mb-2">
            <FaGlobe />
            <p className="p-0 m-0 ms-2">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://azubire.github.io/portfolio"
                className="text-decoration-none text-light"
              >
                azubire.github.io/portfolio
              </a>
            </p>
          </Stack>
          {/* skills */}
          <Stack className=" mt-4">
            <Stack direction="horizontal" className="justify-content-between">
              <h4 className="font-weight-bold border-bottom border-3 pb-1 border-light ">
                Technical Skills
              </h4>
            </Stack>
            {/* frontend  */}
            <div>
              <h5
                className=" pb-1 border-1"
                style={{ borderBottomStyle: "dashed" }}
              >
                Front End
              </h5>
              <ul>
                <li>HTML5, CSS, Sass</li>
                <li>TypeScript, JavaScript(ES5, ES6), AJAX, JQuery</li>
                <li>React Js, Next Js, Inertia Js</li>
                <li>
                  Material Ui, Chakra Ui, Native Base, Bootstrap, React Native
                  Paper
                </li>
              </ul>
            </div>
            <div>
              <h5
                className=" pb-1 border-1"
                style={{ borderBottomStyle: "dashed" }}
              >
                Back End
              </h5>
              <ul>
                <li>Node Js, Express Js, PHP</li>
                <li>Laravel, Adonis Js</li>
                <li>MySql, MongoDB</li>
              </ul>
            </div>
            <div className="mt-4">
              <Stack direction="horizontal" className="justify-content-between">
                <h4 className="font-weight-bold border-bottom border-3 border-light ">
                  Miscellaneouse Skills
                </h4>
              </Stack>

              <ul>
                <li>React Native</li>
                <li>C++, Java, kotlin</li>
                <li>Sequelize, TypeORM, Mongoose</li>
                <li>Git, Github, Redux, Firebase</li>
              </ul>
            </div>
            <div className="mt-4">
              <Stack direction="horizontal" className="justify-content-between">
                <h4 className="font-weight-bold border-bottom border-3 border-light ">
                  Personal Skills
                </h4>
              </Stack>

              <ul>
                <li>Problem Solving</li>
                <li>Creative Thinking</li>
                <li>Collaboration</li>
                <li>Good Verbal and Written Communication</li>
                <li>Adaptability</li>
              </ul>
            </div>
            <div className="mt-4">
              <Stack direction="horizontal" className="justify-content-between">
                <h4 className="font-weight-bold border-bottom border-3 border-light ">
                  Education
                </h4>
              </Stack>
              <h5 className="font-weight-bold">Diploma</h5>
              <h5 className=""> Computer Science</h5>
              <h6 className="">Koforidua Technical University</h6>
            </div>
            <div className="mt-4">
              <Stack direction="horizontal" className="justify-content-between">
                <h4 className="font-weight-bold border-bottom border-3 border-light ">
                  Languages
                </h4>
              </Stack>

              <ul>
                <li>English</li>
              </ul>
            </div>
          </Stack>
        </Col>

        <Col className="col-8 px-3">
          <Stack
            direction="horizontal"
            className="justify-content-between mt-4"
          >
            <div
              className="border-bottom border-2"
              style={{ width: "40%" }}
            ></div>
            <h4
              className="w-100 text-center "
              style={{ marginLeft: 4, marginRight: 4 }}
            >
              Professional Summary
            </h4>
            <div
              className="border-bottom border-2 "
              style={{ width: "40%" }}
            ></div>
          </Stack>
          <p>
            With {new Date().getFullYear() - 2020}+ years of Experience as a
            developer, my uttermost goal is to build responsive, interactive,
            maintainable,scalable and high performing applications for clients.
            I look forward to working with you.
          </p>
          <Stack>
            <Stack direction="horizontal" className="justify-content-between">
              <h4 className="font-weight-bold border-bottom border-3 border-dark ">
                Work Experience
              </h4>
            </Stack>
            {workExperience.map((item, index) => (
              <Stack key={index}>
                <h5>{item.title}</h5>
                <p className="d">{item.subtitle}</p>
                <ul>
                  {item.duties.map((item, index) => (
                    <li key={index}>{item.task}</li>
                  ))}
                </ul>
              </Stack>
            ))}
            {/* experience block 1 */}
          </Stack>
          <Stack>
            <Stack direction="horizontal" className="justify-content-between">
              <h4 className="font-weight-bold border-bottom border-3 border-dark ">
                Additional Experience
              </h4>
            </Stack>
            {projects.map((item, index) => (
              <Stack key={index}>
                <Stack direction="horizontal" gap={2}>
                  <h6>{item.roles}</h6>|
                  <h6 className="text-info">{item.title}</h6>
                </Stack>
                <p>{item.subtitle}</p>
                <ul>
                  {item.duties.map((item, index) => (
                    <Stack key={index}>
                      <li>{item.task}</li>
                      <p className="m-0 p-0"> {item.stack}</p>
                    </Stack>
                  ))}
                </ul>
              </Stack>
            ))}
            {/* experience block 1 */}
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default Cv;
