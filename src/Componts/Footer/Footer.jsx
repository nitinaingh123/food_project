import { assets } from '../../assets/assets'
import './Footer.css'
 
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
 <img src={assets.logo} alt="" />
 <p>Furthermore, restaurants like Dominos and Pizza hut are available all over the country. People of every age love the taste of these Italian dishes. Also, Italian dishes are famous for their’ cheese filling. Every dish is load with cheese. Which enhances the taste of these Italian dishes.</p>
 <div className="footer-social-icons">
    <img src={assets.facebook_icon} alt="" />
    <img src={assets.twitter_icon} alt="" />
    <img src={assets.linkedin_icon} alt="" />
 </div>
            </div>
                <div className="footer-content-center">
              <h2>COMPANY</h2>
              <ul>
                <li>HOme</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>privacy policy</li>
            
              </ul>
              
              
                </div>
                    <div className="footer-content-right">
<h2>Get IN tOUCH</h2>
<ul>
    <li>+91 23-45-645-6</li>
    <li>Contact@gmail.com</li>
</ul>
                    </div>
              
           
        </div>
      <hr/>
      <p className="footer-copyright"> Copyright 2025@ Tomato.com - All Right Reserved..</p>
    </div>
  )
}

export default Footer
