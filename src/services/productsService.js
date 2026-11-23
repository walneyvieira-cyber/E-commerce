const API_URL = "https://fakestoreapi.com"

export const getProducts = async ()=>{
    const res = await fetch(`${API_URL}/products`)
    if(!res.ok){
        throw new Error("Erro ao buscar Produtos.")
    }
    const data = await res.json()
    return data
}

export const getProduct = async (id)=>{
    const res = await fetch(`${API_URL}/products/${id}`)
    if(!res.ok){
        throw new Error("Erro ao buscar Produto.")
    }
    const data = await res.json()
    return data
}

export const postProduct = async (product)=>{
    const res = await fetch(`${API_URL}/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    if(!res.ok){
        throw new Error("Erro ao cadastrar Produto.")
    }
    const data = await res.json()
    return data
}

export const updateProduct = async (id, product)=>{
    const res = await fetch(`${API_URL}/products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    if(!res.ok){
        throw new Error("Erro ao atualizar Produto.")
    }
    const data = await res.json()
    return data
}

export const deleteProduct = async (id)=>{
    const res = await fetch(`${API_URL}/products/${id}`, {
        method: "DELETE"
    })
    if(!res.ok){
        throw new Error("Erro ao deletar Produto.")
    }
    const data = await res.json()
    return data
}
