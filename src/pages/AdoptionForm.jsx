// Form with mandatory questions and user contact info

// Either the name of the animal (and ID/chip?) will be locked in from AnimalPage, or there should be the option to add both manually (maybe with Clear form button)

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Added by RM
import { useAPI } from './Context/Context';
import { Link } from 'react-router-dom'; //test
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function AdoptionForm({ animalId }) {
  const { id } = useParams();
  console.log("I am id useParams", id)
  //kiling bugs
  console.log("I am animalId", animalId)
  const { getAnimal, createAdoption } = useAPI();
  const [animal, setAnimal] = useState(null);
  const [formData, setFormData] = useState({
    phone_number: '',
    first_time_adopting: '',
    already_have_pets: '',
    current_pets_description: '',
    interest_reason: '',
    met_animal: '',
    space_for_play: '',
    able_to_front_vet_bills: '',
  });

  useEffect(() => {
    const fetchAnimalData = async () => {
      try {
        const animalData = await getAnimal(animalId);
        setAnimal(animalData);
      } catch (error) {
        console.error('Error fetching animal data:', error);
      }
    };

    fetchAnimalData();

    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
      }));
    }
  }, [animalId, getAnimal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const adoptionData = {
        ...formData,
        animal_id: animal.id,
        animal_name: animal.name,
        animal_reference: animal.reference,
      };
      await createAdoption(adoptionData);
      // Handle successful submission (e.g., show success message or redirect)
    } catch (error) {
      console.error('Adoption submission failed:', error);
      // Handle submission error (e.g., show error message)
    }
  };

  if (!animal) return <div>Loading...</div>;

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="6">
            <Card style={{ width: "60%", margin: "auto", marginTop: "1rem" }}>
              <Card.Body>
                <Card.Title>{animal.name}</Card.Title>
                <Card.Text>ID: {animal.reference}</Card.Text>
                <Button variant="primary">More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <Card style={{ width: "60%", margin: "auto", marginTop: "1rem" }}>
              <Card.Body>
                <Card.Title>{formData.first_name} {formData.last_name}</Card.Title>
                <Card.Text>Email: {formData.email}</Card.Text>
                <Button variant="primary">Profile</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="m-3" controlId="formBasicPhone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
            />
          </Form.Group>

          <Form.Group className="m-3" controlId="formFirstTimeAdopting">
            <Form.Label>Is this your first time having a pet?</Form.Label>
            <Form.Control
              type="text"
              name="first_time_adopting"
              value={formData.first_time_adopting}
              onChange={handleChange}
              placeholder="Enter your answer"
              required
            />
          </Form.Group>

          <Form.Group className="m-3" controlId="formAlreadyHavePets">
            <Form.Label>Do you already have any pets currently?</Form.Label>
            <Form.Control
              type="text"
              name="already_have_pets"
              value={formData.already_have_pets}
              onChange={handleChange}
              placeholder="Enter your answer"
              required
            />
          </Form.Group>

          <Form.Group className="m-3" controlId="formCurrentPetsDescription">
            <Form.Label>Please describe your current pets in detail.</Form.Label>
            <Form.Control
              type="text"
              name="current_pets_description"
              value={formData.current_pets_description}
              onChange={handleChange}
              placeholder="Enter your answer"
              required
            />
          </Form.Group>

          <Form.Group className="m-3" controlId="formInterestReason">
            <Form.Label>Why are you interested in this particular animal?</Form.Label>
            <Form.Control
              type="text"
              name="interest_reason"
              value={formData.interest_reason}
              onChange={handleChange}
              placeholder="Enter your answer"
              required
            />
          </Form.Group>

          <Form.Group className="m-3" controlId="formMetAnimal">
            <Form.Label>Do you plan to meet this animal before the adoption or have you already met them?</Form.Label>
            <Form.Control
              type="text"
              name="met_animal"
              value={formData.met_animal}
              onChange={handleChange}
              placeholder="Enter your answer"
              required
            />
          </Form.Group>

          <Form.Group className="m-3" controlId="formSpaceForPlay">
            <Form.Label>Will the animal have space to play/be entertained?</Form.Label>
            <Form.Control
              type="text"
              name="space_for_play"
              value={formData.space_for_play}
              onChange={handleChange}
              placeholder="Enter your answer"
              required
            />
          </Form.Group>

          <Form.Group className="m-3" controlId="formVetBills">
            <Form.Label>Will you be able to front initial vet bills, like neutering, as per the shelter's stipulations?</Form.Label>
            <Form.Control
              type="text"
              name="able_to_front_vet_bills"
              value={formData.able_to_front_vet_bills}
              onChange={handleChange}
              placeholder="Enter your answer"
              required
            />
          </Form.Group>

          <Button className='m-2' variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default AdoptionForm;