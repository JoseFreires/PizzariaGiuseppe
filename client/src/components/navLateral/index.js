import React, { useState } from "react";

import Button from 'react-bootstrap/Button'
import Offcanvas  from "react-bootstrap/Offcanvas";

import { Link } from "react-router-dom";

import {FaAlignJustify} from 'react-icons/fa'
import {FaUserCircle} from "react-icons/fa";

import './navLateralStyle.css'

export default function NavLateral(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return(
        <>
            <Button onClick={handleShow} id="buttonNav">
                <FaAlignJustify color="#D30000" size={25}/>
            </Button>
            <Offcanvas show={show} onHide={handleClose} >
                <Offcanvas.Header className="containerHeaderNavLateral">
                    <Link to="/infoUser">
                        <FaUserCircle color="#D30000" size={80}/>
                    </Link>
                    <Offcanvas.Header>Usuário</Offcanvas.Header>
                </Offcanvas.Header>
                <Offcanvas.Body className="localButtonsNav">
                    {/* <Button>Histórico</Button> */}
                    <Link to="/localPedidos">
                        <Button style={{backgroundColor:"#D30000"}}>Novo Pedido</Button>
                    </Link>
                    <Link to="/infoUser">
                        <Button style={{backgroundColor:"#D30000"}}>Informações</Button>
                    </Link>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}