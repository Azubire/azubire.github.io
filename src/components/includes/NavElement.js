import { useState } from "react";
import { Link,useLocation } from "react-router-dom";
import { NavLink } from "react-bootstrap";
import {FaUser, FaHome, FaServicestack,FaInfo, FaForward} from 'react-icons/fa'

const List = [
    {
        name: 'Home',
        to: 'home',
        icon: <FaHome/>
    },
    {
        name: 'Skills',
        to: 'skills',
        icon: <FaUser/>
    },
    {
        name: 'Projects',
        to: 'projects',
        icon: <FaServicestack/>
    },
    {
        name: 'About',
        to: 'about',
        icon: <FaForward/>
    }
]

const NavElement = ({className,showIcon,hide,show}) => {
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
            
            return(
            <Link
              key={index}
              to={`/`}
              className={`li nav-link ${className}`}
              onClick={(e) => {
                setTimeout(() => {
                  let page = document.getElementById(item.to);
                  // console.log(page);
                  page && page.scrollIntoView({ behavior: "smooth" });
                  const scroll = window.scrollY;
                  scroll && window.scroll(0, scroll - 72);
                  show && hide();
                }, 0);
                
              }}
            >
              <i className="me-2">{showIcon && item.icon}</i>
              {item.name}
            </Link>
          
            )
          } else {
           return(
            <NavLink
              key={index}
              href={`#${item.to}`}
              className={`li ${className}`}
              onClick={(e) => {
                e.preventDefault();
                let page = document.getElementById(
                  `${e.target.href.split("#")[1]}`
                );
                // console.log(page)
                page && page.scrollIntoView({ behavior: "smooth" });
                const scroll = window.scrollY;
                scroll && window.scroll(0, scroll - 72);
                show && hide();
              }}
            >
              <i className="me-2">{showIcon && item.icon}</i>
              {item.name}
            </NavLink>
           )
          }   
          
        })}
      </>
    );
}

export default NavElement;