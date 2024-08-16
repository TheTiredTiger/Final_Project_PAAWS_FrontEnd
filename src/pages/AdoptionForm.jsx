// Form with mandatory questions and user contact info so shelter can get in touch

// Either the name of the animal (and ID/chip?) will be locked in from AnimalPage, or there should be the option to add both manually (maybe with Clear form button)

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AdoptionForm() {
    return (
      <>
      {/* prefilled data */}
      <Container fluid>
        <Row>
          <Col lg="6" >
            <Card style={{ width: "60%", margin: "auto", marginTop: "1rem" }} >
              <Card.Img variant="top" src="https://cdn.britannica.com/86/166986-050-4CEFE5DE/cute-kitten-and-puppy-outdoors-in-grass.jpg" alt="pet picture"/> {/* maybe delete image so it's easier to keep the cards the same height? */}
              <Card.Body>
                <Card.Title>Adorable little fluffball</Card.Title>
                <Card.Text>
                  ID
                </Card.Text>
                <Button variant="primary">More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <Card style={{ width: "60%", margin: "auto", marginTop: "1rem" }} >
              <Card.Body>
                <Card.Title>User</Card.Title>
                <Card.Text>
                  Full name <br/>
                  Email
                </Card.Text>
                <Button variant="primary">Profile</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      
      {/* questions */}
      <Form>

        <Form.Group className="m-3" controlId="formBasicPhone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="tel" placeholder="Enter phone number" />
        </Form.Group>


        {/* Should be yes or no question */}
        <Form.Group className="m-3" controlId="formBasicEmail">
          <Form.Label>Is this your first time adopting a pet? </Form.Label>
          <Form.Control type="text" placeholder="Enter your answer" />
        </Form.Group>

        {/* Should be yes or no question */}
        <Form.Group className="m-3" controlId="formBasicEmail">
          <Form.Label>Do you already have any pets?</Form.Label>
          <Form.Control type="text" placeholder="Enter your answer" />
        </Form.Group>

        {/* Should be a long box for writing */}
        <Form.Group className="m-3" controlId="formBasicEmail">
          <Form.Label>Please describe your current pets in detail.</Form.Label>
          <Form.Control type="text" placeholder="Enter your answer" />
        </Form.Group>

        <Form.Group className="m-3" controlId="formBasicEmail">
          <Form.Label>Why are you interested in this particular animal?</Form.Label>
          <Form.Control type="text" placeholder="Enter your answer" />
        </Form.Group>

        <Form.Group className="m-3" controlId="formBasicEmail">
          <Form.Label>Do you plan to meet this animal before the adoption or have you already met them?</Form.Label>
          <Form.Control type="text" placeholder="Enter your answer" />
        </Form.Group>

        <Form.Group className="m-3" controlId="formBasicEmail">
          <Form.Label>Will the animal have space to play/be entertained?</Form.Label>
          <Form.Control type="text" placeholder="Enter your answer" />
        </Form.Group>

        <Form.Group className="m-3" controlId="formBasicEmail">
          <Form.Label>Will you be able to front initial vet bills, like neutering, as per the shelter's stipulations?</Form.Label>
          <Form.Control type="text" placeholder="Enter your answer" />
        </Form.Group>
        
        <Button className='m-2' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
      </>
    );
  }

export default AdoptionForm;