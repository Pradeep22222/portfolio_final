import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
export const ContactForm = () => {
  return (
    <div>
      <Form className="mt-3">
        <Form.Text className="text-muted">Your details are kept safe</Form.Text>
        <Row>
          <Col md={1} sm={0}></Col>
          <Col sm={6} md={5}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="required"> First Name</Form.Label>
              <Form.Control
                className="text-center"
                type="text"
                placeholder="First Name"
                required
                name="firstName"
              />
            </Form.Group>
          </Col>

          <Col sm={6} md={5}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label> Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                className="text-center"
                name="LastName"
              />
            </Form.Group>
          </Col>
          <Col md={1} sm={0}></Col>
          <Col md={1} sm={0}></Col>
          <Col sm={6} md={5}>
            <Form.Group className="mb-3" controlId="formBasicContact">
              <Form.Label className="required">Email Address</Form.Label>
              <Form.Control
                className="text-center"
                type="text"
                placeholder="example@mail.com"
                required
                name="email"
              />
            </Form.Group>
          </Col>
          <Col sm={6} md={5}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                className="text-center"
                type="text"
                placeholder="Phone Number"
                name="phone"
              />
            </Form.Group>
          </Col>
          <Col md={1} sm={0}></Col>
          <Col md={1} sm={0}></Col>
          <Col sm={12} md={10}>
            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label className="required">Message</Form.Label>
              <Form.Control
                className="text-center"
                as="textarea"
                placeholder="Leave your message here please"
                rows={3}
                required
                name="message"
              />
            </Form.Group>
          </Col>
          <Col md={1} sm={0}></Col>
          <Col md={1} sm={0}></Col>
          <Col sm={12} md={10}>
            <Button id="message_button" variant="none" type="submit">
              Send
            </Button>
          </Col>
          <Col md={1} sm={0}></Col>
        </Row>
      </Form>
    </div>
  );
};
