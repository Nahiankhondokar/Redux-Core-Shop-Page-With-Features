import React, { Component } from 'react'
import { Form, Modal, Button } from 'react-bootstrap';

class StudentModal extends Component {


  render() {

    const { show } = this.props;

    return (
      <>
      <Modal show={ true }>
          <Modal.Body>
            <h1>Hello world </h1>
          </Modal.Body>
      </Modal>
      </>
    )
  }
}

export default StudentModal;