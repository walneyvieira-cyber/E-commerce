import { Link } from "react-router-dom"

const CardProduct = ({ product, style }) => {
  return (
    <div className={style.card} id={product.id}>
        <img src={product.image} alt={product.title} />
        <div className={style.cardBody}>
            <h5>{product.title}</h5>
            <p>{product.description}</p>
            <div className={style.cardFoot}>
                <span>R$ {product.price}</span>
                <Link to={`/produtos/${product.id}`}>Ver mais</Link>
            </div>
        </div>
    </div>
  )
}

export default CardProduct
