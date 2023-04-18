import React from 'react'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {BsTrash3,BsChevronDown} from 'react-icons/bs'
export default function Project({title,theme}) {
    
const Cards = styled(Card)`
padding:0px !important
border:2px solid ${theme.colors.main}
border-radius:10px

`;
const Body = styled(Card.Body)`
padding:0
`;
const Title = styled(Card.Title)`
color: red;
padding:8px 12px;
display:flex;
justify-content:space-between;
font-size:1rem;
border-bottom:1px solid ${theme.colors.main}

`;
const StyledText = styled(Card.Text)`
display:flex;
width:100%
`;
const Column = styled(Card.Text)`
list-style: none; 
padding:5px 15px;
font-size: 0.75rem;
`;

const ListItem = styled.li`
padding:3px 2px;
display:flex;
justify-content:space-between;
align-items:center
`;

  return (
    <>
    <Cards className="col-4 mx-1 my-2">
      <Body>
        <Title>
            {title}
          <div className=''>
            <BsTrash3 color={theme.colors.main} />
            </div>
        
        </Title>
        <StyledText>
         <Column>
            <ListItem style={{fontWeight:'600px'}}>Manager:</ListItem>
            <ListItem>Client:</ListItem>
            <ListItem>LOI:</ListItem>
            <ListItem>Invite | Response:</ListItem>
            <ListItem>Completed:</ListItem>
            <ListItem>Incidence:</ListItem>
         </Column>
         <Column>
            <ListItem>Manager</ListItem>
            <ListItem>123 Research Ltd.</ListItem>
            <ListItem>[hh:mm:ss]</ListItem>
            <ListItem>123,456|65,768</ListItem>
            <ListItem>521/600</ListItem>
            <ListItem>15%/20%</ListItem>
         </Column>
         <Column style={{borderLeft:`1px solid ${theme.colors.main}`, flexGrow:2}}>
         <ListItem style={{color:theme.colors.main}}>Open <BsChevronDown color={theme.colors.main} /></ListItem>
            <ListItem style={{color:theme.colors.main}}>Manage  <BsChevronDown color={theme.colors.main} /></ListItem>
            <ListItem style={{color:theme.colors.main}}>Insights  <BsChevronDown color={theme.colors.main} /></ListItem>
            <ListItem style={{color:theme.colors.main}}>Download  <BsChevronDown color={theme.colors.main} /></ListItem>
            <ListItem style={{color:theme.colors.main}}>Setup  <BsChevronDown color={theme.colors.main} /></ListItem>
            <ListItem style={{color:'red'}}>Dispose  <BsChevronDown color='red' /></ListItem>
         </Column>
        </StyledText>
      
      </Body>
    </Cards>
  
    </>
  )
}
