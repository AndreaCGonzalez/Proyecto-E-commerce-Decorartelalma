import decoLogo from "../decologo.png";

function NavBar(){
    return(
    <ul className="navbar">
        <li>
            <img src={decoLogo} className="decoLogo" alt="logo"/> 
        </li>
        <li><a className="" href=""> Productos y Servicios </a></li>
        <li><a className="" href=""> Sobre mi </a></li>
        <li><a className="" href=""> FAQ </a></li>
    </ul>
    )
}

export default NavBar