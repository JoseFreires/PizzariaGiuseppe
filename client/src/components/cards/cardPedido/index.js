import React from "react";

import { FaTrashAlt, FaPizzaSlice } from 'react-icons/fa'

import Card from 'react-bootstrap/Card'

import './cardPedidoStyle.css'

import useAuth from "../../../hooks/useAuth";

export default function CardPedido(props){
    const { excluirPedido } = useAuth();
    
    const excluirCard = (valor) => {
        const response = excluirPedido(valor)
    }
    

    return(
        <Card className="cardPedido" style={{width: "17rem", height:"23rem" }}>
            <Card.Body className="containerConteudoPedido">
                <div style={{
                    flexDirection:"row", 
                    display:"flex", 
                    alignItems:"center", 
                    justifyContent:"space-around", 
                    width: "110px"
                    }}>
                    <Card.Title>Sua pizza</Card.Title>
                    <FaPizzaSlice />
                </div>
                <div>    
                    <Card.Text>
                    
                        <p>Sabores:</p>
                        <ul id="listaSabores">
                            <li>{props.sabor1}</li>
                            <li>{props.sabor2}</li>
                            <li>{props.sabor3}</li>
                        </ul>
                        
                    </Card.Text>
                    <Card.Text>
                        <p>Quantidade: </p>
                        <p>{props.qnt}</p>
                    </Card.Text>
                    <Card.Text>
                        <p>Preço: </p>
                        <p>R${props.preco}</p>
                    </Card.Text>
                    
                </div>
                <div className="containerIcons">
                    <button onClick={() => excluirCard(props.index)}>
                        <FaTrashAlt color="#D30000" size={25}/>
                    </button>
                    
                </div>
            </Card.Body>
        </Card>
    )
}