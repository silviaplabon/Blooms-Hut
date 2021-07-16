
import React, { createContext, useContext, useEffect, useState } from 'react';
import './Navbar.css';
import { Link as Link1, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faSearch } from '@fortawesome/free-solid-svg-icons'

import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { UserContext } from '../../../App';


const Header = ({ state }) => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        state == false ? document.getElementById('navbarContainer').style.backgroundColor = '#1B1B1B' :
            document.getElementById('navbarContainer').style.backgroundColor = ''
    }, [state])


    return (
        <div className="headerStyle" id="navbarContainer"  >
            <nav className="navbar navbar-expand-md navbar-light fw-bold navbarColor  navbarDesign container pt-5">
                <div className="container-fluid">
                    <h1 className="navbar-brand h2HeaderColor fw-bold " href="#">Blooms Hut</h1>
                    <button className="navbar-toggler" type="button" style={{ backgroundColor: 'white' }} data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav" >
                            <Link1 to="/" className="nav-link text-white" >Home</Link1>
                            <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}
                                className="nav-link text-white">About</Link>
                            <Link activeClass="active" to="flowersSection" spy={true} smooth={true} offset={50} duration={500}
                                className="nav-link text-white">Flowers</Link>
                            <Link activeClass="active" to="arrangementsSection" spy={true} smooth={true} offset={50} duration={500}
                                className="nav-link text-white">Arrangements</Link>
                            {(loggedInUser.email) ? <button onClick={() => setLoggedInUser({})} className="btn  buttonColor   buttonStyleHeader  nav-link fw-bold " style={{ color: 'white' }}>Logout</button> :
                                <Link1 to="/auth/login" className="btn   buttonStyleHeader buttonColor fw-bold">Login</Link1>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;