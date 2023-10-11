import React from 'react'
import '../assets/styles/Navbar.css'

const Navbar = () => {
    return (
        <div>
            {/* test */}
            <nav class="navbar p-3 navbar-expand-lg fixed-top">
                <div class="container">

                    {/* logo */}
                    <a class="navbar-brand" href="#">
                        <img src={require("../assets/images/logo.png")} class="" alt="" />
                    </a>

                    {/* toogle button */}
                    <button class="navbar-toggler" id="nav-btn" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavbar">
                        <span class="navbar-btn text-light"><i class="fa fa-bars" aria-hidden="true"></i></span>
                    </button>

                    {/* menu items */}
                    <div class="mx-auto collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item navigation-list">
                                <a class="nav-link" href="#">Services</a>
                            </li>
                            <li class="nav-item navigation-list">
                                <a class="nav-link" href="#">Industries</a>
                            </li>
                            <li class="nav-item navigation-list">
                                <a class="nav-link" href="#">Cases</a>
                            </li>
                            <li class="nav-item navigation-list">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div className='btn nav-button'><a hre></a>Let's Talk</div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar