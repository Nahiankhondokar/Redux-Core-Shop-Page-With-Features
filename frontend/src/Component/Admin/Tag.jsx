import React, { useState } from 'react';
import { Card, Table, Button, Form, Container, Row, Col, CloseButton } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addTag } from '../../redux/tag/actions';

const Tag = () => {

  // get category data from redux
  const { tags } = useSelector(state => state.all_tag);

  // use dispatch
  const dispatch = useDispatch();

  // tag add or edit form show
  const [ tagAddForm, setTagAddForm ] = useState(false);
  // const [ tagEditForm, setTagEditForm ] = useState(false);

  // tag addd from show
  const handleTagForm = (e) => {
    e.preventDefault();
    setTagAddForm(true);
  }

  // input data get 
  const [inputData, setInputData] = useState({
    name : '',
    slug : '',
    photo : ''
  });


  // category submit
  const handleTagSubmit = async (e) => {
    e.preventDefault();

    try {

      await axios.post('http://localhost:5050/api/v1/tag', inputData)
      .then(data => {

        setTagAddForm(false);
        setInputData({
          name : ''
        });

        // redux update
        dispatch(addTag(data.data.tag));
        
      });

    } catch (error) {
      console.log(error);
    }

  }



  return (
    <>
    <a href="#" className='btn btn-primary btn-sm mb-2' onClick={ handleTagForm } variant='info'>Add Tag</a>
    <Card>
    <Card.Header>
      <h3 className='text-center'>All Tags</h3>
    </Card.Header>
    <Card.Body className='student-table shadow'>
        <Table>
          <thead>
              <tr>
                  <th>#</th>
                  <th>Tag Name</th>
                  <th>Slug</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>

            {
              tags.map((value, key) =>
                <tr>
                  <td>{ key + 1 }</td>
                  <td>{ value.name }</td>
                  <td>{ value.slug }</td>
                  <td>
                    <Button onClick='' className='btn-sm' variant='warning'>Edit</Button>
                    <Button onClick='' className='btn-sm' variant='danger'>Delete</Button>
                  </td>
                </tr>

              )
            }

            
          </tbody>
      </Table>
    </Card.Body>

    
    </Card>


    {/* Tag Add Form */}

    {
      
      tagAddForm && 
      <Container>
        <Row>
          <Col md={ 4 } className='mt-3'>
            <Card className='shadow p-3'>
              <div className="editTag">
              <CloseButton onClick={() => setTagAddForm(false)}></CloseButton>
                <h4 className='mt-2 text-center'>Add Tag</h4>
                  <Form onSubmit={ handleTagSubmit } method='POST'>
                  
                    <Form.Group>
                        <Form.Label>Tag Name</Form.Label>
                        <Form.Control value={ inputData.name } onChange={ (e) => setInputData({ name : e.target.value }) } ></Form.Control>
                    </Form.Group>
              
                    <Button type='submit' variant='info' className='btn-sm mt-3 text-center'>Add Tag</Button>
              
                  </Form>
            
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
          
    }


    {/* Tag Edit Form */}
{/* 
    {
      tagEditForm && 
    <Container>
      <Row>
        <Col md={ 6 } className='m-auto mt-3'>
          <Card className='shadow p-3'>
            <div className="editTag">
              <h2 className='mt-2 text-center'>Edti Tag</h2>
                <hr />
                <Form onSubmit="" method='POST'>
            
                  <Form.Group>
                      <Form.Label>Tag Name</Form.Label>
                      <Form.Control value=''></Form.Control>
                  </Form.Group>

                  <Form.Group>
                      <Form.Control type='hidden' value=''></Form.Control>
                  </Form.Group>

                  <Button type='submit' variant='info' className='btn-sm mt-3 text-center'>Update Tag</Button>

                </Form>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
    } */}

    </>
  )
};

export default Tag;