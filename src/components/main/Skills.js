import { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import bg from '../../assets/img/bg2.png'


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
  FaAddressBook,
  FaInternetExplorer,
  FaNodeJs,
  FaHtml5,
  FaJava,
  FaCss3Alt,
  FaDatabase,
  FaCode,
  FaSass,
} from "react-icons/fa";


const mySkills = [
  {
    name: "java",
    i: <FaJava size={50} className='text-primary'/>,
  },
  {
    name: "javScript",
    i: <FaJs size={50} className='text-primary'/>,
  },
  {
    name: "c++",
    i: <FaReact size={50} className='text-primary'/>
  },
  {
    name: "PHP",
    i: <FaPhp size={50} className='text-primary'/>
  },
  {
    name: "Html",
    i: <FaHtml5 size={50} className='text-primary'/>,
  },
  {
    name: "CSS",
    i: <FaCss3Alt size={50} className='text-primary'/>,
  },
  {
    name: "laravel",
    i: <FaLaravel size={50} className='text-primary'/>,
  },
  {
    name: "React",
    i: <FaReact size={50} className='text-primary'/>,
  },
  {
    name: "Next.js",
    i: <FaInternetExplorer size={50} className='text-primary'/>,
  },
  {
    name: "Bootstrap",
    i: <FaBootstrap  size={50} className='text-primary'/>,
  },
  {
    name: "jQuery",
    i: <FaReact size={50} className='text-primary'/>,
  },
  {
    name: "Node.js",
    i: <FaNodeJs size={50} className='text-primary'/>,
  },
  {
    name: "MySql",
    i: <FaDatabase size={50} className='text-primary'/>,
  },
];

const myTools = [
  {
    name: "Git",
    i: <FaGit size={50} className='text-primary'/>,
  },
  {
    name: "VsCode",
    i: <FaCode size={50} className='text-primary'/>,
  },
  {
    name: "GitHub",
    i: <FaGithub size={50} className='text-primary'/>,
  },
  {
    name: "AdobeXD",
    i: <FaAddressBook size={50} className='text-primary'/>,
  },
  {
    name: "Npm",
    i: <FaNpm size={50} className='text-primary'/>,
  },
  {
    name: "Node",
    i: <FaNode size={50} className='text-primary'/>,
  },
  {
    name: "Saas",
    i: <FaSass size={50} className='text-primary'/>,
  },
];
const Skills = () => {
    const [skills] = useState(mySkills);
    const [tools] = useState(myTools);
  
    // console.log(skills)
    return (
        <Container className='position-relative'>
          <img src={bg} alt="bg-vector" className='position-absolute top-0 img-fluid vector'/>
        <Row className='justify-content-between'>
            <h1 className="text-center py-5">Tech Skills</h1>
         {skills.map((item,index)=>{
             const {name,i} = item;

             return(
                 <Col key={index} className='col-md-2 col-3 g-3 d-flex flex-column justify-content-center align-items-center'>
                 {i}
                 <p className='m-0'>{name}</p>
                 </Col>
             )
         })}
            <h1 className='text-center py-5'>Tools</h1>
         {tools.map((tool,index)=>{
             const {name,i} = tool;

             return(
                 <Col key={index} className='col-md-2 col-3 d-flex flex-column justify-content-center align-items-center align-content-center'>
                 {i}
                 <p className='m-0'>{name}</p>
                 </Col>
             )
         })}
        </Row>
      </Container>
    );
}

export default Skills;