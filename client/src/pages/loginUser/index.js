import React, {useState} from "react";

// Componentes da biblioteca react bootstrap
import Container  from "react-bootstrap/Container";
import  Form  from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col'
import Row  from "react-bootstrap/Row";

// Componentes da própria aplicação
import ButtonEntrar from "../../components/buttons/buttonEntrar";
import logoPizzaria from '../../assets/pizzaria_giuseppe.png'

// Componentes de outras bibliotecas
import {FaArrowAltCircleLeft} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

// Importando o CSS
import './loginUserStyle.css'

import useContext from "../../hooks/useAuth";
import Header from "../../components/header";

export default function LoginUser(){
    const { login } = useContext();
    
    let navigate = useNavigate();

    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();

    const [error, setError] = useState();

    const handleLogin = () => {
        setError("")
        if(!userEmail | !userPassword){
           setError("Preencha todos os campos!") 
           return;
        }

        const response = login(userEmail, userPassword)

        if(response){
            alert(response)
            return;
        } 

        navigate("/localPedidos")
    }
    

    return(
        <Container fluid className="containerMainLogin">
            <Header 
                localSeta = "/"
            />
            <Row style={{marginLeft: "1%"}}>
                <h1 style={{fontWeight:"bold"}}>
                    Portal do Cliente
                </h1>
                <p>Efetue seu login para fazer seu pedido.</p>
            </Row>
            <Row className="containerInputsLogin">
                <Col className="containerLeftLogin">
                    <Form>
                        <Form.Group>
                            <Form.Label>Seu Email</Form.Label>
                            <Form.Control 
                                placeholder="Email" 
                                style={{backgroundColor:"#D8D8D8"}}
                                onChange={(e) => {
                                    setUserEmail(e.target.value)
                                }}
                            />

                            <Form.Label>Sua senha</Form.Label>
                            <Form.Control 
                                type="password"
                                placeholder="Sua senha" 
                                style={{backgroundColor:"#D8D8D8"}}
                                onChange={(e) => {
                                    setUserPassword(e.target.value)
                                }}
                            />
                        </Form.Group>
                    </Form>
                    <p>{error}</p>
                    <ButtonEntrar 
                        name="Entrar"
                        action={handleLogin}
                    />

                </Col>
                <Col className="containerRightImageLogin">
                    <img
                        className="d-block w-400"
                        src={logoPizzaria}
                        alt="Pizza Calabresa"
                        id="logoPizzariaLogin"
                    />
                </Col>
                <Row>
                    <div className="containerNovoClienteLogin">
                        <p>Cliente novo?</p>
                        <Link to="/registerUser"id="linkLogin">
                            <p>Faça seu cadastro.</p>
                        </Link>
                    </div>
                </Row>
            </Row>
            
        </Container>
    )
}