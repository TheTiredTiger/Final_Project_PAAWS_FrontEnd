// Section for adoption with status like approved, pending, rejected

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AdoptionCard() {
  return (
    <Card className='card'>
      <Card.Img variant="top" src="https://d.newsweek.com/en/full/1898130/dog-cat-under-sheet.jpg" alt="insert some alt text here"/>
      <Card.Body>
        <Card.Title>Sweet baby angel</Card.Title>
        <Card.Text>
          Adoption status:
        </Card.Text>
        <Button variant="primary">More</Button>
      </Card.Body>
    </Card>
  );
}

export default AdoptionCard;