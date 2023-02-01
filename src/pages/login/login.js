import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import immg from"../../assets/images/pizza_banner.png"
import { useNavigate } from "react-router-dom"
import {AuthContext} from "../../navigation/authContext"
import axios  from "axios"
import {motion}from "framer-motion"

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const Navigate = useNavigate()

    const {error,   loading ,dispatch  }=useContext(AuthContext);
   const credentials={email,password}

 const handleClick=async e=>{
e.preventDefault()
dispatch({type:"LOGIN_START"})
try {
    const res=await axios.post("https://stormy-ray-shawl.cyclic.app/login",credentials)
 dispatch({type:"LOGIN_SUCCESS",payload:res.data})
        Navigate('/')
    
} catch (error) {
    dispatch({type:"LOGIN_FAILURE",payload:error.response.data})
    alert("User not found")
}

 }


   

    return (

        <div className="pb-[520px]">                               
        <div className="auth-form-container  h-[400px]  block absolute top-1/3 left-1/4 rounded-lg 	 bg-white w-[550px]">
          <motion.div transition={{duration:3}} animate={{x:[-800,800,800,0]}}>
           <img className="imgpizzaimg w-[300px] absolute left-[350px] top-[-100px]" src={immg} alt='pizza img'></img>
         </motion.div>  
           <h2 className="font-bold text-center pt-6 pb-5 text-2xl text-red-500 ">Login</h2> <hr className="pb-4"></hr>
            <form className="login-form pt-3 pl-3" >
                <div className="mb-4">
                <label className="pl-8 pr-2 mb-[90px] font-bold" htmlFor="email">Email : </label>
                <input className="pl-2 ml-7 pr-2" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" autoComplete="no-fill" name="email" /><br></br>
                </div> 
                <div className="mb-4">
                <label className="pl-8 font-bold pr-2" htmlFor="password">Password :</label>
                <input className="pl-4 pr-2" value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /><br></br>
                </div>
                <button disabled={loading}  className="ml-[200px] mb-5 mt-[35px] inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" onClick={handleClick} type="submit">Log In</button>
            
             </form>
            <Link className="pl-[35px] mt-[35px] font-bold text-sm  " to="/register"> Don't have an account? Register here.  </Link>
           
        </div>
        </div> 
    )
}
export default Login;