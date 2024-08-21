// Card with minimal info on the animal, such as name, species, approximate age, gender

import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//Added by-RM

//Receives child to render
function AnimalCard({ animal }) {
  return (
    <Card>
      <Card.Img
        variant="top"
        //In case of not image it renders dummy image we had :D
        src={animal.images[1].image_url || "https://cdn.britannica.com/86/166986-050-4CEFE5DE/cute-kitten-and-puppy-outdoors-in-grass.jpg"}
        alt="animal picture"
      />
      <Card.Body>
        <Card.Title>{animal.name}</Card.Title>
        <Card.Text>
          Species: {animal.species} <br />
          Gender: {animal.gender} <br />
          Age: {animal.life_stage} <br />
        </Card.Text>
        <Button variant="primary">
          <Link to={`/animalpage/${animal.id}`} style={{ color: "white", textDecoration: "none" }}>
            More
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default AnimalCard;