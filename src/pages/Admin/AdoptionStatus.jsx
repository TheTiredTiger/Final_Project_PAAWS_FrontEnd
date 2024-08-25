import { useState, useEffect } from "react";
import { useAPI } from '../Context/Context';
import { Row, Col, Button } from "react-bootstrap";
import AdoptionStatusCard from "../../components/AdoptionStatusCard";
import { useNavigate } from 'react-router-dom';

function AdoptionStatus() {
  const [adoptions, setAdoptions] = useState([]);
  const [error, setError] = useState('');
  const { getAllAdoptions, updateAdoptionStatus } = useAPI();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdoptions = async () => {
      try {
        const data = await getAllAdoptions();
        setAdoptions(data);
        setError('');
      } catch (error) {
        setError(`Error fetching adoptions: ${error.message}`);
      }
    };
    console.log("I am adoptions object in AdoptionStatus:", adoptions)
    fetchAdoptions();
  }, [getAllAdoptions]);

  const handleUpdateStatus = async (adoptionId, status) => {
    try {
      await updateAdoptionStatus(adoptionId, status);
      // Update the UI after successful status change
      setAdoptions(prevAdoptions =>
        prevAdoptions.map(adoption =>
          adoption.id === adoptionId ? { ...adoption, adoption_status: status } : adoption
        )
      );
    } catch (error) {
      setError(`Error updating status: ${error.message}`);
    }
  };

  const handleViewForm = (adoptionId) => {
    navigate(`/adoptionform_adminview/${adoptionId}`);
  };

  return (
    <>
      <Row>
        {error && <p className="text-danger">{error}</p>}
        {adoptions.map(adoption => (
          <Col lg="4" key={adoption.id}>
            <AdoptionStatusCard
              adoption={adoption}
              onApprove={() => handleUpdateStatus(adoption.id, 'Approved')}
              onReject={() => handleUpdateStatus(adoption.id, 'Rejected')}
              onViewForm={() => handleViewForm(adoption.id)}
            />
          </Col>
        ))}
      </Row>

      <div style={{ display: "flex", justifyContent: "right" }}>
        <Button href='/adminpage' variant="outline-secondary">Return</Button>
      </div>
    </>
  );
}

export default AdoptionStatus;
