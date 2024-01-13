import React, {createContext, useState } from "react";

import api from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [client, setClient] = useState();
    const [userNow, setUserNow] = useState();
    const [listaPedidos] = useState([]);
    

    const register = (userName, userEmail, userPassword, userContact, userCep, userLogradouro, userNumero, userComplemento, userBairro, userCity, userUf) => {
        
        api.post('/clients', {
            name: userName,
            email: userEmail,
            password: userPassword,
            contact: userContact,
            cep: userCep,
            logradouro: userLogradouro,
            number: userNumero,
            complemento: userComplemento,
            bairro: userBairro,
            city: userCity,
            uf: userUf
        }).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.error(error.response)
        })

    }


    const login = (userEmail, userPassword) => {  
        api.get('/clients')
        .then(({ data }) => {
            data.map((item) => {    
                if(item.email === userEmail && item.password === userPassword){
                    setClient({ userEmail, userPassword })
                    console.log(userEmail, userPassword)
                    setUserNow(userEmail)
                } else {
                    return "Usuário não encontrado."
                }
            })
        })
    }

    const logout = () => {
        setClient(null);
    }


    const pedidosListados = (sabor, qntPizzas, preco) => {
        var index = 0;

        if(listaPedidos.length === 0){
            if(preco.length === 1){
                preco = preco * qntPizzas;
                console.log(index)
                listaPedidos.push({index, sabor, qntPizzas, preco})
                console.log(listaPedidos)
            } else {
                let novoValor = 0;
                let metadeValor;
                for(let i = 0; i < preco.length; i++){

                    metadeValor = preco[i]/2
                    
                    novoValor = metadeValor + novoValor
                }
                novoValor = novoValor * qntPizzas;
                novoValor = novoValor.toFixed(2);
                preco = novoValor;
                listaPedidos.push({index, sabor, qntPizzas, preco})
                console.log(listaPedidos)
            }
            
            

        } else if(listaPedidos.length > 0){
            if(preco.length === 1){
                preco = preco * qntPizzas;
                index = index + 1;
                console.log(index);
                listaPedidos.push({index, sabor, qntPizzas, preco})
                console.log(listaPedidos)
            } else {
                let novoValor = 0;
                let metadeValor;
                for(let i = 0; i < preco.length; i++){

                    metadeValor = preco[i]/2
                    
                    novoValor = metadeValor + novoValor
                }
                novoValor = novoValor * qntPizzas
                novoValor = novoValor.toFixed(2);
                preco = novoValor;
                index = index + 1;
                console.log(index)

                listaPedidos.push({index, sabor, qntPizzas, preco})
                console.log(listaPedidos)
            }
            
        }
        
    }

    const excluirPedido = (id) =>{
        if(listaPedidos.length === 1){
            listaPedidos.pop()
        } else {
            listaPedidos.splice(id, 1)
            console.log(listaPedidos)
        }
        
    }

    const finalizarPedido = (
        client,
        pizzas, 
        precoTotal, 
        data
        ) => {

    }
    
    return(
        <AuthContext.Provider 
        value={{
            client, 
            userNow, 
            loginOK: !!client, 
            login, 
            register, 
            logout,
            listaPedidos,
            pedidosListados,
            excluirPedido
        }}
            >
                {children}
        </AuthContext.Provider>
    )

}