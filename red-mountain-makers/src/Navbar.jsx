import React from 'react'
import ReactDOM from 'react-dom'
import M from 'materialize-css';


function Navbar() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav className="#d50000 red accent-4 z-depth-4" role="navigation">
                        <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo black-text text-darken-2">Red Mountain Makers</a>
                            <ul className="right hide-on-med-and-down">
                                <li><a className="black-text text-darken-2" href="#">Classes We Offer</a></li>
                                <li><a className="black-text text-darken-2" href="#">Membership</a></li>
                                <li><a className="black-text text-darken-2" href="#">Donate</a></li>
                                <li><a className="black-text text-darken-2" href="#">Contact</a></li>
                            </ul>
                        </div>
                        <ul id="nav-mobile" className="sidenav">
                            <li><a className="black-text text-darken-2" href="#">Classes We Offer</a></li>
                            <li><a className="black-text text-darken-2" href="#">Membership</a></li>
                            <li><a className="black-text text-darken-2" href="#">Donate</a></li>
                            <li><a className="black-text text-darken-2" href="#">Contact</a></li>
                        </ul>
                        <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    </nav>
                </div>    
            </div>
        )
    }



export default Navbar