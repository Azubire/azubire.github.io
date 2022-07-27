import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import "./assets/css/App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/layout/Layout";
import Home from "./components/main/Home";
import ProjectDetails from "./components/main/ProjectDetails";
import portfolio from "./assets/img/portfolio.png";
import lebafrica from "./assets/img/thelebafrica.png";
import norgence from "./assets/img/norgence-academy.png";
import pushlink from "./assets/img/pushlink.png";
import { FaReact, FaPhp, FaLaravel } from "react-icons/fa";
import { DiJqueryLogo, DiMysql, DiJavascript } from "react-icons/di";

const projects = [
  {
    id: 1,
    name: "Pushlink Consult Ltd",
    img: pushlink,
    color: "primary link-light",
    desc: "I rebuilt this website from scratch that was initialy built with wordpress Consult Ltd Push – Link Consult Limited exist to provide partners with a better and easy approach to life in their pursuit for maximum satisfaction to their needs and also maximize profit in all aspect of business. ",
    stack: [
      {
        icon: (
          <svg
            id="Layer_1"
            data-name="Layer 1"
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
    ],
    github: "",
    siteUrl: "https://www.pushlinkconsult.com",
  },
  {
    id: 2,
    name: "The-Leb-Africa",
    img: lebafrica,
    color: "success link-light",
    desc: "The Leadership, Entrepreneurship and Business (LEB) Roadshow is a programme designed to empower the youth through mentorship, training and career guidance, equipping them with the requisite skills and creating meaningful opportunities to become responsible individuals, living purpose-driven lives. The Leadership, Entrepreneurship and Business Roadshow’ 2022 has an intentional focus on students in the ten technical universities within the country.",
    stack: [
      {
        icon: <FaLaravel size={25} className="success-primary" />,
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
    img: portfolio,
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
    img: norgence,
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
          <Route
            exact
            path="/"
            element={<Home projectList={projectList} />}
          ></Route>
          <Route
            exact
            path="/project-details/:id"
            element={<ProjectDetails projectList={projectList} />}
          />
        </Route>

        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>
    </Router>
  );
};
export default App;
