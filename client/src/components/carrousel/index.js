import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import './carrouselStyle.css'

import pizzaCalabresa from '../../assets/pizzaCalabresa.jpg'
import pizzaQueijo from '../../assets/pizzaQueijo.jpg'
import pizzaDoce from '../../assets/pizzaBanana.jpg'
import { Container } from "react-bootstrap";

function CarrouselPizza() {
  return (
    <Container fluid>
      <Carousel>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={pizzaCalabresa}
            alt="Pizza Calabresa"
            height="600px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pizzaQueijo}
            height="600px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pizzaDoce}
            alt="First slide"
            height="600px"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
    
  );
}

export default CarrouselPizza;