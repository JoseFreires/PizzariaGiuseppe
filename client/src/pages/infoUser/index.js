import React from "react";

// Componentes da biblioteca react bootstrap
import Container  from "react-bootstrap/Container";
import  Form  from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col'
import Row  from "react-bootstrap/Row";

// Componentes de outras bibliotecas
import {FaArrowAltCircleLeft} from "react-icons/fa";
import {FaUserEdit} from "react-icons/fa";

import { Link } from "react-router-dom";

import ButtonEntrar from "../../components/buttons/buttonEntrar";
import logoPizzaria from '../../assets/pizzaria_giuseppe.png';
import NavLateral from "../../components/navLateral";

import "./infoUserStyle.css"

export default function userInfo(){
    return(
        <Container fluid className="containerMainInfoUser">
            <Row className="containerHeaderInfoUser">
                <Col>
                    <NavLateral />
                </Col>
                <Col className="containerLogoInfoUser">
                    <Link to="/">
                        <img
                            className="d-block w-20"
                            src={logoPizzaria}
                            alt="Pizza Calabresa"
                            height="50px"
                        />
                    </Link>
                </Col>
            </Row>
            <Form className="containerFormUserInfo" aria-disabled="false">
                
                <Row>
                    <Col>
                        <h1 style={{color: "#D30000", fontWeight:"bold"}}>
                            Informações do Cliente
                        </h1>
                        <p>Suas informações estão aqui e podem ser editadas</p>
                    </Col>
                    
                </Row>
                <Row>
                    <Col style={{marginTop:"30px", textDecoration:"underline"}}>
                        <h3>
                            Informações Gerais
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Nome" style={{backgroundColor:"#D8D8D8"}}/>    
                    </Col>
                    <Col>
                        <Form.Label>Sobrenome</Form.Label>
                        <Form.Control type="text" placeholder="Sobrenome" style={{backgroundColor:"#D8D8D8"}}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Número para contato</Form.Label>
                        <Form.Control type="tel" placeholder="(XX) xxxxx-xxxx" style={{backgroundColor:"#D8D8D8"}}/>
                    </Col>
                    <Col>
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="text" placeholder="E-mail" style={{backgroundColor:"#D8D8D8"}}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Nova senha</Form.Label>
                        <Form.Control type="password" placeholder="Nova Senha" style={{backgroundColor:"#D8D8D8"}}/>
                    </Col>
                    <Col>
                        <Form.Label>Repita a senha</Form.Label>
                        <Form.Control type="password" placeholder="Repita a senha" style={{backgroundColor:"#D8D8D8"}}/>
                    </Col>
                </Row>
                <Row>
                    <Col style={{marginTop:"50px", textDecoration:"underline"}}>
                        <h3>
                            Informações de Endereço
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>CEP</Form.Label>
                        <Form.Control type="text" placeholder="CEP" style={{backgroundColor:"#D8D8D8", width:"100px", textAlign:"center"}}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Logradouro</Form.Label>
                        <Form.Control type="text" placeholder="Logradouro" style={{backgroundColor:"#D8D8D8"}}/>
                    </Col>
                    <Col>
                        <Form.Label>Número</Form.Label>
                        <Form.Control type="text" placeholder="Número" style={{backgroundColor:"#D8D8D8"}}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Complemento</Form.Label>
                        <Form.Control  type="text" placeholder="Complemento" style={{backgroundColor:"#D8D8D8"}}/>
                    </Col>
                    <Col>
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control type="text" placeholder="Bairro" style={{backgroundColor:"#D8D8D8"}}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control type="text" placeholder="Cidade" style={{backgroundColor:"#D8D8D8"}}/>
                    </Col>
                    <Col>
                        <Form.Label>UF</Form.Label>
                        <Form.Control type="text" placeholder="UF" style={{backgroundColor:"#D8D8D8", width:"50px", textAlign:"center"}}/>
                    </Col>
                </Row>
                <Row>
                    <Col style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>
                        <ButtonEntrar name="Editar"/>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}