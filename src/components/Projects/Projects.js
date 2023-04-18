import React,{useState} from 'react';
import styled from 'styled-components';
import ProjectsHeader from './ProjectsHeader';
import Project from './Project';


const MainContent = styled.div`
margin-left: ${({ isOpen }) => (isOpen ? '200px' : '0px')};
padding: 16px;
transition: 350ms;
position:fixed
height:100%
width:10%;
background-color:${props => props.theme.colors.background}
`;

export default function Projects({isOpen,theme}) {
  const [projectTitle, setProjectTitle] = useState([])

  return (
    <>
    <ProjectsHeader  isOpen={isOpen} theme={theme} setProjectTitle={setProjectTitle} projectTitle={projectTitle} />
      <MainContent isOpen={isOpen} className=' d-flex justify-content-center flex-wrap' style={{}}>

    {projectTitle.map((project,index)=>{
     return <Project index={index} key={index} isOpen={isOpen} theme={theme} title={project} setProjectTitle={setProjectTitle} projectTitle={projectTitle} />

    })}
        {/* <Project  isOpen={isOpen} theme={theme} title={`[Hardcoded]-[PROJECT NAME]`} />
        <Project  isOpen={isOpen} theme={theme} title={`[Hardcoded]-[PROJECT NAME]`} /> */}
        {/* <Project  isOpen={isOpen} theme={theme} title={`[CODE]-[PROJECT NAME]`} />
        <Project  isOpen={isOpen} theme={theme} title={`[CODE]-[PROJECT NAME]`} /> */}
   
      </MainContent>
    </>
  )
}
