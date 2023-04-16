import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa'; import 'bootstrap/dist/css/bootstrap.min.css';


const Nav = styled.div`
  background-color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  padding: 0 20px;
`;

const NavTitle = styled.h1`
  color:  ${props => props.theme.colors.black};
  font-size: 1.5rem;
`;

const NavIcon = styled.div`
  color:  ${props => props.theme.colors.black};
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 250px;
  background-color: ${props => props.theme.colors.white};
  padding: 20px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
`;

const SidebarLink = styled.a`
  display: block;
  color:  ${props => props.theme.colors.black};
  padding: 10px;
  margin-bottom: 10px;
  text-decoration: none;
`;

const MainContent = styled.div`
margin-left: ${({ open }) => (!open ? '250px' : '0px')};
padding: 1rem;
transition: 350ms;
width: ${({ open }) => (!open ? 'calc(100% - 250px)' : '100%')};
background-color:${props => props.theme.colors.background}
`;

const App = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Nav >
        
          <NavIcon className='mr-3' onClick={() => setOpen(!open)}>
            <FaBars />
            <NavTitle className='mx-3' >
          
          My App</NavTitle>
          </NavIcon>
      </Nav>
      <Sidebar open={open}>
        <SidebarLink href="#">Link 1</SidebarLink>
        <SidebarLink href="#">Link 2</SidebarLink>
        <SidebarLink href="#">Link 3</SidebarLink>
        <SidebarLink href="#">Link 4</SidebarLink>
        <SidebarLink href="#">Link 5</SidebarLink>
      </Sidebar>
      <MainContent>
        <h2>Welcome to my app</h2>
        <p>Here's some content...</p>
      </MainContent>
    </>
  );
};

export default App;
