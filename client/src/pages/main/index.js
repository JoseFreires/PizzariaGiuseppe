import React from "react";
import ButtonPizza from "../../components/buttons/buttonPedir";
import CarouselPizza from "../../components/carrousel";
import Footer from "../../components/footer";
import InfoPizza from "../../components/infoPizza";
import Header from "../../components/navbar";
import Cardapio from "../../components/cardapio";

import './mainStyle.css'

export default function Main(){
    return(
        
        <div className="main">
            <Header />
            <CarouselPizza />
            <ButtonPizza />
            <InfoPizza/>
            <Cardapio /> 
            <Footer />
        </div>
    )
}