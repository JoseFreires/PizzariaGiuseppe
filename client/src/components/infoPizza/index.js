import React from "react";
import {Row, Col, Container, Image} from "react-bootstrap"

import './infoStyle.css'

import restaurante from '../../assets/restaurante.jpg'

export default function InfoPizza(){
    return(
        <Container fluid style={{paddingTop:"20px"}}>
            <Row>
                <Col sm={5}>
                   <Image src={restaurante} fluid/>
                </Col>
                <Col sm={6}>
                    <h2>Nossa história</h2>
                    <p>Giuseppe cresceu em uma família italiana com uma tradição culinária centenária, aprendendo os segredos da pizza com seu avô Nonno Giovanni. Apaixonado pela arte, Giuseppe decidiu levar a autenticidade das pizzas italianas para o Brasil. Ao abrir a "Pizzaria do Giuseppe", ele compartilhou não apenas receitas, mas a essência acolhedora da Toscana. Cada pizza contava uma história de tradição, amor e coragem, transformando a pizzaria em um pedaço da Itália sob os céus tropicais do Brasil. </p>
                </Col>
            </Row>
        </Container>
    )
}