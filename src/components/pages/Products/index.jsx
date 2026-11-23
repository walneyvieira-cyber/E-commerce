import PageDefault from "../../templates/PageDefault.jsx"
import SectionDefault from "../../templates/SectionDefault.jsx"
import CardsProducts from "../../organisms/CardsProducts.jsx"
import useProducts from "../../../hooks/useProducts.js"

import styleProducts from "./Products.module.css"

const Products = ()=>{
    const { products, loading, error } = useProducts()

    return(
        <PageDefault>
            <SectionDefault className={styleProducts.sectionProducts}>
                <div className={styleProducts.container}>
                    <h3>Produtos</h3>
                    {loading && <p>Carregando produtos...</p>}
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    {!loading && !error && (
                        <CardsProducts products={products} style={styleProducts}/>
                    )}
                </div>
            </SectionDefault>
        </PageDefault>
    )
}

export default Products
