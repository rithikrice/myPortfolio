import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Profile from '../../assets/img/profile/profile.webp';
import Button from 'react-bootstrap/Button'


import './about.style.css';

const About = () => {
    return (
        <div id='about'>
            <div className="about">
                <h1 className='pt-3 text-center font-details pb-3'>ABOUT ME</h1>
                {/* padding top and bottom=pt3 and pb5 */}
                <Container> 
                    <Row className='pt-3 pb-5 align-items-center'>
                        {/* Profile Pic */}
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2">
                                <Image src={Profile} className="profile justify-content-end" alt="profile" thumbnail fluid/>
                            </Row>
                        </Col>
                        {/* About me description */}
                        <Col xs={12} md={6}>
                            <Row className="align-item-start p-2 my-details rounded">
                                {/* Description */}
                                Hi there! I am <strong>&nbsp;Rithik Chopra</strong>
                                <br />A self-taught programmer, born and brought up in India. I am a Full Stack Web Developer with React.js, Express.js, Node.js, and MongoDB as my tech stack.
                                <br />
                                Currently, I'm pursuing my majors in Chemical Engineering from IIT BHU.
                                <br />
                                Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                                <br />
                                Along with that, I also help people as a COACH on their journey of becoming a professional programmer. 
                                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                                <br /> <br />   
                            </Row>
                            <Row>
                                {/* buttons */}
                                <Col className="d-flex justify-content-cemter flex-wrap">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-primary">Let's Talk</Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://drive.google.com/file/d/1Snbq3x4Itk_ZN4c8J96aNdp4SunXR08Y/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-success">
                                            My Resume
                                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/rithikrice" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-dark">
                                            GitHub
                                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/anand-kumar-jha-745798a4/" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-info">
                                            LinkedIn
                                        </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default About
