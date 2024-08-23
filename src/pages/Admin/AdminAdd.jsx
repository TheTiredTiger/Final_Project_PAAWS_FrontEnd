// page for adding animals + changing adoption status of animals
// plus edit
// plus delete

// name, species, gender, age, location, weight, known illnesses, description, race

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function AdminAdd() {
  return (
    <>

      <Form>
        <Form.Group className="m-3" controlId="animalName">
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
                label="Senior"
                name="lifeStage"
                type={type}
                id={`inline-${type}-3`}
                />
            </div>
          ))}
        </Form.Group>

        <Form.Label>Weight</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control aria-label="Amount (to the nearest kg)" placeholder='Weight in kg' />
          <InputGroup.Text>kg</InputGroup.Text>
        </InputGroup>

        <Form.Group className="m-3" controlId="animalBreed">
          <Form.Label>Breed</Form.Label>
          <Form.Control type="text" placeholder="Enter breed" />
        </Form.Group>

        <Form.Group className="m-3" controlId="animalLocation">
          <Form.Label>Location</Form.Label> <br />
          <Form.Control as="select" type="text" placeholder="Choose location" >
            <option value="null">Choose a location</option>
            <option value="Aveiro">Aveiro</option>
            <option value="Beja">Beja</option>
            <option value="Braga">Braga</option>
            <option value="Bragança">Bragança</option>
            <option value="CasteloBranco">Castelo Branco</option>
            <option value="Coimbra">Coimbra</option>
            <option value="Evora">Évora</option>
            <option value="Faro">Faro</option>
            <option value="Guarda">Guarda</option>
            <option value="Leiria">Leiria</option>
            <option value="Lisboa">Lisboa</option>
            <option value="Portalegre">Portalegre</option>
            <option value="Porto">Porto</option>
            <option value="Santarém">Santarém</option>
            <option value="Setúbal">Setúbal</option>
            <option value="VianaDoCastelo">Viana do Castelo</option>
            <option value="VilaReal">Vila Real</option>
            <option value="Viseu">Viseu</option>
          </Form.Control>
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

      <div style={{ display: "flex", justifyContent: "right" }}>
        <Button href='/adminpage' variant="outline-secondary" >Return</Button>
      </div>

    </>

  );
}


export default AdminAdd;