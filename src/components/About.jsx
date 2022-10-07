import {React,useState,useEffect} from 'react'
import AboutImage from '../assets/images/about-image.png'
import {motion} from "framer-motion"
import {useInView} from "react-intersection-observer"
function About() {
    const {ref,inView}=useInView();
   
    return (
        <div ref={ref}  className="bg-white">
            <div id="about" className="p-24 grid grid-cols-2"> 
            <div className="">
                  <h2 className="text-2xl font-medium"> About Us</h2>
                  <p className="text-lg pt-3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it to
                  
                    sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
            </div>
            <motion.div animate={{x:inView?[900,0]:0}} className="flex items-center justify-center">
                    <img className="w-[400px] h-[400px] object-cover" src={AboutImage} alt=""></img>

                   </motion.div>
            </div>
        </div>
    )
}

export default About
