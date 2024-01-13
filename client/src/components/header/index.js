import React from "react";
import logoPizzaria from '../../assets/pizzaria_giuseppe.png'

// Componentes da biblioteca react bootstrap
import Col from 'react-bootstrap/Col'
import Row  from "react-bootstrap/Row";

import {FaArrowAltCircleLeft} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import './headerStyle.css'

export default function Header(props) {
    return(
        <Row className="containerHeader">
                <Col>
                    <Link to={props.localSeta}>
                        <FaArrowAltCircleLeft size="20px" color="#D30000"/>
                    </Link>
                </Col>
                <Col className="containerLogoHeader">
                    <Link to="/">
                        <img
                            className="d-block w-20"
                            src={logoPizzaria}
                            alt="Pizza Calabresa"
                            height="75px"
                        />
                    </Link>
                </Col>
        </Row>
    )
}