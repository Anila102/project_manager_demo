
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import React from 'react';
import { FaBars } from 'react-icons/fa';
 import {BsPersonCircle} from "react-icons/bs"
const Nav = styled.div`
  background-color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  cursor: pointer;
  padding: 0 20px;
`;

const NavTitle = styled.h1`
  color:  ${props => props.theme.colors.black};
  margin: 0 2%;
  font-size: 1.25rem;
`;

const NavIcon = styled.div`
  color:  ${props => props.theme.colors.black};
  margin:0px 3px;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content:space-between;
  align-items: center;
  width:100%;
 span {
    color: ${props => props.theme.colors.main};
  }
`;

const Navbar = ({theme , toggleSidebar }) => {
    return (
        <>
            <Nav >
                <FaBars onClick={toggleSidebar}/>
                <NavIcon >
                    <NavTitle >
                        <span>Q ONE</span> TECH
                    </NavTitle>
                    <BsPersonCircle color={theme.colors.main} />
                </NavIcon>
            </Nav>
        </>
    )
}
export default Navbar