import React, { useState } from "react";
import { useLongPress } from "use-long-press";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { postAPILogins } from "../../helpers/axiosHelper.js";
import { useNavigate } from "react-router";
export const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  // const handleOnSubmit = async (e) => {
  //   e.preventDefault();
  //   return navigate("/messageBoard");
  //   const result = await postAPILogins(form);

  // };
 const bind = useLongPress(async() => {
   navigate("/messageBoard");
    const result = await postAPILogins(form);

 });
  return (
    <div>
      {/* left to apply class center in the row below */}
      <Form className="center">
        <Row className="text-center ">
          <Col md={1} sm={0}></Col>
          <Col sm={6} md={5}>
            <Form.Group className="mb-3" controlId="formBasicloginemail">
              <Form.Label> Email </Form.Label>
              <Form.Control
                className="text-center"
                type="email"
                placeholder="example@mail.com"
                required
                onChange={handleOnChange}
                name="email"
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
                onChange={handleOnChange}
                name="password"
              />
            </Form.Group>
          </Col>
          <Col md={1} sm={0}></Col>
          <Col md={1} sm={0}></Col>

          <Col sm={12} md={10}>
            <Button  {...bind()} id="login_button" variant="none" type="submit">
              Login
            </Button>
          </Col>
          <Col md={1} sm={0}></Col>
        </Row>
      </Form>
    </div>
  );
};
