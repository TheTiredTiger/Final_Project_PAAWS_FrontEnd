// page for adding animals + changing adoption status of animals
// plus edit
// plus delete

// name, species, gender, age, location, weight, known illnesses, description, race

// Bárbara was here branching out

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function AdminAdd() {
    return ( 

    <Form>
      
        <Form.Group className="m-3" controlId="animalName">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" placeholder="Enter ID" />
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="m-3" controlId="animalSpecies">
          <Form.Label>Species</Form.Label>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="cat"
                name="species"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="dog"
                name="species"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
        </Form.Group>

        <Form.Group className="m-3" controlId="animalGender">
          <Form.Label>Gender</Form.Label>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="female"
                name="gender"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="male"
                name="gender"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
        </Form.Group>

        <Form.Group className="m-3" controlId="animalAge">
          <Form.Label>Life stage</Form.Label>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="baby"
                name="lifeStage"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="junior"
                name="lifeStage"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="adult"
                name="lifeStage"
                type={type}
                id={`inline-${type}-3`}
              />
              <Form.Check
                inline
                label="senior"
                name="lifeStage"
                type={type}
                id={`inline-${type}-3`}
              />
            </div>
      ))}
        </Form.Group>

        <Form.Label>Weight</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control aria-label="Amount (to the nearest kg)" placeholder='Weight in kg'/>
          <InputGroup.Text>kg</InputGroup.Text>
        </InputGroup>

        <Form.Group className="m-3" controlId="animalBreed">
          <Form.Label>Breed</Form.Label>
          <Form.Control type="text" placeholder="Enter breed" />
        </Form.Group>

        <Form.Group className="m-3" controlId="animalLocation"> 
          <Form.Label>Location</Form.Label> <br/>
          <select id="location" name="location">
            <option value="volvo">Aveiro</option>
            <option value="saab">Beja</option>
            <option value="fiat">Braga</option>
            <option value="audi">Bragança</option>
            <option value="audi">Castelo Branco</option>
            <option value="audi">Coimbra</option>
            <option value="audi">Évora</option>
            <option value="audi">Faro</option>
            <option value="audi">Guarda</option>
            <option value="audi">Leiria</option>
            <option value="audi">Lisboa</option>
            <option value="audi">Portalegre</option>
            <option value="audi">Porto</option>
            <option value="audi">Santarém</option>
            <option value="audi">Setúbal</option>
            <option value="audi">Viana do Castelo</option>
            <option value="audi">Vila Real</option>
            <option value="audi">Viseu</option>
          </select>
        </Form.Group>

        <Form.Group className="m-3" controlId="animalLocation">
          <Form.Label>Known illnesses</Form.Label>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="yes"
                name="illnesses"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="no"
                name="illnesses"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
        </Form.Group>

        <Form.Group className="m-3" controlId="animalLocation">
          <Form.Label>Adoption status</Form.Label>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="rejected"
                name="adoptionStatus"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="approved"
                name="adoptionStatus"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
        </Form.Group>

        <Form.Group className="m-3" controlId="animalLocation">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} type="text" placeholder="Enter description" />
        </Form.Group>

        <Form.Group className="m-3" controlId="animalLocation">
          <Form.Label>Add image</Form.Label>
          <Form.Control type="file" placeholder="Insert image" />
        </Form.Group>
        
        <Button className='m-2' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      );
}


export default AdminAdd;