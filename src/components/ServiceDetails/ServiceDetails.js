import { Card, Col, Row } from 'react-bootstrap';

const ServiceDetails = (props) => {

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

export default ServiceDetails;