import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-bootstrap";
import { FaHome, FaInfo, FaCode, FaTools } from "react-icons/fa";

const List = [
  {
    name: "Home",
    to: "home",
    icon: <FaHome />,
  },
  {
    name: "Skills",
    to: "skills",
    icon: <FaTools />,
  },
  {
    name: "Projects",
    to: "projects",
    icon: <FaCode />,
  },
  {
    name: "About",
    to: "about",
    icon: <FaInfo />,
  },
];

const NavElement = ({ className, showIcon, hide, show }) => {
  const [navList] = useState(List);
  const loc = useLocation();

  // if (loc.pathname.match("/project-details/")) {
  //   console.log(loc);
  // } else {
  //   console.log("No match");
  // }
  // loc.pathname.match("/project-details/") ? return(console.log('ssss');) : return();

  return (
    <>
      {navList.map((item, index) => {
        if (loc.pathname.match("/project-details/")) {
          return (
            <Link
              key={index}
              to={`/`}
              className={`li nav-link ${className}`}
              onClick={(e) => {
                setTimeout(() => {
                  let page = document.getElementById(item.to);
                  const yOffset = -72;
                  const y =
                    page.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                  show && hide();
                }, 0);
              }}
            >
              <i className="me-2">{showIcon && item.icon}</i>
              {item.name}
            </Link>
          );
        } else {
          return (
            <NavLink
              key={index}
              href={`#${item.to}`}
              className={`li ${className}`}
              onClick={(e) => {
                e.preventDefault();
                let page = document.getElementById(item.to);
                const yOffset = -72;
                const y =
                  page.getBoundingClientRect().top +
                  window.pageYOffset +
                  yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
                show && hide();
              }}
            >
              <i className="me-2">{showIcon && item.icon}</i>
              {item.name}
            </NavLink>
          );
        }
      })}
    </>
  );
};

export default NavElement;
