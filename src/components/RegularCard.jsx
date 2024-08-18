// Card with minimal info on the animal, such as name, species, approximate age, gender

import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AnimalCard() {
  return (
    <Card >
      <Card.Img variant="top" src="https://cdn.britannica.com/86/166986-050-4CEFE5DE/cute-kitten-and-puppy-outdoors-in-grass.jpg" alt="animal picture"/>
      <Card.Body>
        <Card.Title>Name</Card.Title>
        <Card.Text>
          Species: <br/>
          Gender: <br/>
          Age: <br/>
        </Card.Text>
        <Button variant="primary">
          <Link to="/animalpage" style={{color: "white", textDecoration: "none"}}>
            More
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default AnimalCard;