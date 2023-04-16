import React from 'react';
import styled from 'styled-components';


const MainContent = styled.div`
margin-left: ${({ isOpen }) => (isOpen ? '200px' : '0px')};
padding: 1rem;
transition: 350ms;
position:fixed
height:100%
width: ${({ isOpen }) => (isOpen ? 'calc(100% - 200px)' : '100%')};
background-color:${props => props.theme.colors.background}
`;

export default function Projects({isOpen}) {
  return (
    <>
      <MainContent isOpen={isOpen}>
        <h2>Welcome to my app</h2>
        <p>Here's some content...</p>
      </MainContent>
    </>
  )
}
