import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import "./footer.css"
import ImageLogo from "./assets/logo.png"
import ImageLogo1 from "./assets/logo1.png"
import AnimatedText from 'react-animated-text-content';
function Footer() {
    return (
        <div>
         <footer className="footer">
        <div class="start-learning   ">
            <div class="footer-start">
                <div class="texts">
                    <h2 id="foodorder" class="section-title ">
                        
<AnimatedText
  type="words" // animate words or chars
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="float"
  interval={0.06}
  duration={0.8}
  tag="p"
  className="animated-paragraph"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
>
Start Ordering Now
</AnimatedText>
                        
                        
                        </h2>
                    <h3 class="section-sub-title"><span>From </span><strong>3.5dt</strong><span> You can</span><strong> Order </strong><span> whatever you look for </span></h3>
                </div>
                    <Link to="/" class="button">
                       
                        <span class="label">Order Now</span>
                    </Link>
                <img class="illustration" className="" src={ImageLogo} width="120" height="94" />
            </div>
        </div>
		<div class="inner ">
            <div class="column is-logo">
                <Link to="#" class="main-logo">
                    <div class="logo">
                       <img src={ImageLogo1}alt="Stackfindover" />
                    </div>
                    <div class="logo-info">
                        <div class="text">Made by ismailChebaane</div>
                        <span class="copyright">© 2022-2023. All rights reserved.</span>
                    </div>
                </Link>
            </div>
            <div class="column is-navigation">
                <div class="column-title">Navigation</div>
                <ul className="brand">
                    <li  ><Link to="/">Home</Link></li>
                  
                    <li><a href="#about">About</a></li>
                </ul>
            </div>
            <div class="column is-navigation">
                <div class="column-title brand">Contact</div>
                <ul className="brand">
                    <li><Link to="#" target="_blank" onClick={(e)=>{
                             window.location.href = "mailto:chebaaneismail@gmail.com";
                             e.preventDefault();
                    }}><i class="fa fa-envelope-open"></i> chebaaneismail@gmail.com</Link></li>
                    <li><Link to="#" target="_blank"  onClick={(e)=>{
                             window.location.href = "https://twitter.com/ismail87077298";
                             e.preventDefault();
                    }}><i class="fa fa-twitter"></i> @ismailchebaane</Link></li>
                    <li><Link to="#" target="_blank"
                    onClick={(e)=>{
                        window.location.href = "https://github.com/ismailchebaane";
                        e.preventDefault();
               }}><i class="fa fa-github"></i> ismailchebaane</Link></li>
                </ul>
                <div class="column-title">Lorem</div>
                <ul>
                    <li className="brand"><Link to="#" target="_blank">Lorem</Link></li>
                </ul>
            </div>
            <div class="column is-navigation">
                <div class="column-title">Other</div>
                <ul className="brand">
                    <li><Link to="#">What is BARAKAT</Link></li>
                    <li><Link to="#">For what we made BARAKAT</Link></li>
                    <li><Link to="#">How to Order</Link></li>
                </ul>
            </div>
		</div>
	</footer>   
        </div>
    )
}

export default Footer
