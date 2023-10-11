import React, { useState, useEffect } from 'react'
import './CaseStudies.css'

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
        <div className='container-fluid heading'>
            <h1 className='heading-text'>----What we do</h1>
        </div>
        <div class="row">
            {cardData.map(card => (   
                    <div class="col-md-4">
                        <div key={card.id} className="card case-study-card">
                            <img src={card.imageUrl} className="card-img-top" alt={card.title} />
                            <div className="card-text">
                                <h5 className="card-title fw-bold">{card.title}</h5>
                                <p className="fs-6 case-study-card-text">{card.description}</p>
                            </div>
                        </div>
                    </div>
                
                ))}
        </div>
    </div>
  )
}

export default CaseStudies