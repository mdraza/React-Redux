import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar justify-content-between navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <ul className="navbar-nav my-lg-0">
                    <li className="nav-item">
                        <Link to="/contact/addcontact" className="btn btn-light">Add Contact</Link>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
}

export default Navbar
