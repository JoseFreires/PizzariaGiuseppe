import React from "react";
import Button from 'react-bootstrap/Button';

import './buttonEntrarStyle.css'

export default function buttonLoginCadastro(props){
    return(
        <div className="containerButtonLoginCadastro">
            <Button variant="" onClick={props.action}>
                {props.name}
            </Button>
        </div>
    )
}