import React, { useState, useEffect } from 'react'
import '../assets/styles/CaseStudies.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CaseStudies() {

    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws');
                if (response.ok) {
                    const data = await response.json();
                    setCardData(data); // Update state with the fetched data
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call the async function to fetch data from the API endpoint
    }, []); // Empty dependency array ensures useEffect runs once after the initial render


    const settings = {
        dots: true,
        infinite: true, //enable infinate scrolling
        speed: 500,
        slidesToShow: 3, // Number of slides to show at a time
        slidesToScroll: 3, // Number of slides to scroll
        autoplay: true, // Enables automatic scrolling
        autoplaySpeed: 1000, // Delay between slides in milliseconds
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='container'>
            <div className='row container heading'>
                <span className='col-2 line my-auto'></span>
                <h1 className='col-10 heading-text'>Case Studies</h1>
            </div>
            <div class="row mt-4 mb-4">
                <Slider {...settings}>
                    {cardData.map(card => (
                        <div class="col-md-4 mb-2">
                            <div key={card.id} className="card case-study-card">
                                <img src={card.imageUrl} className="card-img-top" alt={card.title} />
                                <div className="card-text">
                                    <div className='col-2 line my-auto mb-2'></div>
                                    <h1 className="card-img-title fw-bold">{card.title}</h1>
                                    <p className="case-study-card-text">{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    )
}

export default CaseStudies