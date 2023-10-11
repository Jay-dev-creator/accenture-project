import React, { useState, useEffect } from 'react'
import '../assets/styles/CaseStudies.css'

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

    return (
        <div className='container'>
            <div className='row container heading'>
                <span className='col-2 line my-auto'></span>
                <h1 className='col-10 heading-text'>Case Studies</h1>
            </div>
            <div class="row mt-4 mb-4">
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
            </div>
        </div>
    )
}

export default CaseStudies