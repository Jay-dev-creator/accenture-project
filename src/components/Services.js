import React from 'react';
import '../assets/styles/Services.css'
import data from '../data';

const Services = () => {
    return (
        <div className='container services-section'>
            <div className='row container heading'>
                <span className='col-2 line my-auto'></span>
                <h1 className='col-10 heading-text'>What we do</h1>
            </div>
            <div className='mt-4'>
                <h1 className='offer-line'>We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces</h1>
            </div>
            <div class="row">
                {data.map(item => (
                    <div class="col-6 col-lg-3 service-card">
                        <div key={item.id}>
                            <img src={item.icon} className='card-icon' />
                            <div class="fw-bold card-title mb-3 pt-4">{item.title}</div>
                            <p className='card-description'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services