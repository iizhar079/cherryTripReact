import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Carousel } from 'react-bootstrap';
import lagdge from "./img/pink-suitcase-with-hat-globe-it 3.png";


import './slider.css';

function Slider() {
    return (
        <div>
            <Container fluid className="m-0 p-0 bg-dark">
                <Row>
                    <Col xs={12} lg={6}>
                        <img className='bgImage w-100 h-100 m-0 p-0' src={lagdge} />
                    </Col>
                    <Col xs={12} lg={6} >
                        <Carousel className='Carousel '>
                            <Carousel.Item interval={1000} className="lagdge">
                                <img
                                    className="CarouselImg w-50"
                                    src="/img/line3.png"
                                    alt="First slide"
                                />
                                <Carousel.Caption className='caption'>
                                    <h1 >Our top reviews</h1>
                                    <h3>Kumrat valley</h3>
                                    <img src='/img/star.png' />
                                    <img src='/img/star.png' />
                                    <img src='/img/star.png' />
                                    <img src='/img/star.png' />
                                    <img src='/img/star.png' />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim a</p>
                                    <div className='NameReviews'>Aadid Khan</div>
                                    <img src='/img/R.pic.png' className='picOfReviews'/>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={1000} className="lagdge">
                                <img
                                    className="CarouselImg w-50"
                                    src="/img/line3.png"
                                    alt="Second slide"
                                />
                                <Carousel.Caption className='caption'>
                                    <h1>Our top reviews</h1>
                                    <h3>Kumrat valley</h3>
                                    <img src='/img/star.png' />
                                    <img src='/img/star.png' />
                                    <img src='/img/star.png' />
                                    <img src='/img/star.png' />
                                    <img src='/img/star.png' />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim a.</p>
                                    <div className='NameReviews'>Aadid Khan</div>
                                    <img src='/img/R.pic.png' className='picOfReviews'/>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={1000} className="lagdge">
                                <img
                                    className="CarouselImg w-50"
                                    src="/img/line3.png"
                                    alt="Third slide"
                                />
                                <Carousel.Caption className='caption'>
                                    <h1>Our top reviews</h1>
                                    <h3>Kumrat valley</h3>
                                    <img src='/img/star.png' />
                                    <img src='/img/star.png' />
                                    <img src='/img/star.png' />
                                    <img src='/img/star.png' />
                                    <img src='/img/star.png' />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim a.
                                    </p>
                                    <div className='NameReviews'>Aadid Khan</div>
                                    <img src='/img/R.pic.png' className='picOfReviews'/>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>


                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Slider;
