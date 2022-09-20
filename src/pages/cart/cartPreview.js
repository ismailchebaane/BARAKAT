import React from 'react'
import {incrementProductAmount}from "../../stores/cart/cartSlice"
import {decrementProductAmount}from "../../stores/cart/cartSlice"
//import {useSelector}from "react-redux"
const inc=(incrementProductAmount);
const dec=(decrementProductAmount);

function cartPreview({props}) {
  
    return (
        <div className="bg-white " >
           <div className="img ">  <img src={props.src} alt={props.name}></img>   </div> 
        <div className="description">
         <h1>{props.name}</h1> 
         <p>{props.description}</p>
         <h5>{props.price}</h5>
         <button onClick={inc}>-</button>
         <h3>{props.amount}</h3>
         <button className="" onClick={dec}>+</button>
         
         </div>
        </div>
    )
}

export default cartPreview
