import { useState, useEffect, useCallback } from "react"
import { getProducts } from "../services/productsService"

export const useProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchProducts = useCallback(async () => {
        setLoading(true)
        setError(null)
        try {
            const data = await getProducts()
            setProducts(data)
        } catch (err) {
            setError(err.message || "Erro ao carregar produtos.")
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        let isMounted = true

        getProducts()
            .then(data => {
                if (isMounted) {
                    setProducts(data)
                    setError(null)
                }
            })
            .catch(err => {
                if (isMounted) {
                    setError(err.message || "Erro ao carregar produtos.")
                }
            })
            .finally(() => {
                if (isMounted) {
                    setLoading(false)
                }
            })

        return () => {
            isMounted = false
        }
    }, [])

    return { products, loading, error, refetch: fetchProducts }
}

export default useProducts
