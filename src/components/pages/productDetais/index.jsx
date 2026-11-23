import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import PageDefault from "../../templates/PageDefault.jsx"
import SectionDefault from "../../templates/SectionDefault.jsx"
import { getProduct } from "../../../services/productsService.js"
import style from "./style.module.css"

const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let isMounted = true

        if (id) {
            getProduct(id)
                .then(data => {
                    if (isMounted) {
                        setProduct(data)
                        setError(null)
                    }
                })
                .catch(err => {
                    if (isMounted) {
                        setError(err.message || "Erro ao carregar detalhes do produto.")
                    }
                })
                .finally(() => {
                    if (isMounted) {
                        setLoading(false)
                    }
                })
        }

        return () => {
            isMounted = false
        }
    }, [id])

    return (
        <PageDefault>
            <SectionDefault className={style.sectionDetails}>
                <div className={style.detailsContainer}>
                    <Link to="/produtos" className={style.backLink}>&larr; Voltar para Produtos</Link>
                    {loading && <p className={style.statusMessage}>Carregando detalhes do produto...</p>}
                    {error && <p className={style.errorMessage}>{error}</p>}
                    {product && !loading && (
                        <div className={style.productCard}>
                            <div className={style.imageWrapper}>
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className={style.productInfo}>
                                <span className={style.category}>{product.category}</span>
                                <h2>{product.title}</h2>
                                <p className={style.description}>{product.description}</p>
                                {product.rating && (
                                    <div className={style.rating}>
                                        ⭐ {product.rating.rate} ({product.rating.count} avaliações)
                                    </div>
                                )}
                                <div className={style.priceContainer}>
                                    <span className={style.price}>R$ {product.price?.toFixed(2)}</span>
                                    <button type="button" className={style.buyButton}>Comprar</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </SectionDefault>
        </PageDefault>
    )
}

export default ProductDetails
