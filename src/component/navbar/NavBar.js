import React,{useContext,useState,useEffect} from 'react';
import "./NavBar.css";
import { CartWidget } from '../cartWidget/CartWidget';
import {Link} from 'react-router-dom'
import  Logo  from "../../image/ic_logo.png";
import { NavDropdown } from "react-bootstrap";
import { ContextElement } from '../../ContextCart';


export const NavBar = () =>{

    const [elements,setElement] = useContext(ContextElement).elementsTouse
    const [cont,setcont] = useState(0)
    var conta =0;

    useEffect(()=>{
        elements.map((item) => {
            conta += item.quantity; 
        })
        setcont(conta)
    },[elements])

    return(
        <div className="nav-content">
            <Link to="/">
                <img src={Logo}  className="nav-logo"/>
            </Link>
            <div className="nav-items">
                <Link to="/">
                     <p className="item-style">INICIO</p>
                </Link>
                <Link to="/categories">
                <NavDropdown title="CATEGORIAS" className="item-style" id="basic-nav-dropdown">
                    <NavDropdown.Item  href="#action/3.1">
                        <Link to={"/category/carne"}>
                            <p className="item-style nomargin">🍔 HAMBURGUESAS</p>
                        </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">🥪 SANGUCHES</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">🍕 PIZZAS</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        <Link to={"/category/vegan"}>
                            <p className="nomargin">🥦 VEGANO</p>
                        </Link>
                    </NavDropdown.Item>
                </NavDropdown>
                </Link>
                <Link to="/">
                     <p className="item-style" style={{marginRight:"20px"}}>NOSOTROS</p>
                </Link>
                {
                    cont >0 && <CartWidget cont={cont}/>
                }
            </div>
        </div>

    )
}