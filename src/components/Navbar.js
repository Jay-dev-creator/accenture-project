import React from 'react'
import '../assets/styles/Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className='navbar p-3 navbar-expand-lg fixed-top'>
                <div className='container'>
                    {/* Brand logo */}
                    <a className='navbar-brand' href='#'>
                        <img src={require('../assets/images/logo.png')} className='' alt='' />
                    </a>
                    {/* toogle button */}
                    <button className='navbar-toggler' id='nav-btn' type='button' data-toggle='collapse'
                        data-target='#collapsibleNavbar'>
                        <span className='navbar-btn text-light'><i className='fa fa-bars' aria-hidden='true'></i></span>
                    </button>
                    {/* menu items */}
                    <div className='mx-auto collapse navbar-collapse justify-content-center' id='collapsibleNavbar'>
                        <ul className='navbar-nav'>
                            <li className='nav-item navigation-list'>
                                <a className='nav-link' href='#services-section'>Services</a>
                            </li>
                            <li className='nav-item navigation-list'>
                                <a className='nav-link' href='#Brands'>Industries</a>
                            </li>
                            <li className='nav-item navigation-list'>
                                <a className='nav-link' href='#case-studies'>Cases</a>
                            </li>
                            <li className='nav-item navigation-list'>
                                <a className='nav-link' href='#Footer'>Contact</a>
                            </li>
                        </ul>
                    </div>
                    {/* Navigation bar button */}
                    <div>
                        <div className='btn nav-button'><a hre></a>Let's Talk</div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar