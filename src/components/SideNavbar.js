import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillHouseFill, BsFillBarChartFill, BsFillPeopleFill, BsFillCalendarCheckFill, BsGrid1X2Fill } from "react-icons/bs";

const theme = {
  colors: {
    main: '#ED8154',
    white: '#FAFAFA',
    black: '#000000',
    background: '#E4E4E4',
    grey: 'rgb(166 162 162)',
  },
};
const iconStyle = {
  marginRight: '1rem',

};

const sideData = [
  {
    path: "/",
    name: 'Projects',
    icon: <BsGrid1X2Fill color={theme.colors.main} style={{ ...iconStyle, borderLeft: `2px solid ${theme.colors.main}` }} />,
    status: 'active'
  },
  {
    path: "/",
    name: 'Schedule',
    icon: <BsFillCalendarCheckFill color={theme.colors.grey} style={iconStyle} />,
    status: 'notActive'
  },
  {
    path: "/",
    name: 'Panel',
    icon: <BsFillPeopleFill color={theme.colors.grey} style={iconStyle} />,
    status: 'notActive'
  },
  {
    path: "/",
    name: 'Survey',
    icon: <BsFillBarChartFill color={theme.colors.grey} style={iconStyle} />,
    status: 'notActive'
  },
]


const Sidebar = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  bottom: 0;
  width: 200px;
  background-color: ${props => props.theme.colors.white};
  padding: 20px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
`;

const SidebarLink = styled.a`
  display: flex;
  align-items:center;
  color:  ${props => props.theme.colors.black};
  padding: 10px;
  margin-bottom: 10px;
  text-decoration: none;
  cursor:pointer;
  
  &:hover {

    color: ${props => props.theme.colors.main};
  }
 
 
`;

const SideNavbar = ({ theme, isOpen }) => {
  return (
    <>

      <Sidebar open={isOpen ? 'open' : ''}>
        <SidebarLink to="/"> <BsFillHouseFill color={theme.colors.grey} style={iconStyle} />Home</SidebarLink>

        <h6 className='mb-4'>Systems</h6>
        {sideData.map((item, index) => (

          
            item.status === "active" ?
             <SidebarLink key={index} to={item.path} style={{borderLeft:`2px solid ${theme.colors.main}`, color:theme.colors.main}}> {item.icon} {item.name}</SidebarLink> 
              
              : 
              <SidebarLink key={index} to={item.path}>
            {item.icon} {item.name}</SidebarLink>
          

        ))}

      </Sidebar>

    </>
  );
};

export default SideNavbar;
