import React from "react";
import { GiRotaryPhone } from 'react-icons/gi'

import './footerStyle.css'
import { Container, Row, Col } from "react-bootstrap";

export default function Footer(){
    return(
        <Container fluid style={{backgroundColor: "#D30000", color: "#fff"}}>
            <Row>
                <Col style={{textAlign: "center"}}>
                    <p>Nossos Horários: </p>
                    <p>Ter. a Qui.: 17h até 23h</p>
                    <p>Sex. a Dom.: 17h até 01h</p>
                </Col>
                <Col style={{textAlign: "center"}}>
                    <p>Local:  Rua dos Bobos, 001 - Vila da Ficção</p>
                    <p>São Paulo - SP</p>
                </Col>
                <Col style={{textAlign: "center"}}>
                    <p>Contatos:</p>
                    <p>tel. (11) 91111-2222</p>
                    <p>email: pizzariaGiuseppe@gmail.com</p>
                </Col>
            </Row>
        </Container>
        
    )
}