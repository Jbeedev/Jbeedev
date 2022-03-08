import React from 'react'
import { Link } from 'react-router-dom'

// import Products from './Components/Plan-Selection/Plan-Selection';
import StoreImg from '../assets/Images/Printing-Services.png'
import WebImage from '../assets/Images/grace-school.png'
import MobileAppImage from '../assets/Images/Lakecoast-App.png'
import GraphicsImage from '../assets/Images/Logo-graphics.png'
import DigitalImage from '../assets/Images/Digital.png'
import AiImage from '../assets/Images/CAR.png'
import ProjectImage from '../assets/Images/GLAM.png'
import PrintImage from '../assets/Images/Frame-printing.png'
import ConsultImg from '../assets/Images/Frame-printing.png'
import VideoImg from '../assets/Images/VIDEO_Edit.png'
import CyberImg from '../assets/Images/cyber-security.png'
import BlockchainImg from '../assets/Images/Blockchain-logo.png'
import ITimage from '../assets/Images/COurses.png'

export default function Store() {
    return (
        <div>

            <header>
                    <div class="container-fluid" style={{maxWidth: "100%;"}}>
                        <div class="row">
                            <div class="col-md-12 bg-img-port" style={{backgroundImage: `url(${StoreImg})`}}>
                                <div class="">
                                    <div class=" text-center text-uppercase ">
                                        <h2 class="banner-h2-text hvr-underline-from-center">Store</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </header>

            <div class="container-fluid mt-5 mb-5">
        <div class="row">
            <div class="col-md-8 offset-md-2 wow animate__fadeInLeft text-center" data-wow-duration=".5s" >
                 <h2 class="store-h2-style">Imagine your future!</h2>
                 <h5 class="store-h5-style">What do you want to buy today? What's your dream project?</h5>
                 <h6 class="store-h6-style">I want to Buy...</h6>
            </div>
            
        </div>
    </div>

    {/* <!-- gallery --> */}

    <div class="container-fluid who-gall-cont">

        <div class="container">
            <div class="row">
                <div class="col-md-4">
                  <Link to="/productcategory" class="wow animate__fadeInUp" data-wow-duration=".7s" >
                      <img src={WebImage} class="who-gall-cont-img hvr-grow" alt="" />
                      <div class="who-gall-position text-center">
                        <h4>Web Development</h4>
                        <i class="fa fa-share " ></i>
                      </div>
                  </Link>  
                  
                </div>
                <div class="col-md-4">
                    <Link to="/productcategory" class="wow animate__fadeInUp" data-wow-duration=".7s" >
                        <img src={MobileAppImage} class="who-gall-cont-img hvr-grow" alt="" />
                        <div class="who-gall-position text-center">
                          <h4>Mobile App Dev.</h4>
                          <i class="fa fa-share " ></i>
                        </div>
                    </Link>  
                    
                  </div>
                  <div class="col-md-4">
                    <Link to="/productcategory" class="wow animate__fadeInUp" data-wow-duration=".7s" >
                        <img src={GraphicsImage} class="who-gall-cont-img hvr-grow" alt="" />
                        <div class="who-gall-position text-center">
                        <h4>Graphics Design</h4>
                          <i class="fa fa-share " ></i>
                        </div>
                    </Link>  
                    
                    
                  </div>
                  <div class="col-md-4">
                    <Link to="/productcategory" class="wow animate__fadeInUp" data-wow-duration=".7s" >
                        <img src={DigitalImage} class="who-gall-cont-img hvr-grow" alt="" />
                        <div class="who-gall-position text-center">
                        <h4>Digital Marketing</h4>
                          <i class="fa fa-share " ></i>
                        </div>
                    </Link>  
                    
                    
                  </div>
                  <div class="col-md-4">
                    <Link to="/productcategory" class="wow animate__fadeInUp" data-wow-duration=".7s" >
                        <img src={AiImage} class="who-gall-cont-img hvr-grow" alt="" />
                        <div class="who-gall-position text-center">
                          <h4>Artificial Intelligence</h4>
                          <i class="fa fa-share " ></i>
                        </div>
                    </Link>  
                    
                    
                  </div>
                  <div class="col-md-4">
                    <Link to="/productcategory" class="wow animate__fadeInUp" data-wow-duration=".7s" >
                        <img src={ProjectImage} class="who-gall-cont-img hvr-grow" alt="" />
                        <div class="who-gall-position text-center">
                          <h4>Project Management</h4>
                          <i class="fa fa-share " ></i>
                        </div>
                    </Link>                      
                    
                  </div>
                  <div class="col-md-4">
                    <Link to="/productcategory" class="wow animate__fadeInUp" data-wow-duration=".7s" >
                        <img src={PrintImage} class="who-gall-cont-img hvr-grow" alt="" />
                        <div class="who-gall-position text-center">
                          <h4>Printing Services</h4>
                          <i class="fa fa-share " ></i>
                        </div>
                    </Link>  
                    
                    
                  </div>
                  <div class="col-md-4">
                    <Link to="/productcategory" class="wow animate__fadeInUp" data-wow-duration=".7s" >
                        <img src={VideoImg} class="who-gall-cont-img hvr-grow" alt="" />
                        <div class="who-gall-position text-center">
                          <h4>Video Editing</h4>
                          <i class="fa fa-share " ></i>
                        </div>
                    </Link>  
                   
                    
                  </div>
                  <div class="col-md-4">
                    <Link to="/productcategory" class="wow animate__fadeInUp" data-wow-duration=".7s" >
                        <img src={CyberImg} class="who-gall-cont-img hvr-grow" alt="" />
                        <div class="who-gall-position text-center">
                          <h4>Cybersecurity</h4>
                          <i class="fa fa-share " ></i>
                      </div>
                    </Link>  
                    
                    
                  </div>
                  <div class="col-md-4">
                    <Link to="/productcategory" class="wow animate__fadeInUp" data-wow-duration=".7s" >
                        <img src={BlockchainImg} class="who-gall-cont-img hvr-grow" alt="" />
                        <div class="who-gall-position text-center">
                      <h4>Blockchain</h4>
                      <i class="fa fa-share " ></i>
                    </div>
                    </Link>  

                    
                  </div>

                  <div class="col-md-4">
                    <Link to="/productcategory" class="wow animate__fadeInUp" data-wow-duration=".7s" >
                        <img src={ConsultImg} class="who-gall-cont-img hvr-grow" alt="" />
                        <div class="who-gall-position text-center">
                          <h4>IT Consulting</h4>
                          <i class="fa fa-share " ></i>
                        </div>
                    </Link>  
                    
                  </div>

                  <div class="col-md-4">
                    <Link to="/productcategory" class="wow animate__fadeInUp" data-wow-duration=".7s" >
                        <img src={ITimage} class="who-gall-cont-img hvr-grow" alt="" />
                        <div class="who-gall-position text-center">
                          <h4>IT Training</h4>
                          <i class="fa fa-share " ></i>
                        </div>
                    </Link>  
                    
                  </div>
            </div>
        </div>
    </div>

    {/* <!-- request a qoute --> */}


    <div class=" ">

        <div class="row">
            <div class="col-md-5 offset-md-1 win-online-cont">

                <div class="request-mt">
                    <h6 class="win-online">
                        Win Online
                    </h6>
                    <h4 class="call-strategy">Request a Marketing Proposal</h4>

                    <p class="p-request-a wow animate__fadeInLeft" data-wow-duration=".5s">You will be contacted by one of
                         our marketing specialists within one working day to schedule a quick strategy call. We can also communicate via email if that’s is more convenient for you.</p>
    
                </div>  
                <div class="mt-4">
                    <a href="order.html" class="Request-a-qoute hvr-bounce-to-right wow animate__fadeInUp" data-wow-duration="1s" >GET A QUOTE NOW</a>    
                </div>
        
            </div>
            <div class="col-md-5 ">
                <div class="cont-we-project">
                    <h4 class="call-strategy">Free Strategy Call</h4>
                    <p class="p-request wow animate__fadeInRight" data-wow-duration=".5s">1. We will discuss your business and marketing goals. </p>
                    <p class="p-request wow animate__fadeInRight" data-wow-duration=".5s">2. How our unique profitability framework can be applied to your business. </p>
                    <p class="p-request wow animate__fadeInRight" data-wow-duration=".5s">3. We’ll help you understand what questions you  </p>
                    <p class="p-request wow animate__fadeInRight" data-wow-duration=".5s">need to be asking in order to double or triple your sales and revenue </p>
                </div>
            </div>

            
        </div>

        
    </div>
            
        </div>
    )
}
