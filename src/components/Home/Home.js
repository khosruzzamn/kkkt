import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css'
import { Row } from 'react-bootstrap';
import Card from '../card/card';
import Contact from '../Contact/Contact';

const Home = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('./fakedb2.JSON')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])


    return (
        <div>
            <div className='hero'>
                <div className="text-center">
                    <h2><span className='text-warning'><b>Education</b></span> & Training Organization</h2>
                    <p>we proviet best education system for you amet mauris lobortis mauris inceptos eget. Urna imperdiet.</p>
                </div>
            </div>
            <div className='service-section mt-5 mb-5'>
                <h2>Our <b className='text-danger'>Services</b></h2>
                <hr className='w-25 mx-auto' />
            </div>

            <div className='container'>
                <Row xs={1} md={4} className="g-4">
                    {
                        cards.slice(0, 4).map(card => <Card
                            card={card}
                        ></Card>)
                    }
                </Row>
            </div>
            {/* <Service /> */}

            <Contact></Contact>
        </div>
    );
};







export default Home;