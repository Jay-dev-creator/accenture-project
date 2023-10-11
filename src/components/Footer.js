import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div class="container-fluid section-7">
            <div className='row container heading'>
                <span className='col-2 line my-auto'></span>
                <h1 className='col-10 footer-heading-text text-white'>Contact us</h1>
            </div>
            <div className='row'>
                <div className='col-8'>
                    <h1 className='footer-offer-line text-white'>Have a project in mind?<br /> Let's make it happen</h1>
                </div>
                <div className='col-3'>
                    <p className='text-white footer-address'>22 Street Name, Suburb, 8000,<br />
                        Cape Town, South Africa<br />
                        +27 21 431 0001<br />
                        <a href='' className='text-white'>enquirie@website.co.za</a><br />
                    </p>
                    {/* <ul className='col-2'>
                        <li>22 Street Name, Suburb, 8000,</li>
                        <li>Cape Town, South Africa</li>
                        <li>+27 21 431 0001</li>
                        <li><a href='' className='text-white'>enquirie@website.co.za</a></li>
                    </ul> */}
                </div>
            </div>
            <div className='row pt-3'>
                <ul className='col-2'>
                    <li>Terms and services</li>
                    <li>Privacy policy</li>
                    <li>Impressum</li>
                </ul>
                <ul className='col-2'>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
                <ul className='col-2'>
                    <li>Github</li>
                    <li>Linkedin</li>
                    <li>Teams</li>
                </ul>
                <ul className='col-2'>
                    <li>Youtube</li>
                    <li>Behance</li>
                    <li>Dribbble</li>
                </ul>
                <ul className='col-3'>
                    <li>Explore open jobs</li>
                    <li><br /></li>
                    <li>©2000—2023 Company Name</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer