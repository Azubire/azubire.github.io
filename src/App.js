import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './assets/css/App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from './components/layout/Layout';
import Home from './components/main/Home';
import ProjectDetails from './components/main/ProjectDetails';
import p1 from "./assets/img/project3.png";
import p2 from "./assets/img/mobile01.png";
import p3 from "./assets/img/software.png";
import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaBootstrap,
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "E-Commerce",
    img: p2,
    color: "primary link-light",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident assumenda neque eius molestiae blanditiis quas sequi sunt omnis autem officiis fugit, id officia consequatur numquam",
    stack: [
      {
        icon: <FaReact size={25} className="text-primary" />,
        name: "React.js",
      },
      {
        icon: <FaNodeJs size={25} className="text-primary" />,
        name: "Node.js",
      },
      {
        icon: <FaPhp size={25} className="text-primary" />,
        name: "PHP",
      },
    ],
    address: "https://blabla.github.io",
  },
  {
    id: 2,
    name: "CloudBooks",
    img: p3,
    color: "warning link-dark",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident assumenda neque eius molestiae blanditiis quas sequi sunt omnis autem officiis fugit, id officia consequatur numquam",
    stack: [
      {
        icon: <FaPhp size={25} className="text-warning" />,
        name: "PHP",
      },
      {
        icon: <FaNodeJs size={25} className="text-warning" />,
        name: "Node.js",
      },
    ],
    address: "https://blabla.github.io",
  },
  {
    id: 3,
    name: "CloudBlog",
    img: p1,
    color: "danger link-light",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident assumenda neque eius molestiae blanditiis quas sequi sunt omnis autem officiis fugit, id officia consequatur numquam",
    stack: [
      {
        icon: <FaReact size={25} className="text-danger" />,
        name: "React.js",
      },
      {
        icon: <FaPhp size={25} className="text-danger" />,
        name: "PHP",
      },
      {
        icon: <FaLaravel size={25} className="text-danger" />,
        name: "Laravel",
      },
      {
        icon: <FaBootstrap size={25} className="text-danger" />,
        name: "Bootstrap",
      },
    ],
    address: "https://blabla.github.io",
  },

  {
    id: 4,
    name: "E-Lighter",
    img: p2,
    color: "secondary link-light",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident assumenda neque eius molestiae blanditiis quas sequi sunt omnis autem officiis fugit, id officia consequatur numquam",
    stack: [
      {
        icon: <FaReact size={25} className="text-secondary" />,
        name: "React.js",
      },
      {
        icon: <FaNodeJs size={25} className="text-secondary" />,
        name: "Node.js",
      },
      {
        icon: <FaPhp size={25} className="text-secondary" />,
        name: "PHP",
      },
    ],
    address: "https://blabla.github.io",
  },
];

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [projectList] = useState(projects);

    var dark;
    const boolean = localStorage.getItem('isDarkMode');
    if(boolean === 'true'){
      dark = true;
    }else{
      dark = false;
    }

    useEffect(()=>{
      dark ? setIsDarkMode(true) : setIsDarkMode(false);
    },[dark])
  
  
  
    return (
      <Router>
        <Routes>
          <Route
            path="/portfolio/"
            element={
              <Layout setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}>
                <Outlet />
              </Layout>
            }
          >
            <Route path="/portfolio" element={<Home projectList={projectList}/>}></Route>
            <Route path='/porfolio/project-details/:id' element={<ProjectDetails projectList={projectList}/>}/>
          </Route>
          <Route path="*" element={<h1>404</h1>}></Route>
        </Routes>
      </Router>
    );
}
export default App;
