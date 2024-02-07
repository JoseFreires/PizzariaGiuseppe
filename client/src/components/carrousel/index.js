import React from "react";

import './carrouselStyle.css'

import pizzaCalabresa from '../../assets/pizzaCalabresa.jpg'
import pizzaQueijo from '../../assets/pizzaQueijo.jpg'
import pizzaDoce from '../../assets/pizzaBanana.jpg'
import { Container, Carousel, Image } from "react-bootstrap";

function CarrouselPizza() {
  return (
    <Container fluid >
      <Carousel>
        <Carousel.Item>
          <Image 
            src={pizzaCalabresa}
            fluid
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image 
              src={pizzaQueijo}
              fluid
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image 
              src={pizzaDoce}
              fluid
          />
        </Carousel.Item>
      </Carousel>
    </Container>
    
  );
}

export default CarrouselPizza;