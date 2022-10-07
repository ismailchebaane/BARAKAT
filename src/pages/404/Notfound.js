import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"
import "./styles.css"
function NotFound() {
    return (
      
            
<div class="bg-purple">
        
        <div class="stars">
          
            <div class="central-body">
                <motion.div drag animate={{scale:1}}>
                <img class="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px" />
                </motion.div>  <Link to="/" class="btn-go-home">GO BACK HOME</Link>
            </div>
            <div class="objects">
                <motion.div drag  dragConstraints={{left:200,right:200,top:200,bottom:200}} >
              </motion.div>  <img class="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" />
                <div class="earth-moon">
                  <motion.div  drag dragConstraints={{left:200,right:200,top:200,bottom:200}}>
                    <img class="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" />
                    </motion.div>
                     <motion.div  animate={{rotate:0}}>
                    <img class="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" />
                    </motion.div>
                </div>
                <motion.div drag dragConstraints={{left:200,right:200,top:200,bottom:200}} class="box_astronaut">
                    <img class="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" />
                </motion.div>
            </div>
            <div class="glowing_stars">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>   <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
            </div>
    
        </div>
    
    </div>
    
       
    )
}

export default NotFound
