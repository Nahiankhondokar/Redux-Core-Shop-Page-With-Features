import React, { useEffect, useState } from 'react';
import { Card, Table, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Product = () => {



  return (
    <>
      <Link to="/admin/add-product" className='btn btn-info btn-sm mb-2' variant='info'>Add Product</Link>
      <Card>
        <Card.Header>
          <h4 className='text-center'>All Product</h4>
        </Card.Header>
        <Card.Body className='student-table shadow'>
            <Table>
              <thead>
                  <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>SPrice</th>
                      <th>Category</th>
                      <th>Tag</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
              
                <tr>
                    <td></td>
                    <td>fdsgfdgdfg</td>
                    <td>555</td>
                    <td>444</td>
                    <td>
                      gdfgdfg
                    </td>
                    <td>
                      dsfdfdsf
                    </td>
                    <td>
                      <Link to={ `/admin/product-view/` } className='btn btn-info btn-sm' variant='primary'>view</Link>
                      <Link to={ `/admin/product-edit/` } className='btn btn-warning btn-sm' variant='warning'>Edit</Link>
                      <Button onClick="" className='btn-sm' variant='danger'>Delete</Button>
                    </td>
                  </tr>

              </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  )
};

export default Product;