import React, {useState, useEffect} from "react";

// Componentes da biblioteca react bootstrap
import {Container, Form, Col, Row} from 'react-bootstrap'

// Componentes da própria aplicação
import logoPizzaria from '../../assets/pizzaria_giuseppe.png'
import ButtonEntrar from "../../components/buttons/buttonEntrar";

// Componentes de outras bibliotecas
import {FaArrowAltCircleLeft, FaRegClipboard} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Importando o CSS
import "./registerUserStyle.css"

import useUserContext from "../../hooks/useAuth";
import Header from "../../components/header";

import axios from "axios";

export default function RegisterUser(){
    let navigate = useNavigate();
    const { register } = useUserContext();
    const [error, setError] = useState();

    // Váriaveis das informações básicas de Cliente
    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userContact, setUserContact] = useState();
    const [userPassword, setUserPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState()
    

    // Váriaveis das informações de endereço de Cliente
    const [adress, setAdress] = useState([])
    const [userCep, setUserCep] = useState('');
    const [userLogradouro, setUserLogradrouro] = useState('');
    const [userNumero, setUserNumero] = useState('');
    const [userComplem, setUserComplem] = useState('');
    const [userBairro, setUserBairro] = useState('');
    const [userCidade, setUserCidade] = useState('');
    const [userUf, setUserUF] = useState('');

    useEffect(() => {
        axios.get(`https://viacep.com.br/ws/${userCep}/json/`).then(setAdress).then(()=>{
            if(userCep.length === 8 || userCep.length === 9){
                setUserLogradrouro(adress.data.logradouro);
                setUserNumero(adress.data.numero);
                setUserComplem(adress.data.complemento);
                setUserBairro(adress.data.bairro);
                setUserCidade(adress.data.localidade);
                setUserUF(adress.data.uf);
            } else{
                console.log("CEP incompleto.")
            }
        })
    })

    const handleRegister = () => {
        if (!userEmail | !userPassword | !userContact | !userName | !passwordConfirm){
            setError("Preencha todos os campos!!")
            return
        } else if (userPassword !== passwordConfirm){
            setError("Senhas Diferentes")
            return
        }
        
        // console.log(adress.data, cep)

        const response = register(
            userName, 
            userEmail, 
            userPassword, 
            userContact,
            userCep, 
            userLogradouro,
            userNumero,
            userComplem,
            userBairro,
            userCidade,
            userUf
        );

        if(response) {
            console.log("Nada bom")
            return;
        } 
        
        alert("Usuário cadastrado!")
        navigate("/loginUser")

    }

    


    return(
        <>
        <Container fluid className="containerMainRegister">
            <Header 
                localSeta = "/loginUser"
            />
            <Form className="containerFormRegister">
                <Row style={{color: "#D30000", textAlign:'center'}}>
                    <h1>
                        Cadastro de Cliente
                    </h1>
                    <p>Comece seu cadastro com informações básicas</p>
                    <FaRegClipboard size={50}/>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Nome completo" 
                            style={{backgroundColor:"#D8D8D8"}}
                            onChange={(e) => {
                                setUserName(e.target.value)
                            }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Número para contato</Form.Label>
                        <Form.Control 
                            type="tel" 
                            placeholder="(xx) xxxxx-xxxx" 
                            style={{backgroundColor:"#D8D8D8"}}
                            onChange={(e) =>{ 
                                setUserContact(e.target.value)
                            }}
                        />
                    </Col>
                    <Col>
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                       
                            type="email" 
                            placeholder="Email" 
                            style={{backgroundColor:"#D8D8D8"}}
                            onChange={(e) => {
                                setUserEmail(e.target.value)
                            }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Senha</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Senha" 
                            style={{backgroundColor:"#D8D8D8"}}
                            onChange={(e) => {
                                setUserPassword(e.target.value)
                            }}
                        />
                    </Col>
                    <Col>
                        <Form.Label>Confirmar Senha</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Confirmar Senha" 
                            style={{backgroundColor:"#D8D8D8"}}
                            onChange={(e) => {
                                setPasswordConfirm(e.target.value)
                            }}
                        />
                    </Col>
                </Row>
            </Form>

            <Form className="containerFormRegisterAdress">
                <Row>
                    <Col>
                        <Form.Label>CEP</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="CEP" 
                        style={{backgroundColor:"#D8D8D8", width:"120px", textAlign:"center"}}
                        onChange={e => setUserCep(e.target.value)}
                        maxLength={9}
                    />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Logradouro</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Logradouro" 
                            style={{backgroundColor:"#D8D8D8"}}
                            value={userLogradouro}
                        />
                    </Col>
                    <Col>
                        <Form.Label>Número</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Número" 
                            style={{backgroundColor:"#D8D8D8"}}
                            value={userNumero}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Complemento</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Complemento" 
                            style={{backgroundColor:"#D8D8D8"}}
                            value={userComplem}
                        />
                    </Col>
                    <Col>
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Bairro" 
                            style={{backgroundColor:"#D8D8D8"}}
                            value={userBairro}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Cidade" 
                            style={{backgroundColor:"#D8D8D8"}}
                            value={userCidade}
                        />
                    </Col>
                    <Col>
                        <Form.Label>UF</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="UF" 
                            maxLength={2}
                            style={{backgroundColor:"#D8D8D8", width:"50px", textAlign:"center"}} 
                            value={userUf}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col style={{display:"flex", alignItems:'center', justifyContent:"space-between"}}>
                            <p>{error}</p>
                            <ButtonEntrar 
                                name="Cadastrar!"
                                action={handleRegister}
                            />                   
                    </Col>
                </Row>
            </Form>
        </Container>
        </>
    )
}