import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import "./assets/css/App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import portfolio from "./assets/img/portfolio.png";
import portfolio1 from "./assets/img/portfolio1.png";
import portfolio2 from "./assets/img/portfolio2.png";
import lebafrica from "./assets/img/thelebafrica.png";
import norgence from "./assets/img/norgence-academy.png";
import pushlink from "./assets/img/pushlink.png";
import { FaReact, FaPhp, FaLaravel } from "react-icons/fa";
import { DiJqueryLogo, DiMysql, DiJavascript } from "react-icons/di";
import Cv from "./pages/Cv";
import { Image } from "react-bootstrap";
import {
  SiExpo,
  SiExpress,
  SiReact,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import NB from "./assets/img/nativebase.png";
import CU from "./assets/img/chakraui.png";
import MUI from "./assets/img/mui.png";
import RNP from "./assets/img/rnp.jpg";
import NM from "./assets/img/nm.png";
import FM from "./assets/img/fm.png";

//norgence
import n1 from "./assets/img/norgence/n1.png";
import n2 from "./assets/img/norgence/n2.png";
import n3 from "./assets/img/norgence/n3.png";

//thelebhub
import tlh1 from "./assets/img/thelebhub/tlh1.png";
import tlh2 from "./assets/img/thelebhub/tlh2.png";
import tlh3 from "./assets/img/thelebhub/tlh3.png";
import tlh4 from "./assets/img/thelebhub/tlh4.png";
import tlh5 from "./assets/img/thelebhub/tlh5.png";

//pushlink
import pl1 from "./assets/img/pushlink/pl1.png";
import pl2 from "./assets/img/pushlink/pl2.png";
import pl3 from "./assets/img/pushlink/pl3.png";
import pl4 from "./assets/img/pushlink/pl4.png";
import pl5 from "./assets/img/pushlink/pl5.png";
import pl6 from "./assets/img/pushlink/pl6.png";

// agroplus
import ag1 from "./assets/img/agroplus/ag1.png";
import ag2 from "./assets/img/agroplus/ag2.png";
import ag3 from "./assets/img/agroplus/ag3.png";
import ag4 from "./assets/img/agroplus/ag4.png";
import ag5 from "./assets/img/agroplus/ag5.png";
import ag6 from "./assets/img/agroplus/ag6.png";
import ag7 from "./assets/img/agroplus/ag7.png";
import ag8 from "./assets/img/agroplus/ag8.png";
import ag9 from "./assets/img/agroplus/ag9.png";
import ag10 from "./assets/img/agroplus/ag10.png";
import ag11 from "./assets/img/agroplus/ag11.png";
import ag12 from "./assets/img/agroplus/ag12.png";
import ag13 from "./assets/img/agroplus/ag13.png";
import ag14 from "./assets/img/agroplus/ag14.png";
import ag15 from "./assets/img/agroplus/ag15.png";

// agroplus
import lr1 from "./assets/img/letsrecycle/lr1.png";
import lr2 from "./assets/img/letsrecycle/lr2.png";
import lr3 from "./assets/img/letsrecycle/lr3.png";
import lr4 from "./assets/img/letsrecycle/lr4.png";
import lr5 from "./assets/img/letsrecycle/lr5.png";
import lr6 from "./assets/img/letsrecycle/lr6.png";
import lr7 from "./assets/img/letsrecycle/lr7.png";
import lr8 from "./assets/img/letsrecycle/lr8.png";
import lr9 from "./assets/img/letsrecycle/lr9.png";
import lr10 from "./assets/img/letsrecycle/lr10.png";
import lr11 from "./assets/img/letsrecycle/lr11.png";
import lr12 from "./assets/img/letsrecycle/lr12.png";
import lr13 from "./assets/img/letsrecycle/lr13.png";
import lr14 from "./assets/img/letsrecycle/lr14.png";
import lr15 from "./assets/img/letsrecycle/lr15.png";

const projects = [
  {
    id: 5,
    name: "Agro Plus",
    coverImg: ag2,
    images: [
      ag1,
      ag2,
      ag3,
      ag4,
      ag5,
      ag6,
      ag7,
      ag8,
      ag9,
      ag10,
      ag11,
      ag12,
      ag13,
      ag14,
      ag15,
    ],
    color: "danger link-light",
    desc: "I was the sole designer, developer of this project, a mobile application to help rural farmers get ready market for their produce conveniently. The app is built with React Native, TypeScript,Redux Toolkit,Native Base. The app is powered by a backend api running on nodejs, sequelize, MySql database. It also comes with an administrative dashboard to monitor,track and update the app's content built with NextJs, TypeScript, Chakra Ui",
    stack: [
      {
        icon: <SiReact size={25} />,
        name: "React Native",
      },
      {
        icon: <SiExpo size={25} />,
        name: "Expo",
      },
      {
        icon: <SiExpress size={25} />,
        name: "Express Js",
      },
      {
        icon: <SiTypescript size={25} />,
        name: "TypeScript",
      },
      {
        icon: <SiRedux size={25} />,
        name: "Redux",
      },
      {
        icon: <Image src={NB} height={25} />,
        name: "Native Base",
      },
      {
        icon: (
          <svg
            id="next"
            data-name="nxt"
            height={30}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 506.68 306.34"
            style={{ fill: "#0d6efd" }}
          >
            <path d="M119.55,79.9h95.57v7.61H128.31V144.8h81.63v7.61H128.31v62.9h87.8v7.62H119.55Zm104.13,0h10.15l45,62.9,46-62.9L387.37,0,284.6,149.41l53,73.52H327L278.83,156l-48.38,66.91H220.1l53.35-73.52L223.68,79.9Zm117.66,7.61V79.9h108.9v7.61H400.07V222.92h-8.76V87.51h-50ZM0,79.9H11l151,226.44-62.4-83.41L9.16,90.71l-.4,132.22H0ZM449.36,213a3.19,3.19,0,1,1,3.13-3.18,3.1,3.1,0,0,1-3.13,3.18Zm8.61-8.38h4.69a4.28,4.28,0,0,0,4.64,4.26c3.05,0,4.78-1.84,4.78-5.28V181.8h4.77v21.83c0,6.2-3.58,9.77-9.5,9.77-5.56,0-9.38-3.46-9.38-8.77Zm25.12-.27h4.73c.41,2.92,3.26,4.78,7.37,4.78,3.84,0,6.65-2,6.65-4.72,0-2.35-1.79-3.76-5.86-4.72l-4-1c-5.56-1.31-8.1-4-8.1-8.54,0-5.49,4.47-9.15,11.18-9.15,6.25,0,10.81,3.66,11.09,8.85h-4.65c-.45-2.84-2.92-4.62-6.5-4.62-3.77,0-6.28,1.82-6.28,4.6,0,2.2,1.62,3.47,5.62,4.41l3.39.83c6.31,1.47,8.91,4,8.91,8.68,0,5.9-4.57,9.6-11.85,9.6-6.82,0-11.4-3.53-11.74-9.05Z" />
          </svg>
        ),
        name: "NextJs",
      },
      {
        icon: <Image src={CU} height={25} />,
        name: "Chakra Ui",
      },
    ],
    github: "https://github.com/Azubire/agroplus",
    siteUrl: "",
  },
  {
    id: 6,
    name: "Lets Recycle",
    coverImg: lr1,
    images: [
      lr1,
      lr2,
      lr3,
      lr4,
      lr5,
      lr6,
      lr7,
      lr8,
      lr9,
      lr10,
      lr11,
      lr12,
      lr13,
      lr14,
      lr15,
    ],
    color: "info link-light",
    desc: "This is a cross platform mobile application that I built as a freelancer for a group of students that they used as their final year project. The application's front end was built with React Native, Typescript, Expo, Redux, React Native Paper. A RESTApi backend built with Express Js, JWT. An admin dashboard built with NextJs,TypeScript Material Ui",
    stack: [
      {
        icon: <SiReact size={25} />,
        name: "React Native",
      },
      {
        icon: <SiTypescript size={25} />,
        name: "TypeScript",
      },
      {
        icon: <SiExpress size={25} />,
        name: "Express Js",
      },
      {
        icon: <SiExpo size={25} />,
        name: "Expo",
      },
      {
        icon: <SiRedux size={25} />,
        name: "Redux",
      },
      {
        icon: <Image src={RNP} height={25} />,
        name: "React Native Paper",
      },
      {
        icon: (
          <svg
            id="next"
            data-name="nxt"
            height={30}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 506.68 306.34"
            style={{ fill: "#0d6efd" }}
          >
            <path d="M119.55,79.9h95.57v7.61H128.31V144.8h81.63v7.61H128.31v62.9h87.8v7.62H119.55Zm104.13,0h10.15l45,62.9,46-62.9L387.37,0,284.6,149.41l53,73.52H327L278.83,156l-48.38,66.91H220.1l53.35-73.52L223.68,79.9Zm117.66,7.61V79.9h108.9v7.61H400.07V222.92h-8.76V87.51h-50ZM0,79.9H11l151,226.44-62.4-83.41L9.16,90.71l-.4,132.22H0ZM449.36,213a3.19,3.19,0,1,1,3.13-3.18,3.1,3.1,0,0,1-3.13,3.18Zm8.61-8.38h4.69a4.28,4.28,0,0,0,4.64,4.26c3.05,0,4.78-1.84,4.78-5.28V181.8h4.77v21.83c0,6.2-3.58,9.77-9.5,9.77-5.56,0-9.38-3.46-9.38-8.77Zm25.12-.27h4.73c.41,2.92,3.26,4.78,7.37,4.78,3.84,0,6.65-2,6.65-4.72,0-2.35-1.79-3.76-5.86-4.72l-4-1c-5.56-1.31-8.1-4-8.1-8.54,0-5.49,4.47-9.15,11.18-9.15,6.25,0,10.81,3.66,11.09,8.85h-4.65c-.45-2.84-2.92-4.62-6.5-4.62-3.77,0-6.28,1.82-6.28,4.6,0,2.2,1.62,3.47,5.62,4.41l3.39.83c6.31,1.47,8.91,4,8.91,8.68,0,5.9-4.57,9.6-11.85,9.6-6.82,0-11.4-3.53-11.74-9.05Z" />
          </svg>
        ),
        name: "NextJs",
      },
      {
        icon: <Image src={MUI} height={25} />,
        name: "Material Ui",
      },
    ],
    github: "https://github.com/Azubire/letsrecycle",
    siteUrl: "",
  },
  {
    id: 1,
    name: "Pushlink Consult Ltd",
    coverImg: pushlink,
    images: [pl1, pl2, pl3, pl4, pl5, pl6],
    color: "primary link-light",
    desc: "I rebuilt this website from scratch that was initialy built with wordpress. Push – Link Consult Limited exist to provide partners with a better and easy approach to life in their pursuit for maximum satisfaction to their needs and also maximize profit in all aspect of business. ",
    stack: [
      {
        icon: (
          <svg
            id="next"
            data-name="nxt"
            height={30}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 506.68 306.34"
            style={{ fill: "#0d6efd" }}
          >
            <path d="M119.55,79.9h95.57v7.61H128.31V144.8h81.63v7.61H128.31v62.9h87.8v7.62H119.55Zm104.13,0h10.15l45,62.9,46-62.9L387.37,0,284.6,149.41l53,73.52H327L278.83,156l-48.38,66.91H220.1l53.35-73.52L223.68,79.9Zm117.66,7.61V79.9h108.9v7.61H400.07V222.92h-8.76V87.51h-50ZM0,79.9H11l151,226.44-62.4-83.41L9.16,90.71l-.4,132.22H0ZM449.36,213a3.19,3.19,0,1,1,3.13-3.18,3.1,3.1,0,0,1-3.13,3.18Zm8.61-8.38h4.69a4.28,4.28,0,0,0,4.64,4.26c3.05,0,4.78-1.84,4.78-5.28V181.8h4.77v21.83c0,6.2-3.58,9.77-9.5,9.77-5.56,0-9.38-3.46-9.38-8.77Zm25.12-.27h4.73c.41,2.92,3.26,4.78,7.37,4.78,3.84,0,6.65-2,6.65-4.72,0-2.35-1.79-3.76-5.86-4.72l-4-1c-5.56-1.31-8.1-4-8.1-8.54,0-5.49,4.47-9.15,11.18-9.15,6.25,0,10.81,3.66,11.09,8.85h-4.65c-.45-2.84-2.92-4.62-6.5-4.62-3.77,0-6.28,1.82-6.28,4.6,0,2.2,1.62,3.47,5.62,4.41l3.39.83c6.31,1.47,8.91,4,8.91,8.68,0,5.9-4.57,9.6-11.85,9.6-6.82,0-11.4-3.53-11.74-9.05Z" />
          </svg>
        ),
        name: "Next Js",
      },
      {
        icon: <Image src={MUI} height={25} />,
        name: "Material Ui",
      },
      {
        icon: <Image src={NM} height={25} />,
        name: "Node Mailer",
      },
      {
        icon: <Image src={FM} height={25} />,
        name: "Framer Motion",
      },
    ],
    github: "",
    siteUrl: "https://www.pushlinkconsult.com",
  },
  {
    id: 2,
    name: "The-Leb-Africa",
    coverImg: lebafrica,
    images: [tlh1, tlh2, tlh3, tlh4, tlh5],
    color: "success link-light",
    desc: "The Leadership, Entrepreneurship and Business (LEB) Roadshow is a programme designed to empower the youth through mentorship, training and career guidance, equipping them with the requisite skills and creating meaningful opportunities to become responsible individuals, living purpose-driven lives. The Leadership, Entrepreneurship and Business Roadshow’ 2022 has an intentional focus on students in the ten technical universities within the country.",
    stack: [
      {
        icon: <FaLaravel size={25} className="text-primary" />,
        name: "laravel",
      },

      {
        icon: <FaPhp size={25} className="text-primary" />,
        name: "PHP",
      },

      {
        icon: <DiJqueryLogo size={25} className="text-primary" />,
        name: "jQuery",
      },
      {
        icon: <DiMysql size={25} className="text-primary" />,
        name: "MySql",
      },
    ],
    github: "",
    siteUrl: "https://www.thelebafrica.com/",
  },

  {
    id: 3,
    name: "Portfolio",
    coverImg: portfolio,
    images: [portfolio, portfolio1, portfolio2],
    color: "warning link-light",
    desc: "This is a portfolio website for myself I developed to showcase some of my work. I had a previous one that was built with laravel but decided to rebuilt it using react after a week of learning react js",
    stack: [
      {
        icon: <FaReact size={25} className="text-warning" />,
        name: "React.js",
      },
    ],
    github: "https://github.com/Azubire/portfolio",
    siteUrl: "https://azubire.github.io/portfolio/",
  },

  {
    id: 4,
    name: "Norgence Academy",
    coverImg: norgence,
    images: [n1, n2, n3],
    color: "info link-dark",
    desc: "I developed this web app during my period as a intern at Norgence Inc. Norgence Inc runs an academy that offers training in Software Development, Basic IT Proficiency, Networking etc, This web app was developed purposely to manage the recruitment of new students to the academy. This application is hosted locally on the company's sever",
    stack: [
      {
        icon: <FaPhp size={25} className="text-info" />,
        name: "PHP",
      },
      {
        icon: <DiJqueryLogo size={25} className="text-info" />,
        name: "jQuery",
      },
      {
        icon: <DiJavascript size={25} className="text-info" />,
        name: "javaScript",
      },
      {
        icon: <DiMysql size={25} className="text-info" />,
        name: "MySql",
      },
    ],
    github: "",
    siteUrl: "",
  },
];

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [projectList] = useState(projects);

  var dark;
  const boolean = localStorage.getItem("isDarkMode");
  if (boolean === "true") {
    dark = true;
  } else {
    dark = false;
  }

  useEffect(() => {
    dark ? setIsDarkMode(true) : setIsDarkMode(false);
  }, [dark]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Layout setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}>
              <Outlet />
            </Layout>
          }
        >
          <Route exact path="/" element={<Home projectList={projectList} />} />
          <Route
            path="/project-details/:id"
            element={<ProjectDetails projectList={projectList} />}
          />
        </Route>
        <Route path="/my-cv" element={<Cv />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  );
};
export default App;
