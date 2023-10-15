import { useState } from 'react';
import '../styles/Navbar.css';
import {Link} from 'react-scroll';

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
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500} ><li>Home</li></Link>
        <Link to="about" spy={true} smooth={true} offset={-100} duration={500} ><li>About</li></Link>
        <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} ><li>Projects</li></Link>
        <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} ><li>Contact</li></Link>
        </ul>
        <i className="ri-menu-line" onClick={toggleActive}></i>
        </nav>

        <div className='mobile-nav' style={isActive ? {display : 'flex'} : {display : 'none'}}>
        <i className="ri-close-line" onClick={toggleActive}></i>
            <ul>
                <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={toggleActive}><li>Home</li></Link>
                <Link to="about" spy={true} smooth={true} offset={-100} duration={500}  onClick={toggleActive}><li>About</li></Link>
                <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} onClick={toggleActive}><li>Projects</li></Link>
                 <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={toggleActive}><li>Contact</li></Link>
            </ul>
        </div>
        </>
    )
}