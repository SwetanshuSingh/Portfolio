import { useState } from 'react';
import '../styles/Navbar.css';

export default function Navbar(){

    let [isActive, setIsActive] = useState(false);

    function toggleActive(){
        setIsActive(!isActive);
    }

    return (
        <>
        <nav className="Navbar" style={isActive ? {display : 'none'} : {display : 'flex'}}>
        <h3>Swetanshu</h3>
        <ul className='nav-links'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        <i className="ri-menu-line" onClick={toggleActive}></i>
        </nav>

        <div className='mobile-nav' style={isActive ? {display : 'flex'} : {display : 'none'}}>
        <i className="ri-close-line" onClick={toggleActive}></i>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
        </>
    )
}