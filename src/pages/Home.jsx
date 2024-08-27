// landing page with welcoming + news carousel banner, and at least 3 highlights featuring "Our mission/About us", "Success stories" & "Get to know our animals"

import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

function Home() {
  return (
    <>
        {/* <div  >
            <Image className='homeBanner' src="/src/images/PAAWS banner.png" alt="a cat and a dog looking to the front with text saying impossible to resist that face" fluid/>
        </div> */}


        <Carousel data-bs-theme="dark" className='homeBanner'>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src="/src/images/PAAWS banner.png"
                alt="a cat and a dog looking to the front with text saying impossible to resist that face"
                />
{/*                 <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src="src\images\PAAWS banner_dark version.png"
                alt="a cat and a dog looking to the front with text saying impossible to resist that face"
                />
            </Carousel.Item>
        </Carousel>

        <div className='homeSections'>
           <Image src="src\images\paws and drawings.png" alt="pawprints" className='pawprints' fluid />
            <div className="meetYourCompaawnion sectionText" >
                <h1 className='sectionTitle'>
                    <Link to="/ourpets" className='sectionTitle'>
                        <p>Meet your</p> <p>compawnion</p>
                    </Link>
                </h1>
            </div>

            <div className="aboutUs sectionText">
                <h1 className='sectionTitle'>
                    <Link to="/" className='sectionTitle'>
                            About Us
                    </Link>
                </h1>
            </div>

            <div className="successStories sectionText">
            <h1 className='sectionTitle'>
                    <Link to="/" className='sectionTitle'>
                        <p>Success</p> <p>Stories</p>
                    </Link>
                </h1>
            </div>
        </div>

        
        

    </>
  );
}

export default Home;