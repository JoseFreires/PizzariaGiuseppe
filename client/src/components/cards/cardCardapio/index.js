import Button  from "react-bootstrap/Button";
import React from "react";
import Card  from "react-bootstrap/Card";

import { Link } from "react-router-dom";

import "./cardStyle.css"


export default function CardPizza(props){
    return(
        <Card className="cardPizza" style={{width: "18rem", height:"29rem" }}>
            <Card.Img variant="top" src={props.image} style={{height:"180px", marginTop:"10px"}}/>
            <Card.Body>
                <Card.Title>{props.pizza}</Card.Title>
                <Card.Text style={{textAlign: 'left'}}>
                    Ingredientes: {props.ingrediente}
                </Card.Text>
                <Card.Text>
                    Preço: {props.preco}
                </Card.Text>
                <Link to="/loginUser" style={{textDecoration:"none"}}>
                    <Button variant="danger">Eu quero essa</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}