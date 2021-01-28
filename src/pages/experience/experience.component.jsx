import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Tilt from 'react-tilt'
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.png";
import Container from 'react-bootstrap/Container';

import './experience.style.css'

const Experience = () => {
    return (
        <div id="experience">
              <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>  
              <Jumbotron className='jumbo-style'>
                    <Container>
                        <Tilt options={ { max:25 } }>
                            <Card>
                                <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                    <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" />
                                </Card.Header>
                                <Card.Body className="d-flex justify-content-center flex-column">
                                    <div>
                                    <Card.Title className="text-center">Software Engineer Intern</Card.Title>
                                    </div>
                                    <div>
                                        <Card.Text className="text-center style">
                                            <strong className="body-title-style ">Full Stack Developer</strong>
                                            <br />
                                            <strong>Technology:</strong> HTML, CSS, Javascript
                                            <br />
                                            <strong>Duration:</strong> 1 month
                                            <br/>
                                            <strong> Description </strong>
                                            <ul className="text-left">
                                            <li><strong>Developed &amp; enhanced</strong> a fully functional and responsive website.</li>
                            
                                            <li><strong>Provided</strong> payments integration as well, using RazorPay API. 
                                            </li>
                                            

                                            </ul>
                                            
                                            
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tilt>
                    </Container>
              </Jumbotron>       
        </div>
    )
}

export default Experience
