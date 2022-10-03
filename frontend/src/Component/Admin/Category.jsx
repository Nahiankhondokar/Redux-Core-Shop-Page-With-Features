import React, { useState } from 'react';
import { Card, Table, Button, Container, Row, Col, Form, CloseButton } from 'react-bootstrap';
import axios from 'axios';
import { successToaster } from '../Toaster/Toaster';
import { useDispatch, useSelector } from 'react-redux';
import { GrView, GrEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { addCategory } from '../../redux/category/actions';

const Category = () => {

  // get category data from redux
  const { categories } = useSelector(state => state.all_category);
  // console.log(dta)

  // dispatch
  const dispatch = useDispatch();

  // category add or edit form show
  const [ catForm, setCatForm ] = useState(false);
  const [ catEditForm, setCatEditForm ] = useState(false);

  // categroy addd from show
  const handleCatAdd = () => {
    setCatForm(true);
  }

  // input data get 
  const [inputData, setInputData] = useState({
    name : '',
    slug : '',
    photo : ''
  });


  // handle cat input
  const handleCatInput = (e) => {
    setInputData((prev) => ({
      ...prev,
      [e.target.name] : e.target.value
    }));
  }


  // category submit
  const handleCatSubmit = async (e) => {
    e.preventDefault();

    try {

      await axios.post('http://localhost:5050/api/v1/category', inputData)
      .then(data => {

        setCatForm(false);
        setInputData({
          name : ''
        });

        successToaster('Category Added Successful');

        // redux update
        dispatch(addCategory(data.data.cat))
        
      });

    } catch (error) {
      console.log(error);
    }

  }


  return (
    <>
    <Button onClick={ handleCatAdd } className='btn-sm mb-2' variant='info'>Add Category</Button>
    <Card>
    <Card.Header>
      <h4 className='text-center'>All Categories</h4>
    </Card.Header>
    <Card.Body className='student-table shadow'>
        <Table>
          <thead>
              <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Slug</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>

           {
            categories.map((value, key) => 
              <tr>
                <td>{ key + 1 }</td>
                <td>{ value.name }</td>
                <td>{ value.slug }</td>
                <td>
                  <Button onClick="" className='btn-sm' variant='warning'> <GrEdit /> </Button>
                  <Button onClick="" className='btn-sm' variant='danger'> <AiFillDelete /> </Button>
                </td>
              </tr> 
            )
           }

          </tbody>
      </Table>
    </Card.Body>
    </Card>

    {/* Category Add Form */}

    {
      catForm && 
      <Container>
        <Row>
          <Col md={ 4 } className='mt-3'>
            <Card className='shadow p-3'>
              <div className="addCat">
                <CloseButton onClick={() => setCatForm(false) }></CloseButton>
                <h4 className='mt-2 text-center'>Add Category</h4>
                  <Form onSubmit={ handleCatSubmit } method='POST'>
              
                    <Form.Group>
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control name="name" value={ inputData.name } onChange={ handleCatInput }></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='info' className='btn-sm mt-3 text-center'>Add Category</Button>

                  </Form>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>

    }


        {/* Category Edit Form */}

    {
      catEditForm && 
      <Container>
        <Row>
          <Col md={ 6 } className='m-auto mt-3'>
            <Card className='shadow p-3'>
              <div className="addCat">
                <h2 className='mt-2 text-center'>Edit Category</h2>
                  <hr />
                  <Form onSubmit="" method='POST'>
              
                    <Form.Group>
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control value="" onChange=""></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='info' className='btn-sm mt-3 text-center'>Update Category</Button>

                  </Form>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>

    }

    </>
  )
};

export default Category;