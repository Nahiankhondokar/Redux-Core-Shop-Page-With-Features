import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './Dash.css';

const Dashboard = () => {
  return (
    <>
    <section className='my-5'>
        <Container>
            <Row>
                <Col md={ 3 } className='shadow dash-menu py-3'>
                    <ul className="list-group pt-4">
                        <li className="list-group-item"><Link to='/admin' href="#">Dashboard</Link></li>
                        <li className="list-group-item"><Link to='/admin/category' href="#">Categroy</Link></li>
                        <li className="list-group-item"><Link to='/admin/tag' href="#">Tag</Link></li>
                        <li className="list-group-item"><Link to='/admin/product' href="#">Product</Link></li>
                        
                    </ul>
                </Col>
                <Col md={ 9 }>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
};

export default Dashboard;