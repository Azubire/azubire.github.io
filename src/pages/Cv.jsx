import React from "react";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import { FaGithub, FaGlobe, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import pp from "../assets/img/azubire.jpg";

const workExperience = [
  {
    title: "Remote Full-Stack Developer, Awunpara",
    subtitle: "Kumasi, Ashanti Region, Ghana - Jan 2023 - Current",
    duties: [
      {
        task: "Maintains and improves existing code by implementing new features by collaborating with team members.",
        stack: "",
      },
      {
        task: "Performs continuous Deployment and maintains server uptime of web applications on platforms such as Vercel, Railway.",
        stack: "",
      },
      {
        task: "Lead development and guided frontend team to build a full-stack web application in a collabarative environment",
        stack: "TypeScript, NodeJs, React, Github",
      },
      {
        task: "Built an API using NodeJs and ExpressJs and integrated it with the frontend application",
        stack: "TypeScript, NodeJs, ExpressJs, MongoDB, Github, React",
      },
    ],
  },

  {
    title: "Full-Stack Developer, Bolgatanga Technical University",
    subtitle: "Bolgatanga, Upper East Region, Ghana - Nov 2022 - Nov 2023",
    duties: [
      {
        task: "Provided teaching assistance to Computer Science students in Java programming and web development.",
        stack: "Java, HTML, CSS, JavaScript",
      },
      {
        task: "Worked on existing In-house projects and implemented new features supervised by the IT team.",
        stack: "React, Firebase, Bitbucket, Laravel",
      },
      {
        task: "Provided customer support and network support to staff and students in the university.",
        stack: "",
      },
    ],
  },
  {
    title: "Lead Frontend Developer, Sate Consult",
    subtitle: "Kumasi, Ashanti Region, Ghana - Jan 2023 - Current",
    duties: [
      {
        task: "Lead a group of developers on projects to transform design into code. The project involved building a web application using React and Tailwind.",
        stack: "React, Tailwind, Bitbucket",
      },
      {
        task: "Refactored, and improved existing code previously written by other developers.",
        stack: "React, Firebase, Bitbucket, Laravel",
      },
      {
        task: "Designed and developed an admin dashboard using react and integrating with an API.",
        stack: "TypeScript, React, Firebase, NextJs, Laravel",
      },
    ],
  },
  {
    title: "Contract Web Developer, Push-Link Consult Ltd",
    subtitle: "Koforidua, Eastern Region - Feb 2022 - Current",
    duties: [
      {
        task: "Designed and built a full stack web application to facilitate event roadshows and bootcamps, a program designed to empower the youth through mentorship, training, and career guidance that targets all 10 Technical Universities in Ghana.",
        stack: "Laravel, Boostrap and MySQL",
      },
      {
        task: "Redesigned and developed a business portfolio website, a limited liability company that provides quality consultancy services with focus on partners such as Financial Service Providers, Hospitality, Insurance Companies,Educational Institutions, Enterprises, Corporate bodies and individuals.",
        stack: "TypeScript, NextJs, MUI",
      },
      {
        task: "Manages content updates on various In-House products and maintains code.",
        stack: "",
      },
    ],
  },
  {
    title: "Developer intern, Norgence Inc",
    subtitle: "Bolgatanga, Upper East Region - Oct 2021 - Oct 2023",
    duties: [
      {
        task: "Designed and developed a Student Management System for internal use.",
        stack: "PHP, MySQL, HTML, CSS, JavaScript",
      },
      {
        task: "Trained students on web development and computer programming including HTML, CSS, JavaScript, and PHP.",
        stack: "",
      },
      {
        task: "Guided Junior High School (J.H.S) students in the region through basic practical computer usage. A mobile ICT lab innitative ran by the company.",
        stack: "",
      },
      {
        task: "Gave a speech on 'The Importance of Young Ladies in IT' at a seminar organized by the company in a girls training institution.",
        stack: "",
      },
    ],
  },
  // {
  //   title: "Tutor Mentor, Jesse Asante (SRC President)",
  //   subtitle: "koforidua Technical University - Feb 2021 - Jun 2021",
  //   duties: [
  //     {
  //       task: "Led a group of 100+ first year students through practical Objected-Oriented Programming with C++.",
  //       stack: "",
  //     },
  //     {
  //       task: "Supported Skills development by guiding and providing manifold instructional techniques to students.",
  //       stack: "",
  //     },
  //   ],
  // },
];

const projects = [
  {
    title: "Lets Recycle",
    roles: "Freelance Designer, Cross Platform App Developer",
    subtitle: "Koforidua Technical University, July 2022 - Sep 2022",
    duties: [
      {
        task: "Designed a set of intuitive UI components for the Mobile App using figma ",
      },
      {
        task: "Developed the mobile app with React Native, TypeScript, React Native Paper, Expo, Redux",
      },
      {
        task: "Developed a RESTful API with NodeJs/ExpressJs, MySQL and it's consumed by the frontend mobile app",
      },
      {
        task: "Developed an admin dashboard using NextJs, TypeScript and Material Ui to manage app content, Deployed to Vercel",
      },
    ],
  },
  {
    title: "Agro Plus",
    roles: "Lead Designer, Cross Platform App Developer",
    subtitle: "Koforidua Technical University, Jun 2022 - Sep 2022",
    duties: [
      {
        task: "Designed app's and dashboard UI components using figma",
      },
      {
        task: "Developed app with TypeScript, React Native, Redux, Expo and NativeBase",
      },
      {
        task: "Designed and Developed an API with NodeJs/ExpressJs, MySQL and JWT for authentication that's consumed by the frontend mobile app",
      },
      {
        task: "Developed an admin Dashboard for monitoring and analytics with NextJs, TypeScript, Chakra Ui",
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
                <li>TypeScript, JavaScript (ES5, ES6), AJAX, JQuery</li>
                <li>React Js, Next Js, Inertia Js</li>
                <li>
                  Tailwindcss, MUI, Chakra Ui, Native Base, Bootstrap, React
                  Native Paper
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
                <li>Node Js/Express Js, PHP</li>
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
                <li>C++, Java, kotlin, Solidity</li>
                <li>Sequelize, TypeORM, Mongoose</li>
                <li>
                  Git, Github, Bitbucket, Redux Toolkit, Vitest, Jest, Aws,
                  Docker, CI/CD.
                </li>
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
                <li>Collaboration</li>
                <li>Good Verbal and Written Communication</li>
              </ul>
            </div>
            <div className="mt-4">
              <Stack direction="horizontal" className="justify-content-between">
                <h4 className="font-weight-bold border-bottom border-3 border-light ">
                  Education
                </h4>
              </Stack>
              <h5 className="">HND Computer Science</h5>
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
            {/* With {new Date().getFullYear() - 2020}+ years of Experience as a
            developer, my uttermost goal is to build responsive, interactive,
            maintainable,scalable and high performing applications for clients.
            I look forward to working with you. */}
            With over {new Date().getFullYear() - 2020}+ years of experience as
            a Full Stack Developer, I bring a proven track record of designing,
            developing, and maintaining responsive and high-performing web
            applications. I have successfully led and collaborated with teams,
            demonstrating expertise in both front-end and back-end technologies.
            My dedication to staying abreast of industry trends and commitment
            to continuous learning ensures that I am equipped with the latest
            tools and techniques. I am passionate about leveraging my skills to
            build innovative solutions and thrive in dynamic, collaborative
            environments. Looking forward to contributing my technical
            proficiency, leadership, and problem-solving abilities to drive
            success in your team.
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
