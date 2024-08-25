//later we can change also the card color like in user profile


import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdoptionStatusCard = ({ adoption, onApprove, onReject, onViewForm }) => {
  return (
    <Card className='card' style={{ marginBottom: '1rem' }}>
      {/* Assuming that each adoption object includes the animal's image URL */}
      <Card.Img
        variant="top"
        src={adoption.animal.images.length > 0 ? adoption.animal.images[0].image_url : "https://cdn.britannica.com/86/166986-050-4CEFE5DE/cute-kitten-and-puppy-outdoors-in-grass.jpg"}
        alt={adoption.animal.name || "Animal Image"}
      />
      <Card.Body>
        <Card.Title>{adoption.animal.name || "Unknown Animal"}</Card.Title>
        <Card.Text>
          ID: {adoption.animal.id || "Unknown"}
        </Card.Text>
        <Card.Text>Status: {adoption.adoption_status}</Card.Text>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="success" onClick={onApprove}>Approve</Button>
          <Button variant="danger" onClick={onReject}>Reject</Button>
          <Button variant="warning" onClick={onViewForm}>
            <Link to={`/adoptionform_adminview/${adoption.id}`} style={{ color: "white", textDecoration: "none" }}>+</Link>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AdoptionStatusCard;
