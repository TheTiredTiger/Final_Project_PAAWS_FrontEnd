import { Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function AboutUs() {
    return (
    <div className="aboutUsPage">
        <div className="aboutUsHeader">
            <h1>About us</h1>
            <p className="aboutUsText">Learn about our team and mission</p>
        </div>
        <div className="aboutUsDesc">
            <p>
                Welcome to <strong style={{ color: "#ffa69e"}}>PAAWS</strong>—where every animal's journey to love, care, and a forever home begins. We believe every creature deserves a second chance, and our mission is to make that a reality. However, we also understand not everyone has the means or space to welcome an animal compawnion into their home—and that's where sponsorships come in.
            </p>
        </div>
        <Row className="aboutUsDoubleSec">
            <Col lg="6" className="ourStory">
                <h1 className="ourStoryTitle">Our story</h1>
                <p>
                    The inspiration behind <strong style={{ color: "white"}}>PAAWS</strong> came from a deep passion for animals and a desire to help those without a voice. Founded by a duo of animal lovers, <strong style={{ color: "white"}}>Alexis Mendes</strong> and <strong style={{ color: "white"}}>Bárbara Ferreira</strong>, we were motivated by personal experiences with rescue animals, witnessing firsthand the transformative power of love and care. What started as rescuing and fostering stray and abandoned animals in our local community quickly grew into a larger mission: to create a platform that could connect loving families with animals in need while also empowering individuals to sponsor animals who may never find a home due to special needs or other challenges.
                </p>
                <p>
                    We know the bond between animals and humans is profound, and we wanted to make sure that every animal has the opportunity to experience that bond.
                </p>
            </Col>
            <Col lg="6" className="ourMission">
                <h1 className="ourMissionTitle">Our mission</h1>
                <p>
                    Our mission is simple: to fund and find homes for animals in need, and to inspire compassionate action through sponsorship for animals who may not be able to be adopted, or people who may not have the means to welcome them in their homes.
                </p>
                <p>
                    We work tirelessly to lighten the shelters' loads and give every animal we meet a chance at a better life. Whether it's through adoption or sponsorship, our goal is to ensure that each animal has the love, security, and care they deserve.
                </p>
            </Col>
        </Row>
        <div className="motivation">
            <h1 className="motivationTitle">Why we do what we do</h1>
            <div className="motivationText">
                <p>
                    Every animal has a unique story—some were born on the streets, others come from abusive situations, and many simply lose their homes due to life circumstances beyond their control. We believe in a world where animals are treated with respect, kindness, and dignity. Our motivation comes from knowing that, with your help, we can make a difference. We can change lives—both theirs and yours.
                </p>
                <p>
                    By adopting or sponsoring an animal from our platform, you’re not just giving them a second chance at life; you’re becoming part of a community that values love, compassion, and hope.
                </p>
            </div>
        </div>

        <Row className="howItWorks">
            <Col className="howItWorksHeader" lg="3">
                <h1 className="howItWorksTitle">How it <br/> works</h1>
            </Col>
            <Col className="howItWorksOne" lg="3">
                First, filter your search in Our Pets to find your perfect four-legged friend.
            </Col>
            <Col className="howItWorksTwo" lg="3">
                Then, decide whether you want to adopt or sponsor them (either once or monthly).
            </Col>
            <Col className="howItWorksThree" lg="3">
                Finally, fill out the adoption form or proceed to checkout in case of a sponsorhip.
            </Col>
        </Row>
        <Card className="callToAction" style={{ width: '35%', margin: "auto" }}>
            <Card.Body>
                <h1 className="callToActionTitle">Join us</h1>
                <Card.Text className="callToActionText">
                    We invite you to explore the animals waiting for a loving home or sponsor one that touches your heart. Together, we can build a better world for animals—one adoption, one sponsorship, one act of kindness at a time.
                </Card.Text>
                <Button className="primaryButton" href="/ourpets">Check out our pets</Button>
            </Card.Body>
        </Card>

        {/* maybe add PAAWS card + contact us card with random info?? and then footer link should go to section */}
    </div> );
}

export default AboutUs;