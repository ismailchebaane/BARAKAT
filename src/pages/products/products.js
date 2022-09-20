import React from 'react'
import OneProducts from "./oneProducts"
import poulet from "./assets/poulet.png"
import chickenw from "./assets/chicken wings.png"
import chickenn from "./assets/chicken-nuggets.png"
import hamburger from "./assets/hamburger.png"
import Chapati from "./assets/chapati mehdia.png"
import Kosksi from "./assets/KOSKS.png"
import Makrouna from "./assets/makrouna.png"
import Pizza from "./assets/pizza.png"
import Soup from "./assets/soup.png"
import Lasagna from "./assets/lasagna.png"
import Makloub from "./assets/makloub.png"
import Rouz from "./assets/rouz-jerbi.png"
import { useDispatch } from "react-redux";
import { addToCart } from '../../stores/cart/cartSlice';

function Products() {
    const dispatch  =useDispatch();
   const prod=[
    {     description:"Lorem Ipsum is simply dummy text of the  Ipsum is simply dummy text of  Ipsum is simply dummy text of the printing and types the printing and types printing and typesetting industry. ",
        id:1,
        name:"poulet",
        imageUrl:poulet,
    price:"10"
},

    {    description:"Lorem Ipsum is simply dummy text of the  Ipsum is simply dummy text of  Ipsum is simply dummy text of the printing and types the printing and types printing and typesetting industry. ",
        id:2,
        name:"chicken Wings",
        imageUrl:chickenw,
    price:"25"},
    {    description:"Lorem Ipsum is simply dummy text of the  Ipsum is simply dummy text of  Ipsum is simply dummy text of the printing and types the printing and types printing and typesetting industry. ",
         id:3,
        name:"chicken Nuggets",
        imageUrl:chickenn,
    price:"30"},
    {    description:"Lorem Ipsum is simply dummy text of the  Ipsum is simply dummy text of  Ipsum is simply dummy text of the printing and types the printing and types printing and typesetting industry. ",
        id:4,
        name:"hamburger",
        imageUrl:hamburger,
    price:"7.5"},
    
    {    description:"Lorem Ipsum is simply dummy text of the  Ipsum is simply dummy text of  Ipsum is simply dummy text of the printing and types the printing and types printing and typesetting industry. ", 
    id:5,
        name:"Chapati Mahdia",
        imageUrl:Chapati,
    price:"3.5"},
    {    description:"Lorem Ipsum is simply dummy text of the  Ipsum is simply dummy text of  Ipsum is simply dummy text of the printing and types the printing and types printing and typesetting industry. ",
     id:6,
        name:"Kosksi Tounsi 7ar",
        imageUrl:Kosksi,
    price:"8.5"},
    {    description:"Lorem Ipsum is simply dummy text of the  Ipsum is simply dummy text of  Ipsum is simply dummy text of the printing and types the printing and types printing and typesetting industry. ",
     id:7,
        name:"Ma9rouna",
        imageUrl:Makrouna,
    price:"9.75"},
    {    description:"Lorem Ipsum is simply dummy text of the  Ipsum is simply dummy text of  Ipsum is simply dummy text of the printing and types the printing and types printing and typesetting industry. ", 
     id:8,
        name:"Pizza",
        imageUrl:Pizza,
    price:"15"},
    {    description:"Lorem Ipsum is simply dummy text of the  Ipsum is simply dummy text of  Ipsum is simply dummy text of the printing and types the printing and types printing and typesetting industry. ",
     id:9,
        name:"Soup",
        imageUrl:Soup,
   price:"6"},
   {    description:"Lorem Ipsum is simply dummy text of the  Ipsum is simply dummy text of  Ipsum is simply dummy text of the printing and types the printing and types printing and typesetting industry. ", 
   id:10,
    name:"Lasagna",
    imageUrl:Lasagna,
    price:"16"},
    {    description:"Lorem Ipsum is simply dummy text of the  Ipsum is simply dummy text of  Ipsum is simply dummy text of the printing and types the printing and types printing and typesetting industry. ", 
    id:11,
       
        name:"Ma9loub",
        imageUrl:Makloub,
    price:"6.5"},
    {    description:"Lorem Ipsum is simply dummy text of the  Ipsum is simply dummy text of  Ipsum is simply dummy text of the printing and types the printing and types printing and typesetting industry. ",
     id:12,
        name:"Rouz Jerbi",
        imageUrl:Rouz,
    price:"22"},


   ]
   
    return (
<div id="products">
        <br></br>
    <br></br>
    <hr></hr>
    <br></br>
    <h2 className="text-center font-bold text-2xl animate__bounceOutRight"> Our Products </h2>
    <br></br>
    <hr></hr>
        <div className="bg-white ml-[100px] h-auto-inline-block w-auto">
    

           {prod.map((p,index)=>{
       return(
        
        
        <OneProducts id={p.id} key={index} src={p.imageUrl} name={p.name} price={p.price} addToCard={()=>{
               const t={name:p.name,price:p.price,description:p.description,imageUrl:p.imageUrl}
            dispatch(addToCart(t))
        }}  />
        
        
        
        
        )  
    
           })
           } 


        </div>
        </div>
    )
}

export default Products
