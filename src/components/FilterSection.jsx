import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function FilterSection() {
  return (
    <Card >
      <ListGroup variant="flush">
        <ListGroup.Item>Filters</ListGroup.Item>
        <ListGroup.Item>Species</ListGroup.Item>
        <ListGroup.Item>Gender</ListGroup.Item>
        <ListGroup.Item>Approximate age</ListGroup.Item>
        <ListGroup.Item>Location</ListGroup.Item>
        <ListGroup.Item>Illnesses?</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default FilterSection;