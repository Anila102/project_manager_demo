import React from 'react'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function Project({title,theme}) {
    
const Cards = styled(Card)`
border:2px solid ${theme.colors.main}


`;
const Body = styled(Card.Body)`
padding:0
`;
const Title = styled(Card.Title)`
color: red;
padding:8px;
border-bottom:1px solid ${theme.colors.main}
`;
const StyledText = styled(Card.Text)`

font-size: 16px;
display:flex;

`;
const Coulmn = styled(Card.Text)`
list-style: none; 
padding:12px
`;
const ListItem = styled.li`
padding:1px
`;

  return (
    <>
    <div className='row'>
    <Cards className="col-sm-4">
      <Body>
        <Title>{title}</Title>
        <StyledText>
         <Coulmn>
            <ListItem>Manager:</ListItem>
            <ListItem>Client:</ListItem>
            <ListItem>LOI:</ListItem>
            <ListItem>Invite | Response:</ListItem>
            <ListItem>Completed:</ListItem>
            <ListItem>Incidence:</ListItem>
         </Coulmn>
         <Coulmn>
            <ListItem>Manager</ListItem>
            <ListItem>123 Research Ltd.</ListItem>
            <ListItem>[hh:mm:ss]</ListItem>
            <ListItem>123,456|65,768</ListItem>
            <ListItem>521/600</ListItem>
            <ListItem>15%/20%</ListItem>
         </Coulmn>
        </StyledText>
        <Button variant="primary">Go somewhere</Button>
      </Body>
    </Cards>
    </div>
    </>
  )
}
