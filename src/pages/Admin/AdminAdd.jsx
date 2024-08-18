// page for adding animals + changing adoption status of animals
// plus edit
// plus delete

// name, species, gender, age, location, weight, known illnesses, description, race

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AdminAdd() {
    return (  
    <Form>

        <Form.Group className="m-3" controlId="animalName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="m-3" controlId="animalSpecies">
          <Form.Label>Species</Form.Label>
          <Form.Control type="text" placeholder="Enter species" />
        </Form.Group>

        <Form.Group className="m-3" controlId="animalGender">
          <Form.Label>Gender</Form.Label>
          <Form.Control type="text" placeholder="Enter gender" />
        </Form.Group>

        <Form.Group className="m-3" controlId="animalGender">
          <Form.Label>Gender</Form.Label>
          <Form.Control type="text" placeholder="Enter gender" />
        </Form.Group>

        <Form.Group className="m-3" controlId="animalAge">
          <Form.Label>Life stage</Form.Label>
          <Form.Control type="text" placeholder="Enter life stage" />
        </Form.Group>

        <Form.Group className="m-3" controlId="animalWeight">
          <Form.Label>Weight</Form.Label>
          <Form.Control type="text" placeholder="Enter weight" />
        </Form.Group>

        <Form.Group className="m-3" controlId="animalBreed">
          <Form.Label>Breed</Form.Label>
          <Form.Control type="text" placeholder="Enter breed" />
        </Form.Group>

        <Form.Group className="m-3" controlId="animalLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Enter location" />
        </Form.Group>

        <Form.Group className="m-3" controlId="animalLocation">
          <Form.Label>Known illnesses</Form.Label>
          <Form.Control type="text" placeholder="Enter illnesses" />
        </Form.Group>

        <Form.Group className="m-3" controlId="animalLocation">
          <Form.Label>Adoption status</Form.Label>
          <Form.Control type="text" placeholder="Choose adoption status" />
        </Form.Group>

        <Form.Group className="m-3" controlId="animalLocation">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter description" />
        </Form.Group>
        
        <Button className='m-2' variant="primary" type="submit">
          Submit
        </Button>
      </Form>);
}


export default AdminAdd;