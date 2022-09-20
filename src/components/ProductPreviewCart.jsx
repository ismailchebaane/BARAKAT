import React from 'react';
import AddProduct from './AddProduct';
const ProductPreviewCart = ({product ,onAddProduct}) => {
   const addProduct=()=>{
 onAddProduct(product)

   }
   
    return (
        <div className="w-full p-4 m-2 rounded text-white  bg-white text-center   ">
           <img src={product.imageUrl} alt={product.name}></img> 
           <h2 className="pb-2 text-lg text-black font-bold ">{product.name}</h2>
           <p className="mb-2 h-20  text-m text-gray-500 line-clamp-4 font-serif  ">{product.description} </p>
         <AddProduct onAddProduct={addProduct}/>
        </div>
    );
};

export default ProductPreviewCart;