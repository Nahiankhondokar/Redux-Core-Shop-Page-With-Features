import React, { useEffect, useState } from 'react';
import { Card, Table, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const ViewProduct = () => {

 
  return (
    <>
    <Container>
        <Link to='/admin/product' className='btn btn-primary btn-sm mb-2' variant='info'>All Product</Link>
        <Row>
          <Col md={ 6 } className='m-auto mt-3'>
            <Card className='shadow p-3'>
              <div className="addCat">
                    <Card>
                        <Card.Header>
                        <h2 className='text-center'>Single Product</h2>
                        </Card.Header>
                        <Card.Body>
                            <Row className='profile-area'> 
                            <Col md={4} className='img-separetor'>
                                <img src="https://i.pinimg.com/originals/cd/9a/1d/cd9a1dde8fcbea8d3b290220615348c1.jpg" alt="" />
                            </Col>
                            <Col md={8}>
                                <div className="user-profile">
                                <ul style={{fontSize : '16px', listStyle : 'none'}} className="profile-info">
                                    <li>Name  <span><b>: </b></span>name</li>
                                    <li>Price  <span><b>: </b></span>3423</li>
                                    <li>Sale  <span><b>: </b></span> 1312</li>
                                    <li>Category  <span><b>: </b></span> 
                                    CAtegory
                                    </li>
                                    <li>Tag  <span><b>: </b></span> 
                                    Tags
                                    </li>
                                </ul>
                                </div>
                            </Col>
                            </Row>
                        </Card.Body>
                    </Card>
              </div>
            </Card>
          </Col>
        </Row>
    </Container>
    </>
  )
};

export default ViewProduct;