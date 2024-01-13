import React from "react";
import { FaPizzaSlice } from "react-icons/fa"
import { Link } from "react-router-dom";

import './buttonStyle.css'

export default function ButtonPizza(){
    return(
        <div className="containerButton">
            <Link to="/loginUser" style={{textDecoration:"none"}}>
                <div className="containerConteudo">
                    <button>
                        <FaPizzaSlice />
                        <p>Pedir</p>
                    </button>
                </div>
            </Link>

        </div>
    )
}