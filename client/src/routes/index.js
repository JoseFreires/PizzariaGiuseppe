import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "../pages/main";
import LoginUser from "../pages/loginUser"
import RegisterUser from "../pages/registerUser";
import InfoUser from "../pages/infoUser";
import PedidosUser from "../pages/pedidosUser";
import useAuth from "../hooks/useAuth";
import AdmView from "../pages/admView";

const Private = ({ Item }) =>{
    const { loginOK} = useAuth();
    // localStorage.setItem("user", loginOK)
    // const atual = localStorage.getItem("user")
    // console.log(atual)
    return loginOK > 0 ? <Item /> : <LoginUser />
    
}

const RoutesPage = () => {
    return(    
        <BrowserRouter>
         
            <Routes>
                <Route exact path="/" element = { <Main /> }  />
                <Route exact path="/loginUser" element = {<LoginUser />} />
                <Route exact path="/registerUser" element = {<RegisterUser />} />
                {/* <Route exact path="/infoUser" element = {<InfoUser />} /> */}
                <Route exact path="/infoUser" element = {<Private Item={InfoUser}/>} />
                {/* <Route exact path='/localPedidos' element = {<PedidosUser />} /> */}
                <Route exact path="/localPedidos" element = {<Private Item={PedidosUser}/>} /> 
                <Route exact path="/admPage" element = {<AdmView />} />
                <Route path="*" element = { <Main /> }  />
            </Routes>
          
        </BrowserRouter>
    )
}

export default RoutesPage;