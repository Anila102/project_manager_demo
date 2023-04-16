import React from 'react'
import styled from 'styled-components';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { BsFillGearFill } from "react-icons/bs";
import { Button } from 'react-bootstrap';

const MainContent = styled.div`
margin-left: ${({ isOpen }) => (isOpen ? '200px' : '0px')};
padding: 1rem;
transition: 350ms;
position:fixed
height:100%
width: ${({ isOpen }) => (isOpen ? 'calc(100% - 200px)' : '100%')};
background-color:${props => props.theme.colors.background}
display:flex;
justify-content:space-between;
`;

const BreadcrumbStyle = {
    padding: '2px',
    width:'100%',
    display:'flex',
    justifyContent:'space-around'
   
}
const BreadcrumbItemStyle = {
    padding: '10px',
    backgroundColor: 'white',
    border: '1px solid #ED8154',
}
const ButtonStyle = {
    marginRight: '3px',
    marginLeft: '3px',
    border: '1px solid #ED8154',
    backgroundColor: '#ED8154',

}

export default function ProjectsHeader({ theme, isOpen }) {
    return (
        <><MainContent isOpen={isOpen}>
            <Breadcrumb style={BreadcrumbStyle}>
                <Breadcrumb.Item style={BreadcrumbItemStyle} to="">Home</Breadcrumb.Item>
                <Breadcrumb.Item style={BreadcrumbItemStyle} >Data</Breadcrumb.Item>
                <Button style={ButtonStyle}><BsFillGearFill color={theme.colors.white} /></Button>
            <Button style={ButtonStyle}>Create a Project</Button>
            </Breadcrumb>
            



        </MainContent></>
    )
}
