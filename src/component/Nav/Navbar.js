import React, { useState } from 'react'
import './Navbar.css';
import carlogo from '../../img/car.png'
import {AiFillCaretDown } from "react-icons/ai";
import { FaBars ,FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [ toggle, setToggle ] = useState(false)

    return (
        <div className='nav-container'>
            <img className='carimg' src={ carlogo } alt=""/>
            <div className="right-nav">
                <ul className={toggle ? 'nav-items' : 'remove'}>
                    <li>Home</li>
                    <div class="dropdown">
                        <li class="dropbtn">Services <AiFillCaretDown className='down' /> </li>
                        <div class="dropdown-content">
                            <a href="/">Vehicle Owners</a>
                            <a href="/">Auto Shop Owners</a>
                            <a href="/">Auto Part Vendors</a>
                            <a href="/">Technicians</a>
                        </div>
                    </div>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
                <div className='menu' onClick={() => setToggle(!toggle)}>
                    {toggle ? <FaTimes/> : <FaBars/>}
                </div>  
            </div>
        </div>
    )
}

export default Navbar
