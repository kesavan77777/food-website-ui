import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
         <img src={assets.logo} alt="" />
         <p>this is a traditionl food website where u can order ur fav items fr (Fractional Unit): The fr unit represents a fraction of the available space in the grid container. It's a flexible unit that can be used to create responsive layouts that adapt to the size of the container.</p>
        <div className="footer-image-icons">
        <img src={assets.facebook_icon} alt="" />
         <img src={assets.twitter_icon} alt="" />
         <img src={assets.linkedin_icon} alt="" />
         
        </div>
                 </div>
        <div className="footer-content-center">
         <h2>COMPANY</h2>
        <ul>
          <li>home</li>
          <li>about us</li>
          <li>delivery</li>
          <li>place order</li>
        </ul>
        </div>
        <div className="footer-content-right">
         <h2>GET IN TOUCH</h2>
         <ul>
          <li>+91 94860 33534</li>
          <li>contact@keshav.in</li>
         </ul>
        </div>
      </div>
      <hr />
      <div className="footer-copyright">
      <p>a multinational company on the verge of killing inorganic foods </p>
      </div>
    </div>
  )
}

export default Footer
