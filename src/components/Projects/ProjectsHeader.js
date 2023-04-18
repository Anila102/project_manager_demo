import React, { useState } from 'react';
import styled from 'styled-components';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { BsFillGearFill,BsFillFilterSquareFill } from "react-icons/bs";
import { Button } from 'react-bootstrap';
import ProjectModal from './ProjectModal';

const MainContent = styled.div`
position:sticky
transition: 350ms;
position:fixed
display:inline-flex;
align-items:center;
margin-left: ${({ isOpen }) => (isOpen ? '200px' : '0px')};
`;

const BreadcrumbStyle = { 
justifyContent:'flex-end',
    alignItems:'center',
    padding: '2px',
    width: '100%',
    display: 'flex',
backgroundColor:'#E4E4E4',


}
const BreadcrumbItemStyle = {
    display:'flex',
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

export default function ProjectsHeader({ theme, isOpen,setProjectTitle,projectTitle }) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    return (
        <><MainContent isOpen={isOpen} className='mx-3' >
            <Breadcrumb style={BreadcrumbStyle}>
                {/* <Breadcrumb.Item style={BreadcrumbItemStyle} to="">Home</Breadcrumb.Item>
                <Breadcrumb.Item style={BreadcrumbItemStyle} >Data</Breadcrumb.Item> */}
            <div style={{ display: 'flex', alignItems: 'center', marginTop:'5px' }}>
                <Button className='px-4' style={ButtonStyle} onClick={handleShow}>Create a Project</Button>
                {show && <ProjectModal show={show} setShow={setShow} projectTitle={projectTitle} theme={theme} setProjectTitle={setProjectTitle} handleShow={handleShow} />}

                <Button style={ButtonStyle}><BsFillGearFill color={theme.colors.white} /></Button>
                <Button style={ButtonStyle}><BsFillFilterSquareFill color={theme.colors.white} /></Button>
                </div>
            </Breadcrumb>




        </MainContent></>
    )
}
