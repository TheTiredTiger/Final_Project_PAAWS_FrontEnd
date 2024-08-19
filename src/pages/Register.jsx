import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <Form>
        <FloatingLabel
          controlId="floatingInput"
          label="First name"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Jane" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Last name"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Doe" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>

      <FloatingLabel
        controlId="floatingPassword"
        label="Password"
      >
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>

        <Button className='m-2' variant="primary" type="submit">
          Submit
        </Button>
        <p>Already have an account? <Link to="/login">Log in</Link>!</p>
    </Form>
  );
}

export default Register;