
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div>
             {/* <!-- Footer --> */}

{/* <!-- scroll to top Button --> */}
<div className="contentDiv" id="content">
   <button className="back-to-top" type="button"></button>
 </div>
 {/* <!-- scroll to top Button --> */}

<div className="container-fluid footer-cont">
<div className='footer_container'>
   <div className="row">
     
       <div className="col-6 col-md-4">
           <div className='services_container'>
               
           <h6 className="footer-header ml-4">Services</h6>
           
           <div className="footer-content-cont-s ">
               <ul>
               <li className="mt-3">
               < a href="/Link?param=webDev">Web Development</a>
               </li>
               <li className="mt-3">
               <a href ="/Link?param=mobDev">Mobile App Development</a>
               </li>
               <li className="mt-3">
                <a href="/Link?param=GrapDev">Graphics Design</a>
               </li>
               <li className="mt-3">
               <a href="/Link?param=DigDev">Digital Marketing</a>
               </li>
               <li className="mt-3">
               <a href="/Link?param=AiDev">Artificial Intelligence</a>
               </li>
               <li className="mt-3">
               <a href="/Link?param=ProDev">Project Management</a>
               </li>
               <li className="mt-3">
               <a href="/Link?param=priDev">Printing Services</a>
               </li>
               <li className="mt-3">
               <a href="/Link?param=VidDev">Video Editing</a>
               </li>
               <li className="mt-3">
               <a href="/Link?param=CybDev">Cybersecurity</a>
               </li>
               <li className="mt-3">
               <a href="/Link?param=AiDev">Blockchain</a>
               </li>
               <li className="mt-3">
               <a href="/Link?param=ItDev">IT Consulting</a>
               </li>
               <li className="mt-3">
               <a href="/Link?param=IttDev">IT Training</a>
               </li>
              
               </ul>
               {/* <!-- Links --> */}
           </div>
           </div>
       </div>
       <div className="col-6 col-md-4">
           <div className='useful_links_container'>
           <h6 className="footer-header">Useful Links</h6>
           <div className="footer-content-cont-s">
               <ul>
               <li className="mt-3">
               <a href="/store">Store</a>
               </li>
               <li className="mt-3">
               <a href="/printing">Printing</a>
               </li>
               <li className="mt-3">
                   <a href="/portfolio">Portfolio</a>
                   </li>
                    <li className="mt-3">
                   <a href="about">About Us</a>
                   </li>
                   <li className="mt-3">
                   <a href="/career">Careers</a>
                   </li>
                   <li className="mt-3">
                   <a href="/whoweserve">Who we serve</a>
                   </li>
                   <li className="mt-3">
                   <a href="https://portal.tenpluslabs.com">Portal</a>
                   </li>
                   <li className="mt-3">
                   <a href="/blog">Blog</a>
                   </li>
                   <li className="mt-3">
                   <a href="terms.html">Terms And Conditions</a>
                   </li>
                   <li className="mt-3">
                   <a href="/privacy">Privacy Policy</a>
                   </li>
                   <li className="mt-3">
                   <a href="/contact">Contact Us</a>
                   </li>
                
              </ul>
               {/* <!-- Links --> */}

           </div>
       </div>
       </div>
       <div className="col-6 col-md-4">
           <div className='contactUs_container'>
           <h6 className="footer-header">Contact Us</h6>
           <div className="footer-content-cont">
               <i className="fa fa-phone " a href="tel:+2348139251969"> &nbsp; 08139251969</i> <br />
               <i className="fa fa-envelope mt-4 "  a href = "mailto:info@tenpluslabs.com?subject = Feedback&body = Message">
               &nbsp;&nbsp;   info@tenpluslabs.com </i>
               <i className="fa fa-map-marker mt-4 " a href="https://goo.gl/maps/X9UebAW9PATQC66E9"> &nbsp;&nbsp;No. 29, University Road, Tanke,Ilorin, Kwara State.</i>
               
           </div>
           <div className="social-icon">
               <i className="fa fa-facebook-f"  href="https://web.facebook.com/tenpluslabs" className="mr-3"></i>
               <a href="https://instagram.com/tenpluslabs_official" className="mr-3">
                   <i className="fa fa-instagram"></i>
               </a>
               <a href="https://twitter.com/tenpluslabs" className="mr-3">
                   <i className="fa fa-twitter"></i>
               </a>
               <a href="https://linkedin.com/company/tenplus-digital-labs" className="mr-3">
                   <i className="fa fa-linkedin"></i>
               </a>
           </div>
           <h6 className="footer-header mb-6">Subscribe</h6>
           <div className="footer-content-cont-s">
               <p  className="mt-3">
                   Subscribe to our news letter 
               </p>
               <form action="" method="post" style={{width: "80%"}}>
                   <input type="email" name="" className="form-control" placeholder="Your email here" id="" /> 
                   <div>
                       <button type="submit" className="hvr-bounce-to-right footer-sub">Subscribe</button>
                   </div>
                   
               </form>
           
       </div>
       </div>
       </div>
       </div>
   </div>

</div>

<div className="footer-container text-center">

   {/* <!-- Copyright --> */}
   <div className="text-center p-4 text-white">
       &copy; Copyright  <script>document.write(new Date().getFullYear());</script> <span className="text-reset fw-bold "> Tenplus Digital Labs</span>
   </div>
   {/* <!-- Copyright --> */}

</div>
        </div>
    );
}
 
export default Footer;