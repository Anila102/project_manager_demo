import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
export default function ProjectModal({theme,show,setShow, handleShow}) {
//   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

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
                type="text"
                placeholder="Write Something"
                autoFocus
              />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor:theme.colors.white, border:`1px solid ${theme.colors.main}` , color:theme.colors.main}}  onClick={handleClose}>
            Close
          </Button>
          <Button style={{backgroundColor:theme.colors.main, border:`1px solid ${theme.colors.main}`}} onClick={handleClose}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
