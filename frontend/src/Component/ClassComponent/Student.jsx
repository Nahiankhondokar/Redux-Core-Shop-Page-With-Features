import React, { Component } from 'react'
import { Card, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StudentModal from './StudentModal';

class Student extends Component {
    constructor(props){
        super(props);

      // Modal manage state
      this.state = {
        modal : false
      }


    }

   
  render() {

    const { modal } = this.state;


    const handleModalShow = (e) => {
        e.preventDefault();

        this.setState = {
            modal : true
        }
    }


    return (
        <>
        <StudentModal show={ modal } />
        <a href='' className='btn btn-info btn-sm mb-2' variant='info' onClick={ (e) => handleModalShow(e) }>Add Product</a>
        <Card>
          <Card.Header>
            <h4 className='text-center'>All Student</h4>
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
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                      <Button onClick='' className='btn-sm' variant='info'>View</Button>
                      <Button onClick='' className='btn-sm' variant='warning'>Edit</Button>
                      <Button onClick='' className='btn-sm' variant='danger'>Delete</Button>
                      </td>
                    </tr>
                
  
                </tbody>
            </Table>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default Student;