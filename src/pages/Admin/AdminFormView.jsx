// Form with mandatory questions and user contact info

// Either the name of the animal (and ID/chip?) will be locked in from AnimalPage, or there should be the option to add both manually (maybe with Clear form button)

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


//if we wanted we could use prop and avoid fetching
//but when someone goes directly to link it wont work ex:bookmark the form
function AdoptionFormView() {

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="6">
            <Card style={{ width: "65%", height: "20vh",margin: "auto", marginTop: "2rem", paddingTop: "1rem" }}>
              <Card.Body>
                <Card.Title>{animal.name}</Card.Title>
                <Card.Text>ID: {animal.id}</Card.Text>
                <Button variant="primary">More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <Card style={{ width: "65%", height: "20vh", margin: "auto", marginTop: "2rem", paddingTop: "1rem" }}>
              <Card.Body>
                <Card.Title>{formData.first_name} {formData.last_name}</Card.Title>
                <Card.Text>Email: {formData.email}</Card.Text>
                <Button variant="primary">Profile</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div>
          {/* Hidden Input for Animal Reference */}
          <Form.Control
            type="hidden"
            name="animal_reference"
            value={formData.animal_reference}
            onChange={handleChange}
          />
        </div>

        <Card style={{ width: "85%", margin: "auto", marginTop: "1rem"}}>
            <div style={{ display: "flex" }}>
                <div className="m-3" controlId="formBasicPhone" style={{ width: "50%" }}>
                <p>Phone number:</p>
                </div>
                <div className="m-3" controlId="formFirstTimeAdopting" style={{ width: "50%" }}>
                <p>Is this your first time having a pet?</p>
                <p className='answer'>{/* answer */}</p>
                </div>
            </div>

            <div className="m-3" controlId="formAlreadyHavePets">
              <p>Do you already have any pets currently? If so, how many?</p>
              <p className='answer'>{/* answer || "NA" */}</p>
            </div>

            <div className="m-3" controlId="formCurrentPetsDescription">
              <p>Please describe your current pets in detail.</p>
              <p className='answer'>{/* answer || "NA" */}</p>
            </div>


          <div className="m-3" controlId="formInterestReason">
            <p>Why are you interested in this particular animal?</p>
            <p className='answer'>{/* answer */}</p>
          </div>

          <div className="m-3" controlId="formMetAnimal">
            <p>Do you plan to meet this animal before the adoption or have you already met them?</p>
            <p className='answer'>{/* answer */}</p>
          </div>

          <div className="m-3" controlId="formSpaceForPlay">
            <p>Will the animal have space to play/be entertained?</p>
            <p className='answer'>{/* answer */}</p>
          </div>

          <div className="m-3" controlId="formVetBills">
            <p>Will you be able to front initial vet bills, like neutering, as per the shelter's stipulations?</p>
            <p className='answer'>{/* answer */}</p>
          </div>

          <Button variant="outline-secondary">
            <Link to="/adoptionstatus">
            Return
            </Link>
          </Button>
        </Card>
      </Container>
    </>
  );
}

export default AdoptionFormView;