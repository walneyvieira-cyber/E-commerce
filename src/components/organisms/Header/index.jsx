import Menu from "../../molecules/Menu.jsx"
import Logo from "../../atoms/Logo.jsx"
import { Link } from "react-router-dom"

import "./style.css"

const Header = ()=>{

    const itens = [
        {item: "Home", href:"/"},
        {item: "Produtos", href:"/produtos"},
        {item: "Tarefas", href:"/tarefas"}
    ]

    return(
        <header>
            <div className="container">
                <Link to="/" style={{ display: "flex", alignItems: "center", height: "100%", textDecoration: "none" }}>
                    <Logo />
                </Link>
                <Menu itens={itens} />
            </div>
        </header>
    )
}

export default Header
