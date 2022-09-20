import Foody from "../assets/images/foody.png";
import CartIcon from "../assets/icons/cart.svg";
import {Link} from "react-router-dom";
import Button from "./elements/Button"
import {AuthContext} from "../navigation/authContext.js"
import {React,useContext} from "react";
import { useSpring, animated } from "@react-spring/web";
import { useControls } from "leva";
export const Header = ({cartCount})=>{
  
  const {user}=useContext(AuthContext);
return (
<nav id="header" className="bg-black text-white">
<div className=" w-full  container  mx-auto flex flex-wrap items-center justify-between mt-0 py-2"> 
  <div className='logo-wrapper pl-4 flex items-center'>
    <Link className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" to='/'>   <img className="w-40 h-40 object-cover" src={Foody} alt='logo'></img> </Link>
  
  </div>
   <div id="" className='brand   nav-menu-wrapper flex items-center justify-between space-x-10'>
    <Link to="/" className="text-xl font-bold"> Home</Link>
   <a className="text-xl font-bold " style={{fontSize:"20px"}} href="#about">About</a>
  </div>
  <div className="flex items-center justify-center  space-x-4">
    <Link to="/cart" className="relative mr-4">
      
       <img src={CartIcon}alt="Cart"></img>
       {cartCount >0 ? <div className="rounded-full bg-yellow-400 text-white inline-flex justify-center items-center w-5 h-5 absolute -bottom-1 -right-1">{cartCount}</div> : null }
        </Link>
       
      { user ? <div> 
        <h3 className="text-white text-lg font-bold"> welcome :<h3 className=" text-red text-lg font-bold">{user.name}</h3></h3>
      <Button > <Link  className=" font-bold text-lg" to="/logout"> Log Out</Link></Button>
      </div>
      :
      <div className="brand">
    <Link className="mr-5 font-bold text-lg" to="/login"> Login</Link>
    <Link className="mr-5 font-bold" to="/register"> Sign up</Link></div>} 
    </div>     

</div>

</nav>


)

}