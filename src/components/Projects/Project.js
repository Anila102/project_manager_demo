import React from 'react'
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { BsTrash3, BsChevronDown } from 'react-icons/bs'
export default function Project({ title, theme, isOpen,setProjectTitle, projectTitle, index}) {
  const MainContent = styled.div`
  display: inline-flex;
  flex-direction: row;

  
  `;

  const Cards = styled(Card)`
    display: flex;
    flex-direction: row;
    padding: 0px !important;
    border: 1px solid ${theme.colors.main};
    border-radius: 10px;
    max-width: 100%;
  `;

  const Body = styled(Card.Body)`
    padding: 0;
    width: 100%;

  `;

  const Title = styled(Card.Title)`
    color: red;
    padding: 8px 12px;
    display: flex;
    justify-content: space-between;
  margin:0;
    font-size: 1rem;
    border-bottom: 1px solid ${theme.colors.main};
  `;

  const StyledText = styled(Card.Text)`
    display: flex;
    max-width: 100%;
    justify-content: space-between;
  `;

  const Column = styled(Card.Text)`
    list-style: none; 
    padding: 10px 10px;
    flex: 1;
    font-size: 0.75rem;
    margin:0
  `;

  const ListItem = styled.li`
    padding: 3px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width:100px
  `;

  const DropDown = {
    marginLeft: '10px'
  }
  const handleDelete=()=>{
    const newList = [...projectTitle];
    newList.splice(index, 1);
    setProjectTitle(newList);

  }
  return (
    <>
      <MainContent className=" m-0" isOpen={isOpen}>
        <Cards className=" mx-2 my-2">
          <Body>
            <Title>
              {title}
              <BsTrash3 style={{cursor:'pointer'}} color={theme.colors.main} onClick={handleDelete} />

            </Title>
            <StyledText>
              <Column>
                <ListItem style={{ fontWeight: '700' }}>Manager:</ListItem>
                <ListItem style={{ fontWeight: '700' }}>Client:</ListItem>
                <ListItem style={{ fontWeight: '700' }}>LOI:</ListItem>
                <ListItem style={{ fontWeight: '700' }}>Invite | Response:</ListItem>
                <ListItem style={{ fontWeight: '700' }}>Completed:</ListItem>
                <ListItem style={{ fontWeight: '700' }}>Incidence:</ListItem>
              </Column>
              <Column>
                <ListItem>Manager</ListItem>
                <ListItem>123 Research Ltd.</ListItem>
                <ListItem>[hh:mm:ss]</ListItem>
                <ListItem>123,456 | 65,768</ListItem>
                <ListItem>521 / 600</ListItem>
                <ListItem>15% / 20%</ListItem>
              </Column>
              <Column style={{ borderLeft: `1px solid ${theme.colors.main}`, marginLeft: '20px' }}>
                <ListItem style={{ color: theme.colors.main }}>Open <BsChevronDown style={DropDown} color={theme.colors.main} /></ListItem>
                <ListItem style={{ color: theme.colors.main }}>Manage  <BsChevronDown style={DropDown} color={theme.colors.main} /></ListItem>
                <ListItem style={{ color: theme.colors.main }}>Insights  <BsChevronDown style={DropDown} color={theme.colors.main} /></ListItem>
                <ListItem style={{ color: theme.colors.main }}>Download  <BsChevronDown style={DropDown} color={theme.colors.main} /></ListItem>
                <ListItem style={{ color: theme.colors.main }}>Setup  <BsChevronDown style={DropDown} color={theme.colors.main} /></ListItem>
                <ListItem style={{ color: 'red' }}>Dispose  <BsChevronDown style={DropDown} color='red' /></ListItem>
              </Column>
            </StyledText>

          </Body>
        </Cards>
      </MainContent>
    </>
  )
}
