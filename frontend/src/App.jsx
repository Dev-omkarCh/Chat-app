import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="w-10 mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com"/>
      </FloatingLabel>
      
    </>
  )
}

export default App

