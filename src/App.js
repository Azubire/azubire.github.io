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
import { FaReact, FaPhp, FaLaravel } from "react-icons/fa";
import { DiJqueryLogo, DiMysql, DiJavascript } from "react-icons/di";

const projects = [
  {
    id: 1,
    name: "The-Leb-Africa",
    img: lebafrica,
    color: "primary link-light",
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
    img: portfolio,
    color: "danger link-light",
    desc: "This is a portfolio website I developed recently. My previous portfolio was built with laravel, this particular one was rebuit from scratch",
    stack: [
      {
        icon: <FaReact size={25} className="text-danger" />,
        name: "React.js",
      },
    ],
    github: "https://github.com/Azubire/portfolio",
    siteUrl: "https://azubire.github.io/portfolio/",
  },

  {
    id: 2,
    name: "Norgence Academy",
    img: norgence,
    color: "warning link-dark",
    desc: "I developed this web app during my period as a intern at Norgence Inc. Norgence Inc runs an academy that offers training in Software Development,Basic IT Proficiency, Networking etc, This wep app was developed purposely to manage the recruitment of students. This application is hosted locally on the company's sever",
    stack: [
      {
        icon: <FaPhp size={25} className="text-warning" />,
        name: "PHP",
      },
      {
        icon: <DiJqueryLogo size={25} className="text-warning" />,
        name: "jQuery",
      },
      {
        icon: <DiJavascript size={25} className="text-warning" />,
        name: "javaScript",
      },
      {
        icon: <DiMysql size={25} className="text-warning" />,
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
