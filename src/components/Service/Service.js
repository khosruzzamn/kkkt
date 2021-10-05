import React, { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceDetails from '../ServiceDetails/ServiceDetails';


const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./fakedb.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (

        <div>
            <div className="text-center mt-5 pt-5 pb-5">
                <h2><span className='text-danger'><b>Our</b></span> Courses <span className='text-danger'><b>&</b></span> Services</h2>
            </div>
            <div className='container mb-5'>
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service => <ServiceDetails service={service}
                            key={service.id} />)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Service;























/* import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Service = (props) => {
    console.log(props.service);
    const { id, name, image, Details } = props.service;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {Details}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;


 */