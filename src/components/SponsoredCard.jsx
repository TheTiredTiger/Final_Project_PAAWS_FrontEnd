// Highlight sponsered animals (golds)

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SponsoredCard() {
  return (
    <>
        <Card className="card">
        <Card.Img variant="top" src="https://cdn.britannica.com/86/166986-050-4CEFE5DE/cute-kitten-and-puppy-outdoors-in-grass.jpg" alt="pet picture"/>
        <Card.Body>
            <Card.Title>Adorable little fluffball</Card.Title>
            <Card.Text>
            Contributing: €(money)/month
            </Card.Text>
            <Button variant="primary">More</Button>
        </Card.Body>
        </Card>
    </>
  );
}

export default SponsoredCard;