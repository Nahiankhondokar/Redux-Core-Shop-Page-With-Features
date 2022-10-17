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
  const [ tagEditForm, setTagEditForm ] = useState(false);

  // get tag edit data
  const [ editData, setEditData ] = useState({
    name : '',
    slug : ''
  });
  

  // tag addd from show
  const handleTagForm = (e) => {
    e.preventDefault();
    setTagAddForm(true);
    setTagEditForm(false);
  }

  // tag edit from show
  const handleTagEdit = (id) => {
    const tag = tags.find(item => item._id == id);
    // console.log(editCat);
    setEditData(tag);
    setTagEditForm(true);
    setTagAddForm(false);
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

  // tag update 
  const handleTagUpdate = (e, id) => {
     e.preventDefault();

     dispatch(updateTag(id, editData));

  }


  return (
    <>
    
    <Row>
      <Col md={8}>
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
                        <Button onClick={() => handleTagEdit(value._id)} className='btn-sm' variant='warning'>Edit</Button>
                        <Button onClick='' className='btn-sm' variant='danger'>Delete</Button>
                      </td>
                    </tr>

                  )
                }

                
              </tbody>
          </Table>
        </Card.Body>
      </Card>
      </Col>
      
      {
        tagAddForm && 
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
      }

      {
        tagEditForm && 
        <Col md={ 4 } className='mt-3'>
          <Card className='shadow p-3'>
            <div className="editTag">
            <CloseButton onClick={() => setTagAddForm(false)}></CloseButton>
              <h4 className='mt-2 text-center'>Edit Tag</h4>
                <Form onSubmit={ (e) => handleTagUpdate(e, editData._id) } method='POST'>
                
                  <Form.Group>
                      <Form.Label>Tag Name</Form.Label>
                      <Form.Control value={ editData.name } onChange={ (e) => setInputData({ name : e.target.value }) } ></Form.Control>
                  </Form.Group>
            
                  <Button type='submit' variant='info' className='btn-sm mt-3 text-center'>Update Tag</Button>
            
                </Form>
          
            </div>
          </Card>
        </Col>
      }
      
    </Row>

    </>
  )
};

export default Tag;