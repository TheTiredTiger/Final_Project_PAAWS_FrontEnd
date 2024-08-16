// Linked from AnimalSearch, should feature more details about the pet (and if we do add a cap, if donations are closed)

// Section below leading to adoption form

import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AnimalCard() {
  return (
    <>
      <Card className='animalPage'>
        <Row>
          <Col lg="5" >
            <Card.Img className="animalPageImg" variant="top" src="https://cdn.britannica.com/86/166986-050-4CEFE5DE/cute-kitten-and-puppy-outdoors-in-grass.jpg" alt="animal picture" />
          </Col>
          <Col lg="7" >
          <Card.Body className='animalPageDesc'>
            <Card.Title>Name</Card.Title>
            <Card.Text>
              Species: <br/>
              Gender: <br/>
              Age: <br/>
              Weight: <br/>
              Location: <br/>
              Known illnesses: <br/>
              Description:
            </Card.Text>
            <div className="animalPageBtn">
              <Button variant="primary" style={{marginRight: "1rem"}}>
                Sponsor
              </Button>
              <Button variant="secondary">
                <Link to="/ourpets" style={{color: "white", textDecoration: "none"}}>
                  Return
                </Link>
              </Button>
            </div>
          </Card.Body>
          </Col>
        </Row>
      </Card>

      {/* link to adoption form */}

      <div className="toAdoptionForm">
        <h4>Interested in adopting instead?</h4>
        <p>Check out our <Link to="/adoptionForm" >form</Link></p>
      </div>
    </>
  );
}

export default AnimalCard;