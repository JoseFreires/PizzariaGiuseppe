import React from "react";
import { GiRotaryPhone } from 'react-icons/gi'

import './footerStyle.css'

export default function Footer(){
    return(
        <div className="footerContainer">
            <div>
                <p>Nossos Horários: </p>
                <p>Ter. a Qui.: 17h até 23h</p>
                <p>Sex. a Dom.: 17h até 01h</p>
            </div>
            <div className="containerLocal">
                <p>Local:  Rua dos Bobos, 001 - Vila da Ficção</p>
                <p>São Paulo - SP</p>
            </div>
            <div>
                <p>Contatos:</p>
                <p>tel. (11) 91111-2222</p>
                <p>email: pizzariaGiuseppe@gmail.com</p>
            </div>
        </div>
    )
}