import React from 'react'
import '../assets/styles/Navbar.css'

const Navbar = () => {
    return (
        // <div>


        // <nav id="navbar" class="nav navbar navbar-expand-lg fixed-top">

        //     {/* Logo */}
        //     <a id="nav-logo" class="navbar-brand" href="portfolio.html">Accenture</a>

        //     {/* toogle button */}
        //     <button class="navbar-toggler" id="nav-btn" type="button" data-toggle="collapse"
        //         data-target="#collapsibleNavbar">
        //         <span class="navbar-btn"><i class="fa fa-bars" aria-hidden="true"></i></span>
        //     </button>

        //     {/* Navigation buttons */}
        //     <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
        //         <ul id="nav-ul" class="navbar-nav">
        //             <li class="nav-item navigation-list">
        //                 <a class="nav-link nav-custom-link" href="#top">Home</a>
        //             </li>
        //             <li class="nav-item navigation-list">
        //                 <a class="nav-link nav-custom-link" href="#about-me">About</a>
        //             </li>
        //             <li class="nav-item navigation-list">
        //                 <a class="nav-link nav-custom-link" href="#experience">Experience</a>
        //             </li>
        //             {/* <li class="nav-item navigation-list">
        //                 <a class="nav-link nav-custom-link" href="#my-portfolio">Portfolio</a>
        //             </li> */}
        //             <li class="nav-item navigation-list">
        //                 <a class="nav-link nav-custom-link" href="#section-contact">Contact</a>
        //             </li>
        //             {/* <li class="nav-item navigation-list">
        //                 <a class="nav-link nav-custom-link" href={Pdf} target="_blank">Resume</a>
        //             </li> */}
        //         </ul>
        //     </div>
        // </nav>


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

                    {/* <div class="mx-auto collapse navbar-collapse" id="collapsibleNavbar">
             <ul id="nav-ul" class="navbar-nav">
                 <li class="nav-item navigation-list">
                     <a class="nav-link nav-custom-link" href="#top">Home</a>
                 </li>
                 <li class="nav-item navigation-list">
                     <a class="nav-link nav-custom-link" href="#about-me">About</a>
                 </li>
                <li class="nav-item navigation-list">
                     <a class="nav-link nav-custom-link" href="#experience">Experience</a>
                 </li>
               {/* <li class="nav-item navigation-list">
                     <a class="nav-link nav-custom-link" href="#my-portfolio">Portfolio</a>
                 </li> *
                 <li class="nav-item navigation-list">
                     <a class="nav-link nav-custom-link" href="#section-contact">Contact</a>
                 </li>
                 {/* <li class="nav-item navigation-list">
                     <a class="nav-link nav-custom-link" href={Pdf} target="_blank">Resume</a>
                 </li> 
             </ul>
            </div> */}

                    <div>
                        <button class="btn" type="submit">Let's Talk</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar