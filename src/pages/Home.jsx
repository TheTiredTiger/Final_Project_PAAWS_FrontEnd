// landing page with welcoming + news carousel banner, and at least 3 highlights featuring "Our mission/About us", "Success stories" & "Get to know our animals"

import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <>
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://d.newsweek.com/en/full/1898130/dog-cat-under-sheet.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://pics.freeartbackgrounds.com/fullhd/Cat_in_Autumn_Landscape_Background-647.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.adventuredogphotography.com/wp-content/uploads/2023/09/0I7A9276.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        <section className="aboutUs" style={{ display: "flex", margin: "3rem" }}>
            <img src="https://www.adventuredogphotography.com/wp-content/uploads/2023/09/0I7A9276.jpg" alt="" style={{ width: "25vw", justifyContent: "left"}}/>
            <div className="sectionText" style={{ textAlign: "left", marginLeft: "2rem" }}>
                <h5>About us</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores vel quasi adipisci aspernatur accusantium quis, assumenda at ab fuga voluptatem nam nemo sequi repellendus doloremque enim exercitationem ratione, dolor placeat.</p>
            </div>
        </section>

        <section className="successStories" style={{ display: "flex", margin: "3rem" }}>
            <div className="sectionText" style={{ textAlign: "left", marginLeft: "2rem" }}>
                <h5>Success stories</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta blanditiis quod obcaecati quaerat corrupti error sunt ratione voluptas aut eligendi inventore deleniti officiis exercitationem veniam, velit excepturi est voluptate tempora.</p>
            </div>
            <img src="https://www.adventuredogphotography.com/wp-content/uploads/2023/09/0I7A9276.jpg" alt="" style={{ width: "25vw", justifyContent: "right"}}/>
        </section>

        <section className="getToKnow" style={{ display: "flex", margin: "3rem" }}>
            <img src="https://www.adventuredogphotography.com/wp-content/uploads/2023/09/0I7A9276.jpg" alt="" style={{ width: "25vw", justifyContent: "left"}}/>
            <div className="sectionText" style={{ textAlign: "left", marginLeft: "2rem" }}>
                <h5>Meet your compawnion</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores vel quasi adipisci aspernatur accusantium quis, assumenda at ab fuga voluptatem nam nemo sequi repellendus doloremque enim exercitationem ratione, dolor placeat.</p>
            </div>
        </section>

        
        

    </>
  );
}

export default Home;