import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';
import { useAPI } from '../Context/Context';

function AdminEdit() {
  const location = useLocation();
  /* const history = useHistory(); */
  const { animalData } = location.state || {};
  console.log("Received animalData:", animalData);

  const { deleteImage } = useAPI();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    species: '',
    gender: '',
    life_stage: '',
    weight: '',
    breed: '',
    location: '',
    known_illness: '',
    description: '',
    images: [], // Stores carousel images
  });

  useEffect(() => {
    if (animalData) {
      setFormData({
        id: animalData.id || '',
        name: animalData.name || '',
        species: animalData.species || '',
        gender: animalData.gender || '',
        life_stage: animalData.life_stage || '',
        weight: animalData.weight || '',
        breed: animalData.breed || '',
        location: animalData.location || '',
        known_illness: animalData.known_illness || '',
        description: animalData.description || '',
        images: animalData.images || [],
      });
    }
  }, [animalData]);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleImageDelete = async (imageId) => {
    setIsLoading(true);

    try {
      await deleteImage(imageId);

      // Update the formData state to remove the deleted image from the local UI
      const updatedImages = formData.images.filter((image) => image.id !== imageId);

      setFormData((prevData) => ({
        ...prevData,
        images: updatedImages,
      }));

      console.log(`Deleted image with ID: ${imageId}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    /* history.push('/admin');  */// Redirect to another page after submission
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-3" controlId="animalId">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            name="id"
            defaultValue={formData.id}
            placeholder="Enter ID"
            readOnly
          />
        </Form.Group>

        <Form.Group className="m-3" controlId="animalName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            defaultValue={formData.name}
            onChange={handleInputChange}
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group className="m-3" controlId="animalSpecies">
          <Form.Label>Species</Form.Label>
          <div className="mb-3">
            <Form.Check
              inline
              label="Cat"
              name="species"
              type="radio"
              value="cat"
              checked={formData.species === 'cat'}
              onChange={handleInputChange}
              id="species-cat"
            />
            <Form.Check
              inline
              label="Dog"
              name="species"
              type="radio"
              value="dog"
              checked={formData.species === 'dog'}
              onChange={handleInputChange}
              id="species-dog"
            />
          </div>
        </Form.Group>

        <Form.Group className="m-3" controlId="animalGender">
          <Form.Label>Gender</Form.Label>
          <div className="mb-3">
            <Form.Check
              inline
              label="Female"
              name="gender"
              type="radio"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleInputChange}
              id="gender-female"
            />
            <Form.Check
              inline
              label="Male"
              name="gender"
              type="radio"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleInputChange}
              id="gender-male"
            />
          </div>
        </Form.Group>

        <Form.Group className="m-3" controlId="animalAge">
          <Form.Label>Life Stage</Form.Label>
          <div className="mb-3">
            <Form.Check
              inline
              label="Baby"
              name="life_stage"
              type="radio"
              value="baby"
              checked={formData.life_stage === 'baby'}
              onChange={handleInputChange}
              id="life_stage-baby"
            />
            <Form.Check
              inline
              label="Junior"
              name="life_stage"
              type="radio"
              value="junior"
              checked={formData.life_stage === 'junior'}
              onChange={handleInputChange}
              id="life_stage-junior"
            />
            <Form.Check
              inline
              label="Adult"
              name="life_stage"
              type="radio"
              value="adult"
              checked={formData.life_stage === 'adult'}
              onChange={handleInputChange}
              id="life_stage-adult"
            />
            <Form.Check
              inline
              label="Senior"
              name="life_stage"
              type="radio"
              value="senior"
              checked={formData.life_stage === 'senior'}
              onChange={handleInputChange}
              id="life_stage-senior"
            />
          </div>
        </Form.Group>

        <Form.Label>Weight</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            aria-label="Amount (to the nearest kg)"
            placeholder="Weight in kg"
            name="weight"
            defaultValue={formData.weight}
            onChange={handleInputChange}
          />
          <InputGroup.Text>kg</InputGroup.Text>
        </InputGroup>

        <Form.Group className="m-3" controlId="animalBreed">
          <Form.Label>Breed</Form.Label>
          <Form.Control
            type="text"
            name="breed"
            defaultValue={formData.breed}
            onChange={handleInputChange}
            placeholder="Enter breed"
          />
        </Form.Group>

        <Form.Group className="m-3" controlId="animalLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            as="select"
            name="location"
            defaultValue={formData.location}
            onChange={handleInputChange}
          >
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

        <Form.Group className="m-3" controlId="animalIllnesses">
          <Form.Label>Known Illnesses</Form.Label>
          <div className="mb-3">
            <Form.Check
              inline
              label="Yes"
              name="known_illness"
              type="radio"
              value="yes"
              checked={formData.known_illness === 'yes'}
              onChange={handleInputChange}
              id="illnesses-yes"
            />
            <Form.Check
              inline
              label="No"
              name="known_illness"
              type="radio"
              value="no"
              checked={formData.known_illness === 'no'}
              onChange={handleInputChange}
              id="illnesses-no"
            />
          </div>
        </Form.Group>

        <Form.Group className="m-3" controlId="animalDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter description"
          />
        </Form.Group>

        <Form.Group className="m-3" controlId="animalImage">
          <Form.Label>Add Image</Form.Label>
          <Form.Control
            type="file"
            name="image"
            onChange={handleInputChange}
          />
        </Form.Group>

        {formData.images.length > 0 && (
          <Form.Group className="m-3" controlId="animalImages">
            <Form.Label>Current Images</Form.Label>
            <Carousel interval={null}>
              {formData.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image.image_url} // Depends on the image object
                    alt={`Animal Image ${index + 1}`}
                    style={{ height: '300px', objectFit: 'contain' }}
                  />
                  <Carousel.Caption>
                    <Button
                      variant="danger"
                      onClick={() => handleImageDelete(image.id)}
                      disabled={isLoading} // Disable button while loading
                    >
                      {isLoading ? (
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      ) : (
                        'Delete Image'
                      )}
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Form.Group>
        )}

        <Button className='m-2' variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <div style={{ display: "flex", justifyContent: "right" }}>
        <Button href='/adminpage' variant="outline-secondary" >Return</Button>
      </div>
    </div>
  );
}

export default AdminEdit;
