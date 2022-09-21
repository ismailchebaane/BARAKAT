import React from 'react'
import poulet from "../products/assets/poulet.png"
import chickenw from "../products/assets/chicken wings.png"
import chickenn from "../products/assets/chicken-nuggets.png"
import hamburger from "../products/assets/hamburger.png"
import Chapati from "../products/assets/chapati mehdia.png"
import Kosksi from "../products/assets/KOSKS.png"
import Makrouna from "../products/assets/makrouna.png"
import Pizza from "../products/assets/pizza.png"
import Soup from "../products/assets/soup.png"
import Lasagna from "../products/assets/lasagna.png"
import Makloub from "../products/assets/makloub.png"
import Rouz from "../products/assets/rouz-jerbi.png"
import { useDispatch } from "react-redux";
import { addToCart } from '../../stores/cart/cartSlice';
import {useParams } from "react-router-dom";

function ProductZoom() {
   
    const {id}=useParams()
    const prod=[
        {     description:"Lorem Ipsum is simply dummy text of the  Ipsum is simply dummy text of  Ipsum is simply dummy text of the printing and types the printing and types printing and typesetting industry. ",
            id:"1",
            name:"poulet",
            imageUrl:poulet,
        price:"10"
    },
    
        {    description:"Lorem Ipsum is simply dummy text of the  Ipsum is simply dummy text of  Ipsum is simply dummy text of the printing and types the printing and types printing and typesetting industry. ",
            id:"2",
            name:"chicken Wings",
            imageUrl:chickenw,
        price:"25"},
        {    description:"Lorem Ipsum is simply dummy text of the  Ipsum is simply dummy text of  Ipsum is simply dummy text of the printing and types the printing and types printing and typesetting industry. ",
             id:"3",
            name:"chicken Nuggets",
            imageUrl:chickenn,
        price:"30"},
        {    description:"Lorem Ipsum is simply dummy text of the  Ipsum is simply dummy text of  Ipsum is simply dummy text of the printing and types the printing and types printing and typesetting industry. ",
            id:"4",
            name:"hamburger",
            imageUrl:hamburger,
        price:"7.5"},
        
        {    description:"Lorem Ipsum is simply dummy text of the  Ipsum is simply dummy text of  Ipsum is simply dummy text of the printing and types the printing and types printing and typesetting industry. ", 
        id:"5",
            name:"Chapati Mahdia",
            imageUrl:Chapati,
        price:"3.5"},
        {    description:"Lorem Ipsum is simply dummy text of the  Ipsum is simply dummy text of  Ipsum is simply dummy text of the printing and types the printing and types printing and typesetting industry. ",
         id:"6",
            name:"Kosksi Tounsi 7ar",
            imageUrl:Kosksi,
        price:"8.5"},
        {    description:"Lorem Ipsum is simply dummy text of the  Ipsum is simply dummy text of  Ipsum is simply dummy text of the printing and types the printing and types printing and typesetting industry. ",
         id:"7",
            name:"Ma9rouna",
            imageUrl:Makrouna,
        price:"9.75"},
        {    description:"Lorem Ipsum is simply dummy text of the  Ipsum is simply dummy text of  Ipsum is simply dummy text of the printing and types the printing and types printing and typesetting industry. ", 
         id:"8",
            name:"Pizza",
            imageUrl:Pizza,
        price:"15"},
        {    description:"Lorem Ipsum is simply dummy text of the  Ipsum is simply dummy text of  Ipsum is simply dummy text of the printing and types the printing and types printing and typesetting industry. ",
         id:"9",
            name:"Soup",
            imageUrl:Soup,
       price:"6"},
       {    description:"Lorem Ipsum is simply dummy text of the  Ipsum is simply dummy text of  Ipsum is simply dummy text of the printing and types the printing and types printing and typesetting industry. ", 
       id:"10",
        name:"Lasagna",
        imageUrl:Lasagna,
        price:"16"},
        {    description:"Lorem Ipsum is simply dummy text of the  Ipsum is simply dummy text of  Ipsum is simply dummy text of the printing and types the printing and types printing and typesetting industry. ", 
        id:"11",
           
            name:"Ma9loub",
            imageUrl:Makloub,
        price:"6.5"},
        {    description:"Lorem Ipsum is simply dummy text of the  Ipsum is simply dummy text of  Ipsum is simply dummy text of the printing and types the printing and types printing and typesetting industry. ",
         id:"12",
            name:"Rouz Jerbi",
            imageUrl:Rouz,
        price:"22"},
    
    
       ]
       console.log(id)

       
       const dispatch  =useDispatch();

   return  prod.map((p)=>{
if (p.id===id){
   console.log(p.id)
return (
<div className="prodZoom  bg-white h-full  p-6 rounded-lg shadow-lg bg-white ">
    <div  className='iimgProdZoom  inline-block  p-6 rounded-lg shadow-2xl bg-white max-w-2xl min-w-sm'>



    <img   src={p.imageUrl} alt={p.name}/>
    </div>

  <div className="descProdZoom absolute inline-block pl-9 ml-5 pb-9 p-6 rounded-lg shadow-2xl bg-white min-h-sm  max-h-2xl max-w-2xl min-w-sm">
 <h1 className="text-3xl font-bold pb-5 pt-9">{p.name}</h1>
 <h2 className="text-xl  font-bold  pb-2 ">Description :</h2>
 
 <p className="  pb-5 "> {p.description}</p>

 <div className="flex items-center mt-2.5 mb-5">
                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">Price : {p.price}dt </span>
                <button onClick={()=>{
    const t={name:p.name,price:p.price,description:p.description,imageUrl:p.imageUrl}
    dispatch(addToCart(t))

                }}
                    className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600">Add
                    to cart</button>
            </div>

  </div>

</div>



    )
 }
  })


  
  




}

export default ProductZoom
