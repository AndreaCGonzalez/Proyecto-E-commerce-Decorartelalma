import decoLogo from "../../imagenes/decologo.png"
import React from "react";
import CartWidget from "../CartWidget";
import "./NavBar.css";

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={decoLogo} className="decoLogo" alt="logo"/>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">

                <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" aria-current="page" href="#"> Productos </a>
                        <a className="nav-link" href="#"> Sobre mi </a>
                        <a className="nav-link" href="#"> Envio </a>
                        <a className="nav-link" href="#"> FAQ </a>
                        <div className="divCarrito"> <CartWidget items= {2}/> </div>    
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar