import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function ResetPass() {
  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="New password"
        className="mb-3 mt-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Confirm new password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
    </>
  );
}

export default ResetPass;