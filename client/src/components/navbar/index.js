import React from "react";

import {Nav, Navbar, Container, Image } from "react-bootstrap"

import { FaHome, FaBookOpen, FaMapMarkerAlt, FaPhoneSquareAlt } from "react-icons/fa";

import './navbarStyle.css'

import logoPizzaria from '../../assets/pizzaria_giuseppe.png'

export default function Header(){

    return(
        <Navbar bg="light" expand="lg" variant="light" fixed="top" >
            <Container>
                <Navbar.Brand href="#home"> 
                    <Image src={logoPizzaria} fluid width="100px"/>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#home" id="linkNav">
                            <FaHome size={25} /> <p>Home</p>
                        </Nav.Link>
                        <Nav.Link href="#cardapio" id="linkNav">
                            <FaBookOpen size={25}/> <p>Cardápio</p>
                        </Nav.Link>
                        <Nav.Link href="#localizacao" id="linkNav">
                            <FaMapMarkerAlt size={25}/> <p>Localização</p>
                        </Nav.Link>
                        <Nav.Link href="#contato" id="linkNav">
                            <FaPhoneSquareAlt size={25}/> <p>Contato</p>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                    
            </Container>
        </Navbar>
        
    )
}