// import React from 'react'
import Navbar from "./commen/navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import React from "react";
import ClickerApp from "./counters";
import Card from "./card1"
import Card2 from "./card2"
import Slider from "./slider";
import icon1 from "./img/calendar2.png"
import icon2 from "./img/Group.png"
import icon3 from "./img/Group1.png"
import icon4 from "./img/Group2.png"
import weekind from "./img/weekend.png"
import tou from "./img/TOU.png"

import './home.css';
import Footer from "./commen/Footer";

class Home extends React.Component {


    render() {
        return (
            <div>
                <div className='backgroundHome'>
                    <div className='HomeFront'>
                        <Navbar />
                        <Container className='text-center '>
                            <Row>
                                <h1 className='homeTitle'>Your Journey Begins</h1>
                            </Row>
                            <Row>
                                <p className='homePara'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim a
                                </p>
                            </Row>
                        </Container>
                        <Container className='whereContainer  mt-5'>
                            <Row>
                                <Col xs={11} className="text-danger ms-5 mt-3 whereTxt">Where to ?</Col>
                            </Row>
                            <Row className='m-3 d-flex justify-content-center '>
                                <Col lg={4} md={7} className="border m-2 ms-0  date">
                                    <input type="date" name="name" />
                                    <i className="fa fa-arrow-right text-danger"></i>
                                    <input type="date" name="name" className='ms-2' />
                                    <i className="fa fa-calendar text-danger ms-1"></i>
                                </Col>
                                <Col lg={2} md={5} className=" mt-2 checkBoxCol ">
                                    <input type="checkbox" className='checkbox' />
                                    <span className='Dont'>Dont know date</span>
                                </Col>
                                <Col lg={3} md={7} className="border m-2  guestCol">
                                    <i className="fa fa-user text-danger userIcon "></i>
                                    <span className='ms-5'>Guests</span>

                                    <div class="dropdown">
                                        <span><i className="fa fa-angle-down downIcon "></i></span>
                                        <div class="dropdown-content">
                                            <div className='mt-3 '>
                                                <h6 >Adults</h6>
                                                <div className="counter">
                                                    <ClickerApp />
                                                </div>
                                                <span className='text-secondary'>Age 13 or above</span>
                                            </div>
                                            <div className='mt-3'>
                                                <h6 >Childern</h6>
                                                <div className="counter">
                                                    <ClickerApp />
                                                </div>
                                                <span className='text-secondary'>Age 2 - 12</span>

                                            </div>
                                            <div className='mt-3'>
                                                <h6 >Infants</h6>
                                                <div className="counter">
                                                    <ClickerApp />
                                                </div>
                                                <span className='text-secondary'>under 2</span>

                                            </div>

                                        </div>
                                    </div>
                                </Col>
                                <Col lg={2} md={5} className="bg-danger mb-3 align-middle text-center mt-2  startPlanning">
                                    <Nav.Link className="align-middle" href="#action6">Start Planning</Nav.Link>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div className="bgLine">
                    <Card />
                    <Container className=" mt-5 geToKnow  text-center">
                        <Row>
                            <Col >
                                <h3>Get To <span className="know">Knows</span> US</h3>
                                <p>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmod tempor .</p>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="mt-5 ">
                        <Row className="text-center">
                            <Col xs={12} md={6} lg={3}>
                                <img src={icon1} />
                                <h3 className="bookingTitle mt-3">Booking system</h3>
                                <p className="bookingPara mt-3">Lorem ipsum dolor sit amet, consectetur </p>
                            </Col>
                            <Col xs={12} md={6} lg={3}>
                                <img src={icon2} />
                                <h3 className="bookingTitle mt-3">Sightseeing</h3>
                                <p className="bookingPara mt-3">Lorem ipsum dolor sit amet, consectetur </p>
                            </Col>
                            <Col xs={12} md={6} lg={3}>
                                <img src={icon3} />
                                <h3 className="bookingTitle mt-3">Adventure</h3>
                                <p className="bookingPara mt-3">Lorem ipsum dolor sit amet, consectetur </p>
                            </Col>
                            <Col xs={12} md={6} lg={3}>
                                <img src={icon4} />
                                <h3 className="bookingTitle mt-3">Wildlife</h3>
                                <p className="bookingPara mt-3">Lorem ipsum dolor sit amet, consectetur </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container fluid className="weekindContainer ">
                    <h1 className="weekindTitle">Weekinds in
                        Gilgit, Chitral</h1>
                    <p className="weekindPara">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna</p>
                </Container>
                <Container fluid className="weekend"><img src={weekind} /></Container>
                <Container fluid className="hottest mt-5">
                    <h3 className="text-center hottestTitle">Our <span className="know">hottest</span> tours</h3>
                    <p className="text-center hottestPara mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                </Container>
                <Card2 />

                <img src={tou} className="tou" />

                <div className="container-fluid">
                    <Slider />
                </div>
                <Container className="bg-danger subscribe mt-5 mb-5 ">
                    <Row>
                        <Col xs={12} md={12} lg={4} className="mt-5 mb-4 text-center">
                            <h3 className="joinNews ">Join newsletter</h3>
                            <span className="joinNewsTxt ">to receive our best deals</span>
                        </Col>
                        <Col xs={12} md={12} lg={8} className="mt-5 mb-4  ">
                            <input type="search" className="subscribeInput" />
                            <button type="submit" className=" subscribeButton">Subscribe</button>
                        </Col>

                    </Row>
                </Container>

                <Footer />
            </div>
        );
    }
}
export default Home;

