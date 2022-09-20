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

<BrowserRouter>
<Header  cartCount={productInCart ? productInCart.length : 0 }/>
<Routes>
  <Route path="*" element={<NotFound />} />
  <Route path="/BARAKAT/product/:id" element={<ProductZoom />}   />
  <Route path='/BARAKAT/logout' element={user? <Logout />:<Navigate to='/BARAKAT/login'></Navigate> }   />
<Route exact path='/BARAKAT' element={ <Home />} />
<Route  path='/BARAKAT/cart' element={user? <Cart /> : <Navigate to='/BARAKAT/login'> </Navigate>}   />
<Route  path='/BARAKAT/login' element={!user? <Login /> : <Navigate to='/BARAKAT'></Navigate>} />
<Route  path='/BARAKAT/menu' element={ <Menu />} />
<Route  path='/BARAKAT/#about' element={ <About />} />
<Route  path='/BARAKAT/payment-success' element={ <PaymentSuccess />} />
<Route  path='/BARAKAT/register' element={!user?  <Register /> : <Navigate to='/BARAKAT'></Navigate>}   />
<Route path="/BARAKAT/product" element={<Products />} />
</Routes>
<Footer />
</BrowserRouter>

  )
}

export default Navigation;