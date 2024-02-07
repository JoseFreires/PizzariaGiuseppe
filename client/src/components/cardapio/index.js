import React, { useEffect, useState } from "react";
import CardPizza from "../cards/cardCardapio";
import Container  from "react-bootstrap/Container";
import Row  from "react-bootstrap/Row";


import api from "../../services/api";

import './cardapioStyle.css'


export default function Recipe(){
   const [pizzas, setPizzas ] = useState([]);
   
   useEffect(() =>{
      api.get('/pizzas')
      .then(({data}) => {
         setPizzas(data)
      })
   })

    return(
        <Container fluid className="containerCardapio">
            
            <Row style={{alignItems:"center", justifyContent:"center", paddingTop:"20px"}}>
               {pizzas.map((item) => {
                  const {sabor, preco, image, ingredientes} = item
                  return(
                     <CardPizza 
                        image={image}
                        ingrediente={ingredientes}
                        pizza={sabor}
                        preco={preco}
                     />
                  )
               })}
                  
            </Row>
        </Container>
        
    )
}