 import Button from "./elements/Button";

 import { Link, Navigate } from 'react-router-dom'
 import{useState,React}from "react"
import {motion}from "framer-motion"
import Typical from 'react-typical'
 const Banner=()=>{
 const[clicked,setclicked]=useState(false)

return (
<div className="bg-black-500">
<div className=" bg-black-900 banner w-full md:w-2/3 px-7 mx-auto relative flex  items-center-justify-between">
  <div className="banner-description w-full md:w-1/2 p-3">
 <h2 className="mb-6 text-4xl font-bold text-white ">
 Ordering Food
 <Typical
        steps={[ 1000,"We Made",1000," It Easy",1000]}
        loop={Infinity}
        wrapper="p"
      />
 

 </h2>
 <p className=" font-semibold text-lg text-red-600 py-2">Get Started Today</p>
 <motion.div whileHover={{scale:1.1}} className="btn-container inline-block mr-5"> 
 <Button><a href="#products">Order Now</a>  </Button>

  </motion.div>
  <Link to='/' className="text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3">See Menu</Link>

  </div>
  <motion.div  onClick={()=>{setclicked(!clicked)}} animate={{x:clicked?[0,800,-800,0]:0}} className="banner-image w-full md:w-1/2 p-3 flex justify-end">
   
   
    <img   src={require("../assets/images/pizza_banner.png")}alt="bannerImage"></img>
 

  </motion.div>


</div>
    
</div>
    
    )

}

export default Banner;