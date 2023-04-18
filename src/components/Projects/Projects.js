import React from 'react';
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
  return (
    <>
      <MainContent isOpen={isOpen}>
    <ProjectsHeader  isOpen={isOpen} theme={theme} />

    
        <Project  isOpen={isOpen} theme={theme} title={`[CODE]-[PROJECT NAME]`} />
        <Project  isOpen={isOpen} theme={theme} title={`[CODE]-[PROJECT NAME]`} />
   
      </MainContent>
    </>
  )
}
