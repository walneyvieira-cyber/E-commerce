import PageDefault from "../../templates/PageDefault.jsx"
import SectionDefault from "../../templates/SectionDefault.jsx"
import { Link } from "react-router-dom"

import HomeStyle from "./style.module.css"

const Home = ()=>{
    return(
    <PageDefault>
        <SectionDefault className={HomeStyle.sectionHero}>
            <div className={HomeStyle.heroContent}>
                <h1>Bem-vindo à Loja Digital</h1>
                <p>Explore nossos produtos ou gerencie suas tarefas diárias.</p>
                <div className={HomeStyle.heroActions}>
                    <Link to="/produtos" className={HomeStyle.btnPrimary}>Ver Produtos</Link>
                    <Link to="/tarefas" className={HomeStyle.btnSecondary}>Minhas Tarefas</Link>
                </div>
            </div>
        </SectionDefault>
    </PageDefault>
    )
}

export default Home
