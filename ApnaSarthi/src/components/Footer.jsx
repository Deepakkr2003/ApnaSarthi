/* eslint-disable no-unused-vars */
import React from 'react'
import "../Footer.css"
function Footer() {
    let footerStyle = {
        height: "400px",
        border: "2px solid yellow",
        width:"100vw"
    }

  return (
   <>
    
 <footer className='footer'>
    <div className="container">
        <div className="row">
            <div className="footer-col">
                <h4>Company</h4>
                <ul>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">our service</a></li>
                    <li><a href="#">privacy policy</a></li>
                   
                </ul>
            </div>
            <div className="footer-col">
                <h4>Get Help</h4>
                <ul>
                    <li><a href="#">FAq</a></li>
                    <li><a href="#">Order status</a></li>
                    <li><a href="#">cancel Trip</a></li>
                </ul>
            </div>
        
            <div className="footer-col">
                <h4>Follow us</h4>
                <div className="social-links">
                
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
              
                </div>
            </div>
        </div>
    </div>

 </footer>
   </>
  )
}

export default Footer