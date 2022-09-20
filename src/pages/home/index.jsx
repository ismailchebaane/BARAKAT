import React from 'react'
import Banner from "../../components/Banner.jsx"
import About from "../../components/About.jsx"
import ProductPreview from '../../components/ProductPreview.jsx'
import Products from "../products/products"
function Home() {
    return (
        <div>
            
            <Banner />
            <ProductPreview />
            <Products />
            <About /> 
           
            
             </div>
            
       
    )
}

export default Home
