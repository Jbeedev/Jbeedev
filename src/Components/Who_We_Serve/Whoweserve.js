import React from 'react'
import whomweserveImg from '../assets/Images/about-us-1 copy.jpg'
import whomweserveImg1 from '../assets/Images/Real-Estate-Marketing.jpg'
import whomweserveImg2 from '../assets/Images/ecommerce.jpg'
import whomweserveImg3 from '../assets/Images/What-we-do-tenplus.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';

import './Whoweserve.css'

export default function Whoweserve() {
    return (
        <div>

<div className="container-fluid mt-5 ml-3">
        <div className="row">
          
 
            <div className="col-md-4 offset-md-2 wow animate__fadeInLeft " data-wow-duration=".5s" >
        
                <h2 className="about-mission mt-3 hvr-underline-from-center">Who We Serve</h2>
                <div>
                <AnimationOnScroll initiallyVisible={true} animateIn="animate__fadeInLeft">
                    <p className="mission-qoute">
                        To solve challenging performance problems for business and
                        organization using reliable digital strategies.
                        To Promote African Development by encouraging Business Sector and
                        Entrepreneurship in Africa.
                    </p>
                    </AnimationOnScroll>
                    <div className="mt-4">
                        <p className="join-d-team-btn"> <a className="hvr-bounce-to-right" href="contact.html">View Store</a></p>
                    </div>
                  
                </div>
            </div>
         
            <div className="col-md-4 offset-md-1 mt-3 ml-3 wow animate__fadeInRight" data-wow-duration=".5s">
                
            <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__fadeInRigh">
                <div className="logo_imgr ">
                          <img className="img20" alt="web development company near me"src={whomweserveImg} />
                    </div>
             
</AnimationOnScroll>
            </div>

           
        </div>
    </div>

 {/* <!-- gallery --> */}

 <div className="container-fluid who-gall-cont ml-3">

    <div className="container">
        <div className="row">
            <div className="col-md-4 mb-4">
           
              <img className="img21 image hvr-grow" alt="web development company near me"src={whomweserveImg1} />
              
              <div className="who-gall-position text-center">
          
                <h4>Web Development</h4>
              <i className="fa fa-share " ></i>
              </div>
              
            </div>
            <div className="col-md-4 mb-4">
               
                       <img className="img21 image hvr-grow" alt="web development company near me"src={whomweserveImg2} />
         
                <div className="who-gall-position text-center">
                  <h4>Mobile App Dev.</h4>
                <i className="fa fa-share " ></i>
                </div>
                
              </div>
              <div className="col-md-4 mb-4">
              
                <img className="img21 image hvr-grow" alt="web development company near me"src={whomweserveImg2} />
                
                <div className="who-gall-position text-center">
                  <h4>Graphics Design</h4>
                <i className="fa fa-share " ></i>
                </div>
                
              </div>
              <div className="col-md-4 mb-4">
               
                <img className="img21 image hvr-grow" alt="web development company near me"src={whomweserveImg2} />
                
                <div className="who-gall-position text-center">
                  <h4>Digital Marketing</h4>
                <i className="fa fa-share " ></i>
                </div>
                
              </div>
              <div className="col-md-4 mb-4">
               
                <img className="img21 image hvr-grow"  alt="web development company near me"src={whomweserveImg2} />
                
                <div className="who-gall-position text-center">
                  <h4>Artificial Intelligence</h4>
                <i className="fa fa-share " ></i>
                </div>
                
              </div>
              <div className="col-md-4 mb-4">
              
                <img className="img21 image hvr-grow" alt="web development company near me"src={whomweserveImg2} />
           
                <div className="who-gall-position text-center">
                  <h4>Project Management</h4>
                <i className="fa fa-share " ></i>
                </div>
                
              </div>
              <div className="col-md-4 mb-4">
               
                <img className="img21 image hvr-grow" alt="web development company near me"src={whomweserveImg2} />
                  
                <div className="who-gall-position text-center">
                  <h4>Printing Services</h4>
                <i className="fa fa-share " ></i>
                </div>
                
              </div>
              <div className="col-md-4 mb-4">
               
                <img className="img21 image hvr-grow" alt="web development company near me"src={whomweserveImg2} />
                
                <div className="who-gall-position text-center">
                  <h4>Video Editing</h4>
                <i className="fa fa-share " ></i>
                </div>
                
              </div>
              <div className="col-md-4 mb-4">
              
                <img className="img21 image hvr-grow" alt="web development company near me"src={whomweserveImg2} />
                
                <div className="who-gall-position text-center">
                  <h4>Cybersecurity</h4>
                <i className="fa fa-share " ></i>
                </div>
                
              </div>
              <div className="col-md-4 mb-4">
              
                <img className="img21 image hvr-grow" alt="web development company near me"src={whomweserveImg2} />
              
                <div className="who-gall-position text-center">
                  <h4>Blockchain</h4>
                <i className="fa fa-share " ></i>
                </div>
                
              </div>

              <div className="col-md-4 mb-4">
               
                <img className="img21 image hvr-grow" alt="web development company near me"src={whomweserveImg2} />
               
                <div className="who-gall-position text-center">
                  <h4>IT Consulting</h4>
                <i className="fa fa-share " ></i>
                </div>
                
              </div>

              <div className="col-md-4 mb-4">
           
                <img className="img21 image hvr-grow" alt="web development company near me"src={whomweserveImg2} />
                  
                <div className="who-gall-position text-center">
                  <h4>IT Training</h4>
                <i className="fa fa-share " ></i>
                </div>
                
              </div>
            
        </div>
    </div>

</div>

        {/* <!-- get listed --> */}

        <div className="container create-bg-c ">

            <div className="row">
          
                <div className="col-md-7 wow animate__fadeInLeft pl-4 " data-wow-duration=".5s">
                <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">
                    <h2 className='company_text'>
                        Create your company profile in less than 6 minutes. 
                    </h2>
                    <p>Being listed on TechBehemoths gives your company the possibility to be found by clients from all over the world that otherwise
                         wouldn’t know about you. </p>
    
                         <a href="">Get Listed</a>
                         </AnimationOnScroll>
                
                </div>
         
                <div className="col-md-5 wow animate__fadeInRight " data-wow-duration=".5s">
                <AnimationOnScroll animateIn="animate__fadeInLeftBig">
    
                <img className="img22 image hvr-grow rounded-circle" alt="web development company near me"src={whomweserveImg3} />
                </AnimationOnScroll>
                </div>
    
                
            </div>
        </div>

    {/* <!-- request a qoute --> */}


    <div className="container">

        <div className="row">
            <div className="col-md-5 offset-md-1 win-online-cont">

                <div className="request-mt">
                    <h6 className="win-online">
                        Win Online
                    </h6>
                    <AnimationOnScroll animateIn="animate__fadeInLeftBig">
   <h5>Look me too.</h5>

                    <h4 className="call-strategy">Request a Marketing Proposal</h4>
           
                    <p className="p-request-a wow animate__fadeInLeft" data-wow-duration=".5s">You will be contacted by one of
                         our marketing specialists within one working day to schedule a quick strategy call. We can also communicate via email if that’s is more convenient for you.</p>
                         </AnimationOnScroll>
                </div>  
                <div className="mt-4">
                    <a href="order.html" className="Request-a-qoute hvr-bounce-to-right wow animate__fadeInUp" data-wow-duration="1s" >GET A QUOTE NOW</a>    
                </div>
        
            </div>
            <div className="col-md-6 ">
                <div className="cont-we-project">
                    <h4 className="call-strategy">Free Strategy Call</h4>
                    <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">
                    <p className="p-request wow animate__fadeInRight" data-wow-duration=".5s">1. We will discuss your business and marketing goals. </p>
                    <p className="p-request wow animate__fadeInRight" data-wow-duration=".5s">2. How our unique profitability framework can be applied to your business. </p>
                    <p className="p-request wow animate__fadeInRight" data-wow-duration=".5s">3. We’ll help you understand what questions you  </p>
                    <p className="p-request wow animate__fadeInRight" data-wow-duration=".5s">need to be asking in order to double or triple your sales and revenue </p>
                </AnimationOnScroll>
                </div>
            </div>

            
        </div>

        
    </div>
            
        </div>
    )
}
