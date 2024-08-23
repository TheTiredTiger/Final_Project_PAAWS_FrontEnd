// should show every animal card, searchable by ID

// each card should have buttons for: Approve, Reject, More(+) --> with link to form

import { useState, useEffect, useNavigate } from "react";
import { useAPI } from '../Context/Context';

import { Row, Col, Button } from "react-bootstrap";

import AdoptionStatusCard from "../../components/AdoptionStatusCard";


function AdoptionStatus () {

  //pulled all this from AdminDelete
  const [animalId, setAnimalId] = useState('');
  const [animalData, setAnimalData] = useState(null);
  const [error, setError] = useState('');
  /* const navigate = useNavigate(); */
  const { getAnimal, deleteAnimal } = useAPI();

  const handleFetchAnimal = async () => {
    if (animalId) {
      try {
        const data = await getAnimal(animalId);
        setAnimalData(data);
        setError('');
      } catch (error) {
        setAnimalData(null);
        setError(`Error fetching animal with ID ${animalId}: ${error.message} Please Try Again`);
      }
    }
  };


  return (
    <>
        <div className='row justify-content-center py-3'>
          <div className='col-md-6'>
            <input
              type="number"
              className='form-control mb-2'
              placeholder="Enter animal ID"
              value={animalId}
              onChange={(e) => setAnimalId(e.target.value)}
            />
            <button
              className='btn btn-primary w-100'
              onClick={handleFetchAnimal}
            >
              Search
            </button>
        </div>
      </div>
    <Row>
      <Col lg ="4" /* key={animal.id} */ >
        <AdoptionStatusCard /* animal={animal} */ />
      </Col>

    </Row>

    <div style={{ display: "flex", justifyContent: "right" }}>
        <Button href='/adminpage' variant="outline-secondary" >Return</Button>
    </div>
  </>
  );
}

export default AdoptionStatus;