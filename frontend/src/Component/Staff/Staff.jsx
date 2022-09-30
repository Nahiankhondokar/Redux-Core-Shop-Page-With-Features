import React from 'react';
import { Container, Row, Col, Table, Card, Button } from 'react-bootstrap';
import StaffModal from './StaffModal/StaffModal';

const Staff = () => {
  return (
    <>
    <StaffModal></StaffModal>

      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <h4 className='text-center'>All Staffs</h4>
              </Card.Header>
              <Card.Body className='student-table shadow'>
                  <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Staff</th>
                            <th>Skill</th>
                            <th>Student</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          {/* <Button variant='info'> <FontAwesomeIcon icon={ faEye }></FontAwesomeIcon> </Button>
                          <Button variant='warning'> <FontAwesomeIcon icon={ faEdit }></FontAwesomeIcon> </Button>
                          <Button variant='danger'> <FontAwesomeIcon icon={ faTrash }></FontAwesomeIcon> </Button> */}
                        </td>
                      </tr>
                    

                    </tbody>
                </Table>
              </Card.Body>
              <Button onClick='' variant='info'>Add Staff</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default Staff;