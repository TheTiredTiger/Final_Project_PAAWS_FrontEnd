import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';


function FilterSection() {
  return (
    <Card >
      <h4>Filters</h4>
      <ListGroup variant="flush">
        <ListGroup.Item>Species</ListGroup.Item>
        {['checkbox'].map((type) => (
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
              name="spcies"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>
        ))}
        <ListGroup.Item>Gender</ListGroup.Item>
        {['checkbox'].map((type) => (
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
        <ListGroup.Item>Life stage</ListGroup.Item>
        {['checkbox'].map((type) => (
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
              id={`inline-${type}-4`}
            />
          </div>
        ))}
        <ListGroup.Item>Known illnesses?</ListGroup.Item>
        {['checkbox'].map((type) => (
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
        <ListGroup.Item>Location</ListGroup.Item>
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
      </ListGroup>
    </Card>
  );
}

export default FilterSection;