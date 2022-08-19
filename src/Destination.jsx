import React from 'react'
import Navbar from './components/commen/navbar'
import Footer from "./components/commen/Footer";
import './destination.css';
// import CardDestination from "./components/destinationcard1";
import CardDestination from "./components/destinationcard";

function Destination() {
    return (
        <div>
            <div className='backgroundDestination'>
                <div className='destinationFront'>
                    <Navbar />
                    <div className='text-center'>
                    <h1 className='destinationTitle'>Destination List</h1>
                    </div>
                </div>
            </div>
            <CardDestination/>


            <Footer/>
        </div>
    )
}

export default Destination
