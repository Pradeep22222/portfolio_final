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
          <Col sm={2}></Col>
          <Col sm={4}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label> First Name</Form.Label>
              <Form.Control
                className="text-center"
                type="text"
                placeholder="First Name"
              />
            </Form.Group>
          </Col>

          <Col sm={4}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label> Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                className="text-center"
              />
            </Form.Group>
          </Col>
          <Col sm={2}></Col>
          <Col sm={2}></Col>
          <Col sm={4}>
            <Form.Group className="mb-3" controlId="formBasicContact">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                className="text-center"
                type="text"
                placeholder="example@mail.com"
              />
            </Form.Group>
          </Col>
          <Col sm={4}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                className="text-center"
                type="text"
                placeholder="Phone Number"
              />
            </Form.Group>
          </Col>
          <Col sm={2}></Col>
          <Col sm={2}></Col>
          <Col sm={8}>
            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                className="text-center"
                as="textarea"
                placeholder="Leave your message here please"
                rows={3}
              />
            </Form.Group>
          </Col>
          <Col sm={2}></Col>
          <Col sm={2}></Col>
          <Col sm={8}>
            <Button id="message_button" variant="none">
              Send
            </Button>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Form>
    </div>
  );
};
