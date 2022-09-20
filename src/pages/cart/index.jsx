
import React from 'react'
import Button from "../../components/elements/Button"
import { useSelector } from 'react-redux'
import { selectAllProducts } from '../../stores/menu/productSlice'
import { ReactComponent as ArrowRightSvg } from '../../assets/icons/arrow-right-long-svgrepo-com.svg'
import {Link}from 'react-router-dom'
import { getAllProducts } from '../../stores/cart/cartSlice'
import cartPreview from './cartPreview'
import {incrementProductAmount}from "../../stores/cart/cartSlice"
import {decrementProductAmount}from "../../stores/cart/cartSlice"
import{useState} from "react"
//import {useSelector}from "react-redux"
const inc=(incrementProductAmount);
const dec=(decrementProductAmount);
const Cart= ()=>{
  
   
   const prods=useSelector(getAllProducts);
   const products=prods.payload.cart.products;
const cart=useSelector(selectAllProducts);
const tabs=['Summary','Delivery','Payment'];
if(products.length<=0){
return(
<div className='bg-white h-full text-black flex  justify-center p-4'>
<h1>Your cart is Empty</h1>
<Link to='/'className='pl-5  text-black font-bold'> Go to products</Link>


</div>
)}else{
    let tab=[]
 products.forEach(prod=>{
tab.push(prod)

 })








    return(<div className="bg-white pt-10 pb-10  divide-y-2    border-gray-300 border-solid   w-full h-1000">
    {
   
    
    tab.map(props=>{
     
      return(
        <div className="bg-white relative mb-[100px] " >
        <div className="img inline-block pr-7 pl-5">  <img className="w-[200px] h-25" src={props.imageUrl} alt={props.name}></img>   </div> 
     <div className="description absolute -top-1 mt-10 inline-block ">
      <h1 className="pb-5 font-bold text-xl">{props.name}</h1> 
      <p className="pb-5  text-gray-400 text-sm"><span className="font-bold text-lg text-gray-600">Description  :</span>  {props.description.substr(0, 80) + '    '+'.....'}</p>
      <h5 className="font-bold text-l"> <span className="font-bold text-lg text-gray-600">Price  :</span> {props.price}</h5>
      <div className="inline-block">
      <button className="inline-block p-5" onClick={inc(props)}>-</button>
      <h3 className="inline-block p-5">{props.amount}</h3>
      <button className="inline-block p-5" onClick={dec(props)}>+</button>
      </div>
      </div>
      <div className="btnPayment inline-block  ">
<button type="button" class="absolute -top-[-80px]  -left-[-930px] inline-block px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Buy now</button>
</div>
     </div>
      )
 })
}
     </div>
      )
  }



}
export default Cart;