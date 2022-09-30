import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';


const AddTag = () => {

   

  return (
    <>
        <section className="add-tag">
        <Container>
            <Row>
                <Col md={ 6 }>
                    <h1>Add New Tag</h1>
                    <hr />
                    <Form onSubmit='' method='POST'>
                
                        <Form.Group>
                            <Form.Label>Tag Name</Form.Label>
                            <Form.Control value='' ></Form.Control>
                        </Form.Group>

                        <Button type='submit' variant='info' className='btn-sm mt-3 text-center'>Add Tag</Button>

                    </Form>
                </Col>
                <Col md={6}></Col>
            </Row>
        </Container>
        </section>
    </>
  )
};

export default AddTag;