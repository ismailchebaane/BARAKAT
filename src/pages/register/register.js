import React, { useState } from "react";
import { Link } from "react-router-dom";
import immg from"../../assets/images/pizza_banner.png"
import { useNavigate } from "react-router-dom"
import {motion}from "framer-motion"
function Register()  {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [name, setName] = useState('');
    const Navigate = useNavigate()
    const handleSubmit = (e) => {
    
fetch("/register",{
    method:"POST",
    crossDomain:true,
    headers:{
        "content-type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
    
    },body:JSON.stringify({	
        name,
        email,
        password,
    }),
    
    }).then((res)=>{res.json()
        if(res.status===400||!res){
    
alert('already registered')

        }else{
            
            alert('successfully registered')
            Navigate('/login')
        }
    
    }).then((data)=>{
        console.log(data)
        
    })
   
    e.preventDefault();
    }
     
    return ( <div className="pb-[520px]">  
        <div className="auth-form-container h-[400px]  block absolute top-1/3 left-1/4 rounded-lg 	 bg-white w-[550px]">
        <motion.div transition={{duration:3}} animate={{x:[-800,800,800,0]}}>
         
         <img className="w-[300px] absolute left-[350px] top-[-100px] imgpizzaimg" src={immg} alt='pizza img'></img>
         </motion.div> 
            <h2 className="font-bold text-center pt-6 pb-5 text-2xl text-red-500 ">Register</h2>
            <hr className="pb-4"></hr>
        <form className="register-form pt-3 pl-3" onSubmit={handleSubmit}>
             <div className="mb-4">
            <label className="pl-8 pr-2 mb-[90px] font-bold" htmlFor="name">Full Name :</label>
            <input className="pl-2 ml-1 pr-2" value={name} name="name" id="name" onChange={(e)=>{setName(e.target.value)}} placeholder=" Enter Your Full Name" />
            <br></br>
            </div>
            <div className="mb-4">
            <label className="pl-8 pr-2 mb-[90px] font-bold" htmlFor="email">Email :</label>
            <input className="pl-2 ml-9 pr-2" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="exmple@gmail.com" id="email" name="email" />
           <br></br>
           </div>
           <div className="mb-4">
            <label className="pl-8 font-bold pr-2" htmlFor="password">Password : </label>
            <input className="pl-4 pr-2"  value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
          <br></br>
          </div>
            <button className="ml-[200px] mb-5 mt-[35px] inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="submit">Register</button>
        </form>
        <Link  className="pl-[35px] mt-[35px] font-bold text-sm  " to='/login'>  Already have an account? Login here.</Link>
     </div>
    </div>
    )
}
export default Register;