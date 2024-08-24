// Linked from AnimalSearch, should feature more details about the pet (and if we do add a cap, if donations are closed)

// Section below leading to adoption form

import { Link, useParams } from 'react-router-dom';
import { useAPI } from './Context/Context'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AnimalPage({ animal }) {
  const { getAnimal } = useAPI()
  const { id } = useParams();

  console.log("I am animal object in animal page", animal)


  return (
    <>
      <Card className='animalPage' key={animal}>
        <Row>
          <Col lg="5" >
            <Card.Img className="animalPageImg" variant="top" src=""
              alt="animal picture" />
          </Col>
          <Col lg="7" >
            <Card.Body className='animalPageDesc'>
              <Card.Title>{animal.name || "Unknown Animal"}</Card.Title>
              <Card.Text>
                Species: {animal.species || "Unknown"} <br />
                Gender: {animal.gender || "Unknown"} <br />
                Age: {animal.life_stage || "Unknown"} <br />
                Weight: {animal.weight || "Unknown"}<br />
                Breed: {animal.breed || "Unknown"}<br />
                Location: {animal.location || "Unknown"}<br />
                Known illnesses: {animal.known_illness || "Unknown"}<br />
                Description: {animal.description || "Unknown"}
              </Card.Text>
              <div className="animalPageBtn">
                <Button variant="primary" style={{ marginRight: "1rem" }}>
                  Sponsor
                </Button>
                <Button variant="secondary">
                  <Link to="/ourpets" style={{ color: "white", textDecoration: "none" }}>
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
        <p>Check out our <Link to={`/adoptionform/${animal.id}`} >form</Link></p>
      </div>
    </>
  );
}

export default AnimalPage;