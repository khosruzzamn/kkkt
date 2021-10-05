import React from 'react';
import { Card, Col } from 'react-bootstrap';



const card = (props) => {

    const { id, name, image, Details } = props.card;

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

export default card;