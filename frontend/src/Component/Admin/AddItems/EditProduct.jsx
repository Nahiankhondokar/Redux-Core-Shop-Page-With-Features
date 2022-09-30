import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const EditProduct = () => {

  

  return (
    <>
    <Container>
        <Link to='/admin/product' className='btn btn-primary btn-sm mb-2' variant='info'>All Product</Link>
        <Row>
          <Col md={ 6 } className='m-auto mt-3'>
            <Card className='shadow p-3'>
              <div className="addCat">
                <h2 className='mt-2 text-center'>Edit Product</h2>
                  <hr />
                  <Form onSubmit='' method='POST'>
              
                    <Form.Group>
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control value='' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type='hidden' value=''></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control value='' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>sale Price</Form.Label>
                        <Form.Control value='' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type='number' value='' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Categroy</Form.Label>
                        <select className='form-control' name="" id="" value=''>
                            <option value="">-select-</option>
                           
                        </select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tag</Form.Label>
                        <select  className='form-control' name="" id="" value=''>
                          <option value="">-select-</option>
                           
                        </select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Product Photo</Form.Label>
                        <Form.Control value=''></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Product Description</Form.Label>
                        <textarea value='' class="form-control" rows="3"></textarea>
                    </Form.Group>

                    <Button type='submit' variant='info' className='btn-sm mt-3 text-center'>Update Product</Button>

                  </Form>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default EditProduct;