import React from 'react'
import {useState,useEffect} from "react";
import ProductPreviewCart from './ProductPreviewCart';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
 import{useDispatch} from "react-redux"
  import { addToCart } from '../stores/cart/cartSlice';

function ProductPreview() {

  const dispatch  =useDispatch();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  const[data,setData]=useState([{}])
  useEffect(()=>{
  
    axios.get('https://stormy-ray-shawl.cyclic.app/api/products')
    .then(response => {
     
      console.log(response.data); setData(response.data);
      console.log(data)
    })
    .catch(error => {
      console.log(error);
    });
  
  },[])
  
  const onAddProduct=(product)=>{
 dispatch(addToCart(product))


  }



    return (
        <div className="container mx-auto pb-4 w-2/3 text-white">
           
            <Carousel responsive={responsive}>
                 
          
            {
             data.map((prod,index)=>{
                
                 return(
                  <div className="w-full p-3">

                 <ProductPreviewCart key={index} product={prod} onAddProduct={onAddProduct}/>
                
                 </div> )

            })}
              </Carousel>
        </div>
    )
}

export default ProductPreview
