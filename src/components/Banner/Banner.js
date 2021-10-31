import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

import photo1 from '../../image/200106133144-underscored-inclusive-resorts-lily-beach-resort-maldives-full-169.jpg';
import photo2 from '../../image/4953259.jpg';
import photo3 from '../../image/Thailand.jpg'

const Banner = () => {

    return (
        <div >
            <Container className="mt-5" >
                <Carousel className="justify-content-center align-items-center"  >
                    <Carousel.Item >
                        <img

                            className="d-block w-100"
                            src={photo1}
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img

                            className="d-block w-100"
                            src={photo2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img

                            className="d-block w-100"
                            src={photo3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>

        </div>
    );
};

export default Banner;