import React, {useState, useEffect} from "react";
import { Dropdown } from "react-bootstrap";

import {Modal, Row, Col, Form, Button, Badge} from 'react-bootstrap'

import {FaTrashAlt, FaRegCheckCircle, FaPlusCircle, FaExclamationCircle} from "react-icons/fa";

import api from "../../services/api";

import useAuth from "../../hooks/useAuth";

import './modalStyle.css'

export default function ModalPizzas() {
    const { userNow, pedidosListados } = useAuth();

    const [show, setShow] = useState(false);
    const [saboresList, setSaboresList] = useState([])
    const [saboresCliente, setSaboresCliente] = useState([])
    const [precoSabores, setPrecoSabores] = useState([])
    const [aviso, setAviso] = useState()
    const [qntPizzas, setQntPizza] = useState(0)

    const [checkState1, setCheckState1] = useState(false)
    const [checkState2, setCheckState2] = useState(false)
    const [checkState3, setCheckState3] = useState(false)

    const handleClose = () => { 
        setShow(false)
        setCheckState1(false)
        setCheckState2(false)
        setCheckState3(false)
    }
        
    const handleShow = () =>{ 
        setShow(true)
        if(saboresCliente.length > 0){
            for(var i = 0; saboresCliente.length >= i; i++){
                saboresCliente.pop(i)
            }
        }
    }

    useEffect(() => {
        api.get('/pizzas')
        .then(({ data }) => {
            setSaboresList(data)
        })
    })

    const salvarPizza = () => {
        if(qntPizzas === 0){
            setAviso("Indique a quantidade de pizzas")
            return
        } else{
            if(saboresCliente.length > 0 && qntPizzas > 0){
                const response = pedidosListados(saboresCliente, qntPizzas, precoSabores)
                if(!response){
                    handleClose()
                    setCheckState1(false)
                    setCheckState2(false)
                    setCheckState3(false)
                    setSaboresCliente([])
                    setPrecoSabores([])
                    
                }
            } else {
                setAviso("Sua quantidade de pizza é inválida ou você não se selecionou nenhum sabor")
            }
        }
        
    }

    const handleOnChange1 = () => {
        if(saboresCliente.length > 1){
            return
        } else{
            if(checkState2 === true || checkState3 === true){
                setCheckState2(false)
                setCheckState3(false)
                setCheckState1(true)
                return
            } else{
                if(checkState1 === false) {
                    setCheckState1(true)
                } else if (checkState1 === true){
                    setCheckState1(false)
                }
            }
        }
        
        console.log(userNow) 
    }
    const handleOnChange2 = () => {
        if(saboresCliente.length > 2){
            return
        } else {
            if(checkState1 === true || checkState3 === true){
                setCheckState1(false)
                setCheckState3(false)
                setCheckState2(true)
                return
            } else {
                
                if(checkState2 === false) {
                    setCheckState2(true)
                } else if (checkState2 === true){
                    setCheckState2(false)
                }
            }
        }
        
            
    }
    const handleOnChange3 = () => {
        if(saboresCliente.length > 3){
            return
        } 
        if(checkState1 === true || checkState2 === true){
            setCheckState1(false)
            setCheckState2(false)
            setCheckState3(true)
            return
        } else {
            if(checkState3 === false) {
                setCheckState3(true)
            } else if (checkState3 === true){
                setCheckState3(false)
            }
        }
    }

    const selecionarSabor = (atual, precoAtual) => {
        setAviso("")
        if(checkState1 === true || checkState2 === true || checkState3 === true){
            if(saboresCliente.length >= 3){
                return
            } else {
                if(saboresCliente.length === 1 && checkState1 === true){
                    return       
                } else if (saboresCliente.length === 2 && checkState2 === true){
                    return 
                } else {
                    saboresCliente.push(atual)
                    precoSabores.push(precoAtual)
                }  
            }
        
        } else{
            setAviso("Selecione a quantidade de sabores em sua pizza.")
        }        
    }

    const excluirSabor = () => {
        saboresCliente.pop()
        precoSabores.pop()
        if(checkState1 === true){
            setCheckState1(false)
        } else if (checkState2 === true){
            setCheckState2(false)
        } else if (checkState3 === true) {
            setCheckState3(false)
        }
    }


    return(
        <>
            <Button onClick={handleShow} bsPrefix="botaoModalPedir" style={{width:"175px"}}>
                Peça uma pizza 
                <FaPlusCircle color="#fff"/>
            </Button>
        <Modal show={show} onHide={handleClose} backdrop="static" style={{fontWeight:"bold"}}>
            <Modal.Header closeButton>
                <Modal.Title>Escolha o sabor da pizza:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row style={{color: "#D30000", display:"flex", textAlign: "center"}}>
                    <p>{aviso}</p>
                </Row>
                <Row>
                    <Form>
                        <p>Quantidade de sabores na pizza:</p>
                        <div className="containerCheckbox">
                            <Form.Check 
                                label="1"
                                checked={checkState1}
                                onChange={() => handleOnChange1()}
                            />
                            <Form.Check 
                                label="2"
                                checked={checkState2}
                                onChange={() => handleOnChange2()}                           
                            />
                            <Form.Check 
                                label="3"
                                checked={checkState3}
                                onChange={() => handleOnChange3()}
                                id="checkQnt"
                            />
                        </div>
                    </Form>
                </Row>
                <Row>
                    <Col>
                        <Dropdown drop="end" >
                            <Dropdown.Toggle style={{backgroundColor:"#D30000", border:"0", fontWeight: "bold"}}>
                                Escolha o sabor
                            </Dropdown.Toggle >
                            <Dropdown.Menu>
                                {saboresList.map((item) => {
                                    const {sabor, preco} = item

                                    return(
                                        <Dropdown.Item onClick={() => {selecionarSabor(sabor, preco)}} id="opcaoDropdown">
                                            {sabor} --- R${preco}
                                        </Dropdown.Item>
                                    )
                                })}
                                
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col style={{display: 'flex', justifyContent:'flex-end'}}>
                        <Button 
                            style={{width:"50px"}} 
                            bsPrefix="botaoExcluirSabor"
                            onClick={() => {excluirSabor()}}
                        >
                            <FaTrashAlt size={20} color="#D30000"/>
                        </Button>
                    </Col>

                </Row>
                <Row className="rowSaborSelecionado">
                    {saboresCliente.map((item) => {
                        
                        return(
                            <Badge id="sabor" bg="#D30000">
                               {item}
                            </Badge>
                        )
                    })}
                    
                </Row>
                
                {/* <Row>
                    <Form>
                        <p>Deseja borda recheada?</p>
                        <div className="containerCheckbox">
                            <Form.Check 
                                label="Sim"
                                checked={checkYes}
                                onChange={() => {handleYes()}}
                            />
                            <Form.Check 
                                label="Não"
                                checked={checkNo}
                                onChange={() => {handleNo()}}
                            />
                        </div>
                    </Form>
                </Row>
                <Row>
                <Dropdown drop="end" >
                        <Dropdown.Toggle style={{backgroundColor:"#D30000", border:"0", fontWeight: "bold"}}>
                            Escolha o sabor
                        </Dropdown.Toggle >
                        <Dropdown.Menu onClick={() => selecionaBorda()}>
                            <Dropdown.Item id="opcaoDropdown">Nutella</Dropdown.Item>
                            <Dropdown.Item id="opcaoDropdown">Catupry</Dropdown.Item>
                            <Dropdown.Item id="opcaoDropdown">Cheddar</Dropdown.Item>
                            <Dropdown.Item id="opcaoDropdown">Parmesão</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Row>
                <Row className="rowSaborSelecionado">
                    {/* <Badge id="sabor" bg="#D30000">
                        Calabresa
                    </Badge>
                    <Badge id="sabor" bg="#D30000">
                        Calabresa
                    </Badge>
                    <Badge id="sabor" bg="#D30000">
                        Calabresa
                    </Badge> 
                </Row> */}
                <Row style={{marginBottom:'20px'}}>
                    <Col style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                        <p>Quantidade da pizza?</p>
                    </Col>
                    <Col style={{display:'flex', justifyContent: 'center', alignContent:'center'}}>
                        <Form>
                            <Form.Control 
                                placeholder="0"
                                style={{width:"80px", textAlign: 'center', color:'#D30000'}}
                                onChange={(e) => {
                                    setQntPizza(e.target.value)
                                }}
                            />
                            
                        </Form>
                    </Col>
                </Row>
                
                <Row style={{justifyContent:"end"}}>
                    <Button bsPrefix="botaoAvancaModal" style={{width:"150px"}} onClick={() => {salvarPizza()}}>
                        Concluir
                        <FaRegCheckCircle  size={20}/>
                    </Button>
                </Row>
            </Modal.Body>
        </Modal>
        </>
)
}