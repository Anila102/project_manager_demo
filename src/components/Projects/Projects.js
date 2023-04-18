import React from 'react';
import styled from 'styled-components';
import ProjectsHeader from './ProjectsHeader';
import Project from './Project';


const MainContent = styled.div`
margin-left: ${({ isOpen }) => (isOpen ? '200px' : '0px')};
padding: 1rem;
transition: 350ms;
position:fixed
height:100%
width: ${({ isOpen }) => (isOpen ? 'calc(100% - 200px)' : '100vw')};
background-color:${props => props.theme.colors.background}
`;

export default function Projects({isOpen,theme}) {
  return (
    <>
      <MainContent isOpen={isOpen}>
    <ProjectsHeader  isOpen={isOpen} theme={theme} />
    <div className='row'>
    
        <Project theme={theme} title={`[CODE]-[PROJECT NAME]`} />
        <Project theme={theme} title={`[CODE]-[PROJECT NAME]`} />
        <Project theme={theme} title={`[CODE]-[PROJECT NAME]`} />
        <Project theme={theme} title={`[CODE]-[PROJECT NAME]`} />
        <Project theme={theme} title={`[CODE]-[PROJECT NAME]`} />
        <Project theme={theme} title={`[CODE]-[PROJECT NAME]`} />
        </div>
      </MainContent>
    </>
  )
}
