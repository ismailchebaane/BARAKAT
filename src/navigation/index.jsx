import { BrowserRouter,Route,Routes } from "react-router-dom";
import {Header}from "../components/Header.jsx"
import Home from "../pages/home/index"
import Cart from "../pages/cart/index"
import Login from "../pages/login/login.js"
import Menu from "../pages/menu/index"
import PaymentSuccess from "../pages/paymentSuccess/index"
import Register from "../pages/register/register.js"
import Logout from "../pages/logout/logout"
import About from "../components/About"
import Footer from "../components/Footer"
import { useSelector } from "react-redux";
import { cartProducts } from "../stores/cart/cartSlice.js";
import Auth from "./authContext.js";
import { useState,useEffect } from "react";
import {Navigate}from 'react-router-dom'
import {AuthContext} from "./authContext.js"
import {useContext} from "react";
import Products from "../pages/products/products"
import ProductZoom from "../pages/productZoom/productzoom.js"
import NotFound from "../pages/404/Notfound.js";

const Navigation=()=>{
const productInCart=useSelector(cartProducts);
const {user}=useContext(AuthContext);



return(

<BrowserRouter baseName="/">
<Header  cartCount={productInCart ? productInCart.length : 0 }/>
<Routes>
  <Route path="*" element={<NotFound />} />
  <Route path="/product/:id" element={<ProductZoom />}   />
  <Route path='/logout' element={user? <Logout />:<Navigate to='/login'></Navigate> }   />
<Route exact path='/' element={ <Home />} />
<Route  path='/cart' element={user? <Cart /> : <Navigate to='/login'> </Navigate>}   />
<Route  path='/login' element={!user? <Login /> : <Navigate to='/'></Navigate>} />
<Route  path='/menu' element={ <Menu />} />
<Route  path='/#about' element={ <About />} />
<Route  path='/payment-success' element={ <PaymentSuccess />} />
<Route  path='/register' element={!user?  <Register /> : <Navigate to='/'></Navigate>}   />
<Route path="/product" element={<Products />} />
</Routes>
<Footer />
</BrowserRouter>

  )
}

export default Navigation;