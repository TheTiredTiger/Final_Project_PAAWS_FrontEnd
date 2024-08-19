import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <Form>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      
      <Button className='m-2' variant="primary" type="submit">
        Submit
      </Button>
      <p>Don't have an account? <Link to='/register'>Register</Link>!</p> 
    </Form>
  );
}

export default Login;