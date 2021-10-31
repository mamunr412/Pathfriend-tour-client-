import React, { useState, useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Package from '../Package/Package';


const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://eerie-corpse-05166.herokuapp.com/package')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, []);

    return (
        <div>
            <h1 className="text-center mt-5">Our Package </h1>
            <Container>

                {
                    packages.length === 0 ? <div style={{ marginLeft: "50%" }}>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden text-center">Loading...</span>
                        </Spinner> </div> : <Row xs={1} md={3}>
                        {packages.map((offerpack) => <Package
                            key={offerpack._id}
                            offerpack={offerpack}
                        ></Package>)}
                    </Row>
                }

            </Container>

        </div>
    );
};

export default Packages;