import React, { useEffect, useState } from 'react';
import { Card, Table, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { GrView, GrEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

const Product = () => {


  // user selector
  const { products } = useSelector(state => state.all_product);
  // get category data from redux
  const { categories } = useSelector(state => state.all_category);

  // console.log(categories);

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
                      <th>Photo</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
              
              {
                products.map((value, key) => 

                

                  <tr>
                    <td>{ key + 1 }</td>
                    <td>{ value.name }</td>
                    <td>{ value.regular_price }</td>
                    <td>{ value.sale_price }</td>
                    <td>
                     
                    </td>
                    <td>
                      
                    </td>
                    <td>
                      <img style={{width : '30px'}} src={`http://localhost:5050/image/product/${ value.photo }`} alt="" />
                    </td>
                    <td>
                      <Link to={ `/admin/product-view/` } className='btn btn-info btn-sm' variant='primary'><GrView/></Link>
                      <Link to={ `/admin/product-edit/` } className='btn btn-warning btn-sm' variant='warning'> <GrEdit /> </Link>
                      <Button onClick="" className='btn btn-sm btn-danger'> <AiFillDelete /> </Button>
                    </td>
                  </tr>
                )
              }


              </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  )
};

export default Product;