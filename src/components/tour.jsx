import React from 'react'
import Navbar from './commen/navbar'
import Footer from "./commen/Footer";
import TourCard from "./tourCards";
import './tour.css';

function Tour() {
    return (
        <div>
            <div className='backgroundTour'>
                <div className='tourFront'>
                    <Navbar />
                    <div className='text-center'>
                    <h1 className='tourTitle'>Tours</h1>
                    </div>
                </div>
            </div>
                
            

            <TourCard/>
            <Footer/>
        </div>
    )
}

export default Tour
