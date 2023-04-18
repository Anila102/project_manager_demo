import React, { useState } from 'react';
import styled from 'styled-components';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { BsFillGearFill,BsFillFilterSquareFill } from "react-icons/bs";
import { Button } from 'react-bootstrap';
import ProjectModal from './ProjectModal';

const MainContent = styled.div`
transition: 350ms;
position:fixed
display:flex;
justify-content:space-between;
`;

const BreadcrumbStyle = {
    padding: '2px',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',

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
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    return (
        <><MainContent isOpen={isOpen}>
            <Breadcrumb style={BreadcrumbStyle}>
                <div>
                {/* <Breadcrumb.Item style={BreadcrumbItemStyle} to="">Home</Breadcrumb.Item>
                <Breadcrumb.Item style={BreadcrumbItemStyle} >Data</Breadcrumb.Item> */}
                </div>
            <div>
                <Button style={ButtonStyle} onClick={handleShow}>Create a Project</Button>
                {show && <ProjectModal show={show} setShow={setShow} theme={theme} handleShow={handleShow} />}

                <Button style={ButtonStyle}><BsFillGearFill color={theme.colors.white} /></Button>
                <Button style={ButtonStyle}><BsFillFilterSquareFill color={theme.colors.white} /></Button>
                </div>
            </Breadcrumb>




        </MainContent></>
    )
}
