import React from 'react';
import { MDBFooter, MDBContainer,  MDBIcon } from 'mdb-react-ui-kit';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from "react-router-dom";

export default function App() {
    return (
        <MDBFooter style={{ backgroundColor: "#000" }} className='text-center text-lg-start text-muted mt-5'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom container'>
                <div className='me-5 d-none d-lg-block text-white'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div className='text-white'>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="github" />
                    </a>
                </div>
            </section>

            <section className='text-white'>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <Row className='mt-3 text-center'>
                        <Col xs={12} md={6} lg={3} className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                Cherry Trip
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                            </p>
                        </Col>



                        <Col xs={12} md={6} lg={3} className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                            <NavLink className="nav-link link" to="/home">
                            Home
                          </NavLink>
                            </p>
                           
                            <p>
                            <NavLink className="nav-link link" to="/contact">
                            Contact
                          </NavLink>
                            </p>
                            <p>
                            <NavLink className="nav-link link" to="/login">
                            Login
                          </NavLink>
                            </p>
                        </Col>

                        <Col xs={12} md={6} lg={3} className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                Gilgit, GB 10012, PK
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                info@example.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                            </p>
                            <p>
                                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                            </p>
                        </Col>
                        <Col xs={12} md={6} lg={3} className='mx-auto mb-4 text-center'>
                            <h4>Instagram Feed</h4>
                            <Row className='justify-content-center'>
                                <Col xs={4} md={4} lg={4}>
                                    <img src='/img/footer2.png' />
                                </Col>
                                <Col xs={4} md={4} lg={4}>
                                    <img src='/img/footer4.png' />
                                </Col>
                                <Col xs={4} md={4} lg={4}>
                                    <img src='/img/footer4.png' />
                                </Col>
                            </Row>
                            <Row className='mt-4 justify-content-center '>
                                <Col xs={4} md={4} lg={4}>
                                    <img src='/img/footer5.png' />
                                </Col>
                                <Col xs={4} md={4} lg={4}>
                                    <img src='/img/footer6.png' />
                                </Col>
                                <Col xs={4} md={4} lg={4}>
                                    <img src='/img/footer2.png' />
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </MDBContainer>
            </section>

            <div className='text-center p-4 text-white border-top container' >
                © 2022 Copyright:
                <a className='text-reset ' href='#'>
                    Cherry.com 💖
                </a>
            </div>
        </MDBFooter>
    );
}