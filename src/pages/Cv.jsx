import React from "react";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import { FaGithub, FaGlobe, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import pp from "../assets/img/azubire.jpg";

const workExperience = [
  {
    title: "Remote Full-Stack Developer & Team Lead, Bapx",
    subtitle: "Kumasi, Ashanti Region, Ghana - Jul 2024 - Current",
    duties: [
      {
        task: "Lead and coordinate a cross-functional team to deliver high-quality web applications, ensuring seamless collaboration between frontend and backend developers.",
        stack: "",
      },
      {
        task: "Maintain and improve the existing codebase by implementing new features and optimizing performance.",
        stack: "",
      },
      {
        task: "Oversee continuous deployment processes, ensuring server uptime and smooth deployment pipelines.",
        stack: "",
      },
      {
        task: "Develop and maintain backend systems, including building APIs.",
        stack: "",
      },
    ],
  },
  {
    title: "Remote Full-Stack Developer & Team Lead, Awunpara",
    subtitle: "Kumasi, Ashanti Region, Ghana - Jan 2023 - Current",
    duties: [
      {
        task: "Led the end-to-end development of full-stack web applications, including a labor recruitment platform and a marketplace, collaborating with frontend teams to deliver seamless user experiences.",
        stack: "",
      },
      {
        task: "Designed and built scalable APIs using Node.js and Express.js, integrating them with frontend applications to ensure robust functionality.",
        stack: "",
      },
      {
        task: "Maintained and improved the existing codebase by implementing new features, optimizing performance, and ensuring code quality.",
        stack: "",
      },
      {
        task: "Managed continuous deployment processes, ensuring server uptime and smooth deployments across platforms like Vercel, Railway, and Digital Ocean.",
        stack: "",
      },
    ],
  },

  {
    title:
      "Full-Stack Developer & Teaching Assistant, Bolgatanga Technical University",
    subtitle: "Bolgatanga, Upper East Region, Ghana - Nov 2022 - Nov 2023",
    duties: [
      {
        task: "Delivered teaching assistance in Java programming and web development, mentoring Computer Science students to build foundational programming skills.",
        stack: "",
      },
      {
        task: "Collaborated with the IT team to contribute to in-house projects, implementing new features and enhancing system functionality.",
        stack: "",
      },
      {
        task: "Provided technical support, including customer service and network troubleshooting, to university staff and students, ensuring smooth IT operations.",
        stack: "",
      },
    ],
  },
  {
    title: "Full-Stack Developer, Sate Consult",
    subtitle: "Kumasi, Ashanti Region, Ghana - Jan 2023 - Current",
    duties: [
      {
        task: "Led a team of developers in transforming UI/UX designs into functional, high-quality code, with a focus on React and Tailwind CSS for responsive and modern interfaces.",
        stack: "",
      },
      {
        task: "Refactored and optimized existing codebases, improving performance, maintainability, and scalability.",
        stack: "",
      },
      {
        task: "Designed and developed a comprehensive admin dashboard using React, seamlessly integrating it with backend APIs to enable efficient data management and reporting.",
        stack: "",
      },
    ],
  },
  {
    title: "Contract Web Developer, Push-Link Consult Ltd",
    subtitle: "Koforidua, Eastern Region - Feb 2022 - Current",
    duties: [
      {
        task: "Developed a full-stack online learning platform using a monolithic architecture with Laravel, Inertia.js, and React, delivering a seamless user experience for educators and learners.",
        stack: "",
      },
      {
        task: "Built a full-stack web application empowering youth through mentorship, training, and career guidance, targeting 10 Technical Universities in Ghana using Laravel, Bootstrap, and MySQL.",
        stack: "",
      },
      {
        task: "Redesigned and developed a business portfolio website, enhancing user experience and modernizing the interface with TypeScript, Next.js, and Material-UI.",
        stack: "",
      },
    ],
  },
  {
    title: "Developer intern, Norgence Inc",
    subtitle: "Bolgatanga, Upper East Region - Oct 2021 - Oct 2023",
    duties: [
      {
        task: "Designed and developed a Student Management System using PHP, MySQL, HTML, CSS, and JavaScript, streamlining administrative processes for educational institutions.",
        stack: "",
      },
      {
        task: "Trained students in web development and computer programming, fostering technical skills and knowledge among learners.",
        stack: "",
      },
      {
        task: "Mentored Junior High School students in basic computer usage as part of a mobile ICT lab initiative, promoting digital literacy at the grassroots level.",
        stack: "",
      },
      {
        task: "Delivered a keynote speech on 'The Importance of Young Ladies in IT' at a company-organized seminar, advocating for diversity and inclusion in technology.",
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
        task: "Led the design and development of a cross-platform mobile app using React Native, TypeScript, Expo, and Redux, delivering a seamless user experience across devices.",
      },
      {
        task: "Developed a RESTful API with Node.js, Express.js, and MySQL, enabling efficient data communication between the backend and the mobile app.",
      },
      {
        task: "Designed and implemented an admin dashboard using Next.js, TypeScript, and Material-UI, providing a modern and intuitive interface for managing app data and operations.",
      },
    ],
  },
  {
    title: "Agro Plus",
    roles: "Lead Designer, Cross Platform App Developer",
    subtitle: "Koforidua Technical University, Jun 2022 - Sep 2022",
    duties: [
      {
        task: "Led the design and development of a cross-platform mobile app and dashboard using TypeScript, React Native, Redux, Expo, and NativeBase, delivering a seamless and scalable user experience.",
      },
      {
        task: "Developed a secure RESTful API with Node.js, Express.js, MySQL, and JWT authentication, enabling robust data communication and user management for the frontend mobile app.",
      },
      {
        task: "Designed and implemented an admin dashboard for monitoring and analytics using Next.js, TypeScript, and Chakra UI, providing a modern and intuitive interface for data visualization and management.",
      },
    ],
  },
];

const Cv = () => {
  return (
    <Container fluid style={{ fontSize: 14, fontFamily: "arial" }}>
      <Row className="">
        <Col className=" col-4 d-flex flex-column bg-secondary text-light px-3">
          {/* image  */}
          <Image
            src={pp}
            className="img-circle rounded  mt-4 "
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
                href="https://azubire.github.io"
                className="text-decoration-none text-light"
              >
                azubire.github.io
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
                <li>
                  HTML5, CSS, Sass, TypeScript, JavaScript (ES5, ES6), AJAX,
                  jQuery
                </li>
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
            <div>
              <h5
                className=" pb-1 border-1"
                style={{ borderBottomStyle: "dashed" }}
              >
                Other Skills
              </h5>
              <ul>
                <li>React Native</li>
                <li>C++, Java, kotlin, Solidity, Vue</li>
                <li>Sequelize, TypeORM, Mongoose</li>
                <li>
                  DevOps, Git, Github, Bitbucket, Redux Toolkit, Vitest, Jest,
                  Aws, Docker, CI/CD, Redis.
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <Stack direction="horizontal" className="justify-content-between">
                <h4 className="font-weight-bold border-bottom border-3 border-light ">
                  Soft Skills
                </h4>
              </Stack>

              <ul>
                <li>Good Verbal and Written Communication</li>
                <li>Collaboration & Teamwork</li>
                <li>Attention to Detail</li>
                <li>Problem-Solving</li>
              </ul>
            </div>
            <div className="mt-4">
              <Stack direction="horizontal" className="justify-content-between">
                <h4 className="font-weight-bold border-bottom border-3 border-light ">
                  Education
                </h4>
              </Stack>
              <h6 className="">
                HND Computer Science - Koforidua Technical University
              </h6>
            </div>
            <div className="mt-4">
              <Stack direction="horizontal" className="justify-content-between">
                <h4 className="font-weight-bold border-bottom border-3 border-light ">
                  Languages
                </h4>
              </Stack>

              <ul>
                <li>English</li>
                <li>Gurenne</li>
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
            Experienced Full Stack Developer with{" "}
            {new Date().getFullYear() - 2020}+ years of expertise in designing,
            developing, and maintaining high-performing web applications. Proven
            track record of leading teams and delivering innovative solutions
            across both front-end and back-end development. Passionate about
            continuous learning and leveraging the latest industry trends to
            drive success. Thrives in collaborative environments, combining
            technical proficiency, leadership, and problem-solving skills to
            deliver impactful results.
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
                <p className="font-italic">{item.subtitle}</p>
                <ul>
                  {item.duties.map((item, index) => (
                    <li
                      key={index}
                      className={`${item.current ? "text-info" : ""}`}
                    >
                      {item.task}
                    </li>
                  ))}
                </ul>
              </Stack>
            ))}
            {/* experience block 1 */}
          </Stack>
          <Stack>
            <Stack direction="horizontal" className="justify-content-between">
              <h4 className="font-weight-bold border-bottom border-3 border-dark ">
                Notable Projects
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
                      <p
                        className={`${item.current ? "text-info" : ""} p-0 m-0`}
                      >
                        {item.stack}
                      </p>
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
