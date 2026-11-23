import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../components/pages/Home"
import Products from "../components/pages/Products"
import ProductDetails from "../components/pages/productDetais"
import Tasks from "../components/pages/Tasks"

const AppRoutes = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<Products />} />
                <Route path="/produtos/:id" element={<ProductDetails />} />
                <Route path="/tarefas" element={<Tasks />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
