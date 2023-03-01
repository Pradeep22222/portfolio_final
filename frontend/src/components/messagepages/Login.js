import React from 'react'
import Button from "react-bootstrap/Button";


import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
export const Login = () => {
  return (
    <div>
      {/* left to apply class center in the row below */}
        <Row className="text-center ">
          <Col md={1} sm={0}></Col>
          <Col sm={6} md={5}>
            <Form.Group className="mb-3" controlId="formBasicemail">
              <Form.Label > Email </Form.Label>
              <Form.Control
                className="text-center"
                type="text"
                placeholder="example@mail.com"
                required
              />
            </Form.Group>
          </Col>
          <Col sm={6} md={5}>
            <Form.Group className="mb-3" controlId="formBasicpassword">
              <Form.Label> Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="**********"
                className="text-center"
              />
            </Form.Group>
          </Col>
          <Col md={1} sm={0}></Col>
          <Col md={1} sm={0}></Col>

          <Col sm={12} md={10}>
            <Button id="message_button" variant="none" type="submit">
              Login
            </Button>
          </Col>
          <Col md={1} sm={0}></Col>
        </Row>
      
    </div>
  );
}
