import React from 'react'
import './Brands.css'
import { Visa, TymeBank, Distell, Spotify, Microsoft, Engen, Nike, Wesgrow, Multichoice, Pnp, Liquid, Tfg, Sanlam, Santam, Bbc } from './Icons'

function Brands() {
  return (
    <div className='container p-5'>
        <div className='container-fluid heading'>
            <h1 className='heading-text'>----you'll be in good company</h1>
        </div>
        <div>
            <h1 className='offer-line'>trusted by leading brands</h1>
        </div>
        <div className='container'>
            <div class="row row-cols-5">
                <Visa/>
                <TymeBank/>
                <Distell/>
                <Spotify/>
                <Microsoft/>
                <Engen/>
                <Nike/>
                <Wesgrow/>
                <Multichoice/>
                <Pnp/>
                <Liquid/>
                <Tfg/>
                <Sanlam/>
                <Santam/>
                <Bbc/>
            </div>
        </div>
    </div>
  )
}

export default Brands