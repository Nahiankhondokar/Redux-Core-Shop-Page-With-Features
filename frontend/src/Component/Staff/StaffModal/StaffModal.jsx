import React from 'react';
import { Modal, CloseButton, Form, Button } from 'react-bootstrap';

const StaffModal = () => {
  return (
    <>
    <Modal show='' onHide=''>
        <Modal.Header>
            <h3> Staff Add</h3>
            <CloseButton onClick=''></CloseButton>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit='' method='POST'>
    
                <Form.Group>
                    <Form.Label>Staff</Form.Label>
                    <Form.Control name="name"></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label className='d-block'>Role</Form.Label>
                    <Form.Select name="role">
                        <option value="">-select-</option>
                        <option value="PHP">PHP</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="React">React js</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group>
                    <Form.Label className='d-block'>Student</Form.Label>
                    <Form.Select name="student">
                        <option value="">-select-</option>
                        
                    </Form.Select>
                </Form.Group>

                <Button type='submit' variant='info' className='mt-3 text-center'>Submit</Button>

            </Form>
        </Modal.Body>
    </Modal>
</>
  )
};

export default StaffModal;