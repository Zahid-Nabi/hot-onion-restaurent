import React from 'react';
import { FormControl, InputGroup, Button, Container } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <Container className="text-container">
                <h1>Best food waiting for your belly</h1>
                <InputGroup className="my-3">
                    <FormControl
                        placeholder="Search Food Items"
                        aria-label="Search Food Items"
                        aria-describedby="basic-addon2"
                    />
                    <Button className="search-btn" variant="danger" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
            </Container>
        </div>
    );
};

export default Banner;