// page with option to edit personal data and change password(?)

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function PersonalData() {
    return (
      <>
      <Form>
          <Form.Group className="m-3" controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" />
          </Form.Group>
  
          <Form.Group className="m-3" controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" />
          </Form.Group>
  
          <Form.Group className="m-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
    
          <Form.Group className="m-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button className='m-2' variant="primary" type="submit">
            Save
          </Button>
      </Form>

      <div>
        Delete account
        {/* should have popup asking user if they're sure */}
      </div>
      </>
    );
  }
  
  export default PersonalData;