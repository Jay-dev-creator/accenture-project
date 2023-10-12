import React from 'react'
import '../assets/styles/Brands.css'
// import all the brand icons
import { Visa, TymeBank, Distell, Spotify, Microsoft, Engen, Nike, Wesgrow, Multichoice, Pnp, Liquid, Tfg, Sanlam, Santam, Bbc } from './Icons'

const Brands = () => {
    return (
        <div className='container pt-5' id='Brands'>
            <div className='row container-fluid heading'>
                <span className='col-2 line my-auto'></span>
                <h1 className='col-10 heading-text'>You'll be in good company</h1>
            </div>
            <div>
                <h1 className='offer-line mt-4'>Trusted by leading brands</h1>
            </div>
            <div className='container mb-5'>
                <div className='row row-cols-5 brand-icons'>
                    <Visa />
                    <TymeBank />
                    <Distell />
                    <Spotify />
                    <Microsoft />
                    <Engen />
                    <Nike />
                    <Wesgrow />
                    <Multichoice />
                    <Pnp />
                    <Liquid />
                    <Tfg />
                    <Sanlam />
                    <Santam />
                    <Bbc />
                </div>
            </div>
        </div>
    )
}

export default Brands