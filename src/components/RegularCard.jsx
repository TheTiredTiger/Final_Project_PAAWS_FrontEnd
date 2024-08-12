// Card with minimal info on the animal, such as name, species, approximate age, gender

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AnimalCard() {
  return (
    <Card >
      <Card.Img variant="top" src="holder.js/100px180" alt="animal picture"/>
      <Card.Body>
        <Card.Title>Name</Card.Title>
        <Card.Text>
          Species: <br/>
          Gender: <br/>
          App. age: <br/>
          Known illnesses: <br/>
        </Card.Text>
        <Button variant="primary">More</Button>
      </Card.Body>
    </Card>
  );
}

export default AnimalCard;