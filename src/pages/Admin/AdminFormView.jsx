import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useParams } from 'react-router-dom';
import { useAPI } from '../Context/Context';
import { useState, useEffect } from 'react';

function AdoptionFormView() {
  const { fetchAdoptionForm } = useAPI(); // Get fetchAdoptionForm from the context
  const { id } = useParams();
  console.log("Iam id admin form view", id)
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage error messages

  useEffect(() => {
    const token = localStorage.getItem('token');

    // Fetch the adoption form data
    fetchAdoptionForm(id, token).then(result => {
      if (result.error) {
        setError(result.error);
      } else {
        setForm(result.data);
      }
      setLoading(false);
    });
  }, [id, fetchAdoptionForm]);

  console.log("I am adoption form object", form);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="6">
            <Card style={{ width: "60%", margin: "auto", marginTop: "1rem" }}>
              <Card.Body>
                <Card.Title>{form.animal_name}</Card.Title>
                <Card.Text>ID: {form.id}</Card.Text>
                <Button variant="primary">
                  <Link to={`/animalpage/${form.animal_reference}`} style={{ color: "white", textDecoration: "none" }}>
                    More
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <Card style={{ width: "60%", margin: "auto", marginTop: "1rem" }}>
              <Card.Body>
                <Card.Title>{form.first_name} {form.last_name}</Card.Title>
                <Card.Text>Email: {form.email}</Card.Text>
                <Button variant="primary">
                  <Link to="/userprofile" style={{ color: "white", textDecoration: "none" }}>
                    Profile
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Card style={{ width: "85%", margin: "auto", marginTop: "1rem" }}>
          <div style={{ display: "flex" }}>
            <div className="m-3" style={{ width: "50%" }}>
              <p>Phone number:</p>
              <input type="text" value={form.phone_number} readOnly className="form-control" />
            </div>
            <div className="m-3" style={{ width: "50%" }}>
              <p>Is this your first time having a pet?</p>
              <input type="text" value={form.first_time_adopting} readOnly className="form-control" />
            </div>
          </div>

          <div className="m-3">
            <p>Do you already have any pets currently? If so, how many?</p>
            <input type="text" value={form.already_have_pets || "NA"} readOnly className="form-control" />
          </div>

          <div className="m-3">
            <p>Please describe your current pets in detail.</p>
            <textarea value={form.current_pets_description || "NA"} readOnly className="form-control" />
          </div>

          <div className="m-3">
            <p>Why are you interested in this particular animal?</p>
            <textarea value={form.interest_reason} readOnly className="form-control" />
          </div>

          <div className="m-3">
            <p>Do you plan to meet this animal before the adoption or have you already met them?</p>
            <input type="text" value={form.met_animal} readOnly className="form-control" />
          </div>

          <div className="m-3">
            <p>Will the animal have space to play/be entertained?</p>
            <input type="text" value={form.space_for_play} readOnly className="form-control" />
          </div>

          <div className="m-3">
            <p>Will you be able to front initial vet bills, like neutering, as per the shelter's stipulations?</p>
            <input type="text" value={form.able_to_front_vet_bills} readOnly className="form-control" />
          </div>

          <Link to="/adoptionstatus" style={{ color: "grey", textDecoration: "none" }}>
            <Button variant="outline-secondary">
              Return
            </Button>
          </Link>
        </Card>
      </Container>
    </>
  );
}

export default AdoptionFormView;
