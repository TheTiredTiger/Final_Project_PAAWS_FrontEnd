// Should feature a Card for each animal + left-side menu with labels for filtering (species, gender, life stage, location)

// Could maybe add a sort option above?

// Should we have a cap for animals that are already being sponsored?

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FilterSection from '../components/FilterSection';
import RegularCard from '../components/RegularCard';

function AnimalSearch() {
    return ( <>
        <Container fluid>
            <Row >
                <Col lg="3" >
                    <FilterSection />
                </Col>
                <Col lg="9" style={{display: "flex"}}>
                    {[1,2,3].map((el) =>{
                        return <RegularCard lg="3"/>
                    })}
                </Col>
            </Row>
        </Container>
    </> );
}

export default AnimalSearch;