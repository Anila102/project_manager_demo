import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
export default function  ProjectModal({theme,show,setShow,setProjectTitle, projectTitle}) {
  const [errorMessage, setErrorMessage] = useState('');
const inputRef = useRef(null);
  const handleClose = () => setShow(false);
  const handleSave = () => {
    const inputValue = inputRef.current.value;
    if(inputValue){
    setProjectTitle([inputValue,...projectTitle]);
     setShow(false)
    }else {
      setErrorMessage('Please enter a project name');
    }
  }
  return (
    <>
     

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header style={{backgroundColor:theme.colors.main}} closeButton>
          <Modal.Title style={{backgroundColor:theme.colors.main}}></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                ref={inputRef}
                type="text"
                placeholder="Write Something"
                autoFocus
              />
                {errorMessage && <Form.Text className="text-danger">{errorMessage}</Form.Text>}
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor:theme.colors.white, border:`1px solid ${theme.colors.main}` , color:theme.colors.main}}  onClick={handleClose}>
            Close
          </Button>
          <Button style={{backgroundColor:theme.colors.main, border:`1px solid ${theme.colors.main}`}} onClick={handleSave}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
