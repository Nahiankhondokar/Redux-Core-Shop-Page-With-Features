import React, { useEffect, useState } from 'react';
import { Card, Table, Button, Container, Row, Col, Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { GrView, GrEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { deleteProduct, editProduct } from '../../redux/product/actions';

const Product = () => {

  // use dispatch
  const dispatch = useDispatch();

  // user selector
  const { products } = useSelector(state => state.all_product);
  // get category data from redux
  const { categories } = useSelector(state => state.all_category);
  // console.log(categories);

  // product delete 
  const handleDeleteProduct = (id) => {
    // e.preventDefault();

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        dispatch(deleteProduct(id));
      }
    });
  }


  // product edit 
  const handleEditProduct = (id) => {
    dispatch(editProduct(id));
  }

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
                      <Link to={ `/admin/product-edit/${value._id}` } className='btn btn-warning btn-sm' variant='warning' onClick={(e) => handleEditProduct(value._id)}> <GrEdit /> </Link>
                      <Button onClick={(e) => handleDeleteProduct(value._id)} className='btn btn-sm btn-danger'> <AiFillDelete /> </Button>
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