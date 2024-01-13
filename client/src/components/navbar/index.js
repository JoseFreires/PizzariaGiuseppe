import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container";

import './navbarStyle.css'

import logoPizzaria from '../../assets/pizzaria_giuseppe.png'

export default function Header(){

    return(
        <Container fluid style={{position: 'fixed', zIndex: '3', margin: '0', backgroundColor: '#F8F9FA'}}>
            <Navbar bg="light" expand="lg" variant="light">
                <Container style={{justifyContent:"space-between"}}>
                    <img
                        className="d-block w-20"
                        src={logoPizzaria}
                        alt="Pizza Calabresa"
                        height="80px"
                    />
                    <Nav>
                        <Nav.Link href="#home" id="linkNav">Home</Nav.Link>
                        <Nav.Link href="#cardapio" id="linkNav">Cardápio</Nav.Link>
                        <Nav.Link href="#localizacao" id="linkNav">Localização</Nav.Link>
                        <Nav.Link href="#contato" id="linkNav">Contato</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Container>
    )
}