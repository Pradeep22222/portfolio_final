import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export const ContactForm = () => {
  return (
    <div>
      <Form>
        <Form.Text className="text-muted">Your details are kept safe</Form.Text>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Leave your name here please" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicContact">
          <Form.Label>Contact Details</Form.Label>
          <Form.Control
            type="text"
            placeholder="Leave your contact number or email here please"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            type="text"
            placeholder="Leave your message here please"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          send
        </Button>
      </Form>
    </div>
  );
};
