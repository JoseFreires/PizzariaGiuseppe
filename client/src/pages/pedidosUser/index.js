import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

import { FaRegCheckCircle, FaRedo, FaCrow } from "react-icons/fa";

import ModalPizzas from "../../components/modal";
import NavLateral from "../../components/navLateral";
import logoPizzaria from '../../assets/pizzaria_giuseppe.png'
import CardPedido from "../../components/cards/cardPedido";

import useAuth from "../../hooks/useAuth";

import api from "../../services/api";

import './pedidosUserStyle.css'

export default function PedidosUser(){
    const { listaPedidos } = useAuth();
    const [novosDados, setNovosDados] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const [pizzasPedidas, setPizzasPedidas] = useState([]);
    const [clienteLista, setClienteLista] = useState([]);

    const tempo = Date.now()
    const hoje = new Date(tempo)


    const enviarPedido = () => {
        let clienteAtual = [];
        let pizzaAtual = [];

        for(let i = 0; i < pizzasPedidas.length; i++){
            if(pizzasPedidas[i].sabor === "Pizza de Calabresa"){
                pizzaAtual = pizzasPedidas[i];
            }
        }
        for(let i = 0; i < clienteLista.length; i++){
            if(clienteLista[i].email === "brook@gmail.com"){
                clienteAtual = clienteLista[i];
            }
        }

        console.log(clienteAtual, pizzaAtual)


    }
    
    return(
        <Container fluid className="containerPedidosUser">
            <Row className="containerHeaderPedidos">
                <Col>
                    <NavLateral/>
                </Col>
                <Col className="containerLogoUser">
                    <Link to="/infoUser">
                        <img
                            className="d-block w-20"
                            src={logoPizzaria}
                            alt="Pizza Calabresa"
                            height="75px"
                        />
                    </Link>
                </Col>
            </Row>
            <Container fluid className="containerConteudoPedidoUser">
                <Row className="tituloPage">
                    <h1>Faça seu pedido do dia</h1>
                    <p>Aqui você fará seu pedido do dia {hoje.toLocaleDateString()}</p>
                </Row>
                <Row className="rowBotaoModal">
                    <Col style={{display: "flex", justifyContent:"center"}}>
                        <ModalPizzas />
                    </Col> 
                </Row>
                <Row className="rowCards">
                    {novosDados.map((data) => {
                        return(
                            <CardPedido 
                                index={data.index}
                                qnt={data.qntPizzas}
                                sabor1={data.sabor[0]}
                                sabor2={data.sabor[1]}
                                sabor3={data.sabor[2]}
                                preco={data.preco}
                                
                            />
                        ) 
                    })}
                            
                    <div className="containerAvisoSemPedidos">
                        <p>Sem Pedidos</p>
                        <FaCrow size={30}/>
                    </div>
                    
                </Row>
                <Row className="rowBotaoFinalizar">
                    <Button bsPrefix="botaoFinalizarPedidos" onClick={() => enviarPedido()} style={{width:"150px", height:"50px"}}> 
                        Finalizar
                        <FaRegCheckCircle size={20}/>
                    </Button>
                </Row>
            </Container>
        </Container>
    )
}