import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAPI } from './Context/Context';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal'; // Import Modal
import SponsorPage from './SponsorPage'; // Import SponsorPage
import autoAnimate from '@formkit/auto-animate';
import loadincat from '../images/gifs/newloadingcato.gif'

function AnimalPage() {
  const { getAnimal } = useAPI();
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);
  const [showSponsorModal, setShowSponsorModal] = useState(false); // State to control modal visibility

  const modalBodyRef = useRef(null);

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const fetchedAnimal = await getAnimal(id);
        setAnimal(fetchedAnimal);
      } catch (error) {
        console.error('Error fetching animal:', error);
      }
    };

    fetchAnimal();
  }, [id, getAnimal]);

  useEffect(() => {
    if (modalBodyRef.current) {
      autoAnimate(modalBodyRef.current); // Apply auto-animate to the modal body
    }
  }, [modalBodyRef]);

  if (!animal) {
    return <img src={loadincat} />;
  }

  return (
    <>
      <Card className='animalPage' key={animal}>
        <Row>
          <Col lg="5">
            <Card.Img className="animalPageImg" variant="top" src={animal.images[0].image_url} alt="animal picture" />
          </Col>
          <Col lg="7">
            <Card.Body className='animalPageDesc'>
              <Card.Title>{animal.name || "Unknown Animal"}</Card.Title>
              <Card.Text>
                Species: {animal.species || "Unknown"} <br />
                Gender: {animal.gender || "Unknown"} <br />
                Age: {animal.life_stage || "Unknown"} <br />
                Weight: {`${animal.weight} kg` || "Unknown"}<br />
                Breed: {animal.breed || "Unknown"}<br />
                Location: {animal.location || "Unknown"}<br />
                Known illnesses: {animal.known_illness || "Unknown"}<br />
                Description: {animal.description || "Unknown"}
              </Card.Text>
              <div className="animalPageBtn">
                <Button
                  className='primaryButton'
                  style={{ margin: "1rem" }}
                  onClick={() => setShowSponsorModal(true)} // Open modal on click
                >
                  Sponsor
                </Button>
                <Link to="/ourpets">
                  <Button className='tertiaryButton'>
                    Return
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      {/* Modal for SponsorPage */}
      <Modal
        show={showSponsorModal}
        onHide={() => setShowSponsorModal(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Sponsor {animal.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body ref={modalBodyRef}>
          <SponsorPage />
        </Modal.Body>
      </Modal>

      {/* link to adoption form */}
      <div className="toAdoptionForm">
        <h4>Interested in adopting instead?</h4>
        <p>Check out our <Link to={`/adoptionform/${animal.id}`} >form</Link></p>
      </div>
    </>
  );
}

export default AnimalPage;
