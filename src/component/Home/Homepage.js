import React from 'react';
import Navbar from '../Nav/Navbar';
import './Homepage.css';
import { HiOutlineDotsVertical } from "react-icons/hi";

const Homepage = () => {
    return (
        <div className='home-wrapper'>
            <Navbar />
            <div className="message">
                <div className='price'>
                    <h3>$120,000.00</h3> 
                    <HiOutlineDotsVertical className='line'/>
                    <h4>BUY NOW</h4>
                </div>
                <h5>Mercedes AMG SL63 (Black)</h5>
                <div>
                    <p>Twin turbo-charged 5.5 litre V8</p>
                    <p>577 Horse Power</p>
                    <p>664 lb-ft of Torque</p>
                    <p>7 speed rear Automatic Gear box</p>
                </div>
            </div>
        </div>
    )
}

export default Homepage;
