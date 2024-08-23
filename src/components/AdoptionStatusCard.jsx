// card to use in AdoptionStatus page with 3 buttons so that admin can approve or reject an adoption request, and check out the form filled by the user

import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AdoptionStatusCard(/* { animal } */) {
/*     console.log("I am animal object in regular card", animal)

    const findValidImageUrl = (images) => {
        if (images && images.length > 0) {
          for (let i = 0; i < images.length; i++) {
            if (images[i].image_url) {
              return images[i].image_url;
            }
          }
        }
        // Fallback if no valid image URL is found- I mean melhor prevenir de que remediar
        return "https://cdn.britannica.com/86/166986-050-4CEFE5DE/cute-kitten-and-puppy-outdoors-in-grass.jpg";
      };
      const imageUrl = findValidImageUrl(animal.images); */

    
    return ( <>
        <Card className='card'>
            <Card.Img variant="top" src="https://cdn.britannica.com/86/166986-050-4CEFE5DE/cute-kitten-and-puppy-outdoors-in-grass.jpg" alt="animal image"/>
            <Card.Body>
            <Card.Title>{/* {animal.name || "Unknown Animal"} */}</Card.Title>
            <Card.Text>
            ID: {/* {animal.id || "Unknown"} */}
            </Card.Text>
            <div style={{ display: "flex", justifyContent: "space-between"}}>
                <Button variant="success">Approve</Button>
                <Button variant="danger">Reject</Button>
                <Button variant="warning">
                    <Link to="" /* add form link here */ style={{ color: "white", textDecoration: "none" }}>+</Link>
                </Button>
            </div>
            </Card.Body>
        </Card>
    
    </> );
}

export default AdoptionStatusCard;