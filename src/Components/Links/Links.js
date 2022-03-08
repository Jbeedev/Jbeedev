
import React,{useEffect, useState}  from "react";
import './Links.css';
import whomweserveImg2 from '../assets/Images/WEB_DEV.png'
import toolimg from '../assets/Images/Artboard.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Testimonial1 from '../assets/Images/Testimonial001.png' 
import Testimonial2 from '../assets/Images/Testimonial.png' 
import Testimonial3 from '../assets/Images/Testimonial01.png' 

const Link = () => {
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const param = urlParams.get('param')
    const [showBox,setShowBox] = useState('')  
        // setShowBox(urlParams)   
        useEffect(()=>{
            setShowBox(param) 
            // alert(param)
        },[])    
        const setShowBoxFunc= (val)=>{
            setShowBox(val)
        }
       

  return (
    <div>
<header>
<div className="container-fluid" style={{maxWidth: "100%;"}}>
                        <div className="row">
                            <div className="col-md-12 bg-img-port" style={{backgroundImage: `url(${toolimg})`}}>
                                <div className="">
                                    <div className=" text-center text-uppercase ">
                                        <h2 className="banner-h2-text hvr-underline-from-center">Services</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </header>

                                                   



        <div className="web_container">
            <div className="row">
                <div className="col-md-4 mt-4">
              
               <ul className="serv_ul">
                   <div className={`${showBox === 'webDev' && "Serv_active"} serv_button col-md-12`} onClick={()=>setShowBoxFunc('webDev')}>
                   <div className={`${showBox === 'webDev' ? " but-active" : 'but'} but`}>
                   <li>Web Development</li>
                   </div>
                   </div>
                   <div className={`${showBox === 'mobDev' && "Serv_active"} serv_button col-md-12`} onClick={()=>setShowBoxFunc('mobDev')}>
                   <p className={`${showBox === 'mobDev' ? "but-active" : 'but'} but`}>
                   <li>Mobile App Development </li>
                   </p>
                   </div>
                   <div className={`${showBox === 'GrapDev' && "Serv_active"} serv_button col-md-12`} onClick={()=>setShowBoxFunc('GrapDev')}>
                   <p className={`${showBox === 'GrapDev' ? "but-active" : 'but'} but`}>
                   <li>Graphics Design</li>
                   </p>
                   </div>
                   <div className={`${showBox === 'AiDev' && "Serv_active"} serv_button col-md-12`} onClick={()=>setShowBoxFunc('AiDev')}>
                   <p className={`${showBox === 'AiDev' ? "but-active" : 'but'} but`}>
                   <li>Artificial Intelligence</li>
                   </p>
                   </div>
                   <div className={`${showBox === 'ProDev' && "Serv_active"} serv_button col-md-12`} onClick={()=>setShowBoxFunc('ProDev')}>
                   <p className={`${showBox === 'ProDev' ? "but-active" : 'but'} but`}>
                   <li>Project Management</li>
                   </p>
                   </div>
                   <div className={`${showBox === 'CybDev' && "Serv_active"} serv_button col-md-12`} onClick={()=>setShowBoxFunc('CybDev')}>
                   <p className={`${showBox === 'CybDev' ? "but-active" : 'but'} but`}>
                   <li>Cybersecurity</li>
                   </p>
                   </div>
                   <div className={`${showBox === 'BloDev' && "Serv_active"} serv_button col-md-12`} onClick={()=>setShowBoxFunc('BloDev')}>
                   <p className={`${showBox === 'BloDev' ? "but-active" : 'but'} but`}>
                   <li>Blockchain</li>
                   </p>
                   </div>
                   <div className={`${showBox === 'ItDev' && "Serv_active"} serv_button col-md-12`} onClick={()=>setShowBoxFunc('ItDev')}>
                   <p className={`${showBox === 'ItDev' ? "but-active" : 'but'} but`}>
                   <li>IT Consulting</li>
                   </p>
                   </div>  
                   <div className={`${showBox === 'IttDev' && "Serv_active"} serv_button col-md-12`} onClick={()=>setShowBoxFunc('IttDev')}>
                   <p className={`${showBox === 'IttDev' ? "but-active" : 'but'} but`}>
                   <li>IT Training</li>
                   </p>
                   </div>  
               </ul>
                </div>
            <div className="col-md-5" >
                <div className={showBox === 'webDev' ? "display-block" : "display-none" }>
                    <h2 className="service-h2">
                    Web Development 1
                    </h2>
                  <p className="service-par">The benefit of owning a website today cannot be overemphasized. Website have
                    grown to be one of the trusted tools to drive businesses and brands. Competition
                    is on the high
                    side and one of the ways to stand out is
                    through a strategically optimized website
                    for your target audience.
                    <br /> <br />
                    We build highly responsive websites that
                    meet all our clients target audience and
                    their needs
                  </p>
                  <img className="img23 image hvr-grow" alt="web development company near me"src={whomweserveImg2} />
                  
                    <div className="text-center mt-3 ml-3">
                        <div className="col-md-4">
                        <p className="join-d-team-btn"> 
                        <a className="hvr-bounce-to-right" href="/order">Order Now</a></p>
                      </div>
                    </div>
                 
                  </div>
                
            

                  

       
                <div className={showBox === 'mobDev' ? "display-block" : "display-none"} >
                <h2 className="service-h2">
                  Mobile Development
                </h2>
                <p className="service-par">Users interact more with the web through mobile devices. Statistics of mobile users have grown
                    significantly. Therefore, businesses have evolved and have been optimized to reach more of these users.
                    <br />
                    Need a mobile app for your project?
                  </p>
                  <img className="img23 image hvr-grow" alt="web development company near me"src={whomweserveImg2} />
                   
                  <div className="col-md-4">
                        <p className="join-d-team-btn"> 
                        <a className="hvr-bounce-to-right" href="/order">Order Now</a></p>
                      </div>

                 </div>
                

                
                <div className={showBox === 'GrapDev' ? "display-block" : "display-none"} >
                <h2 className="service-h2">
                  Graphics Design
                </h2>
                  <p className="service-par">Create beautiful and interactive designs to communicate your brand, messages or ideas to your target audience. Graphics are used
                    in almost all aspects of our personal or business lives. <br /> Strategic designs grow audience engagement by over 70% over text as they are over easily
                    processed by the users’ brain. This is one of the benefits of visual communication <br />
                    Tell us your idea, and we give you the best design to represent your idea. Also need them printed? We offer the best quality
                    print service to our customers.
                  </p>
                  <img className="img23 image hvr-grow" alt="web development company near me"src={whomweserveImg2} />

                  <div className="col-md-4">
                        <p className="join-d-team-btn"> 
                        <a className="hvr-bounce-to-right" href="/order">Order Now</a></p>
                      </div>
                 </div>
                


                
                
                <div className={showBox === 'AiDev' ? "display-block" : "display-none"} >
                <h2 className="service-h2">
                  Artificial Intelligence
                </h2>
                  <p className="service-par">
                    Use our Printing Services to complete your printing needs on time, with fast delivery. We produce and deliver quality results. We offer Delivery Services on Prints Nationwide.
                    <br />
                    Services: Brochure Printing, Corporate Printing, Full Corporate Branding, Signage, All forms of Customizing, and lots more.
                    <br />
                    Talk to us today, and tell us your demands. We will serve you the best.
                  </p>
                  <img className="img23 image hvr-grow" alt="web development company near me"src={whomweserveImg2} />
                  <div className="col-md-4">
                        <p className="join-d-team-btn"> 
                        <a className="hvr-bounce-to-right" href="/order">Order Now</a></p>
                      </div>
                 </div>

        
                
                
                <div className={showBox === 'DigDev' ? "display-block" : "display-none"} >
                <h2 className="service-h2">
                  Digital Marketing
                </h2>
                  <p className="service-par">
                    Digital Marketing has greatly evolved in 2021. Most businesses are now conducted online and this has significantly
                    increased the number of competition for sales growth. Properly planned marketing techniques are required to ensure profitability.
                    We ensure this through our contents (copywriting), SEO, social media marketing techniques, display ads, graphics, video and other.
                    <br />
                    Have a Project? Tell us! We will ensure to deliver the result you desire.
                  </p>
                  <img className="img23 image hvr-grow" alt="web development company near me"src={whomweserveImg2} />
                  <div className="col-md-4">
                        <p className="join-d-team-btn"> 
                        <a className="hvr-bounce-to-right" href="/order">Order Now</a></p>
                      </div>
                 </div>


                <div className={showBox === 'ProjDev' ? "display-block" : "display-none"} >
                <h2 className="service-h2">
                  Project Management
                </h2>
                  <p className="service-par">
                      Lack of project management usually leads to failure. But your project should not fail.
                      <br />
                      We can help streamline your project management activities from pre-project planning to post-project review to get efficient results.
                  </p>
                  
                  <img className="img23 image hvr-grow" alt="web development company near me"src={whomweserveImg2} />
                      
                  <div className="col-md-4">
                        <p className="join-d-team-btn"> 
                        <a className="hvr-bounce-to-right" href="/order">Order Now</a></p>
                      </div>
                 </div>

                
                <div className={showBox === 'DatDev' ? "display-block" : "display-none"} >
                <h2 className="service-h2">
                  Data Science and Machine Learning
                </h2>
                <p className="service-par">
                  Discover how data science, data analytics, machine learning and artificial intelligence are shaping the future.
                  We conduct thorough research into through computer technology, simulation and market management to predict successful outcomes.
                </p>
                  <img className="img23 image hvr-grow" alt="web development company near me"src={whomweserveImg2} />
                  <div className="col-md-4">
                        <p className="join-d-team-btn"> 
                        <a className="hvr-bounce-to-right" href="/order">Order Now</a></p>
                      </div>

                 </div>
                 
                <div className={showBox === 'VidDev' ? "display-block" : "display-none"} >
                <h2 className="service-h2">
                  Video Editing
                </h2>
                <p className="service-par">
                    Videos top the trend as the best marketing tool to deliver to your target audience. <br />
                    We capture, manipulate, arrange our videos to present efficiently to the needs of the target audience.
                    <br />
                    Let’s talk about your project. Order below to get a quote.
                </p>
                  <img className="img23 image hvr-grow" alt="web development company near me"src={whomweserveImg2} />
         
                  <div className="col-md-4">
                        <p className="join-d-team-btn"> 
                        <a className="hvr-bounce-to-right" href="/order">Order Now</a></p>
                      </div>

                 </div>
                
                <div className={showBox === 'CybDev' ? "display-block" : "display-none"} >
                <h2 className="service-h2">
                  Cyber Security
                </h2>
                <p className="service-par">
                      We align Cyber Security with Digital Transformation: Protecting Global Networks,
                      Digital Platforms, and your Most Valuable Enterprise Data across the World. </p>
                      <p className="more-info mb-3 "><strong>We provide expert services on:</strong>
                      <br />
                      Secure Monitoring; <br />Compliance and Audit; <br /> Incidents Response; and <br /> Penetration Testing.
                </p>
                  <img className="img23 image hvr-grow" alt="web development company near me"src={whomweserveImg2} />
                    
                  <div className="col-md-4">
                        <p className="join-d-team-btn"> 
                        <a className="hvr-bounce-to-right" href="/order">Order Now</a></p>
                      </div>
                 </div>
                
                <div className={showBox === 'BloDev' ? "display-block" : "display-none"} >
                <h2 className="service-h2">
                  Blockchain
                </h2>
                <p className="service-par">
                    Right now, visionary companies are coming together to transform the way their industries
                    work with the help of Blockchain. Enable trusted data exchange and workflow beyond the
                    boundaries with distributed ledger technology and Blockchain.
                    <br />
                    We develop and provide blockchain technology services that help
                    you materialize your ideas into sustainable business models.
                </p>
                  <img className="img23 image hvr-grow" alt="web development company near me"src={whomweserveImg2} />
                  <div className="col-md-4">
                        <p className="join-d-team-btn"> 
                        <a className="hvr-bounce-to-right" href="/order">Order Now</a></p>
                      </div>

                 </div>

                
                <div className={showBox === 'ItDev' ? "display-block" : "display-none"} >
                <h2 className="service-h2">
                  IT Consulting
                </h2>
                <p className="service-par">
                  We give expert Information Technology related advices to businesses and
                  organizations on how best to use Information Technology in achieving or
                  promoting their objectives.
                  <br /> <br />
                  Start a project and we shall schedule a session for you.
                </p>
                  <img className="img23 image hvr-grow" alt="web development company near me"src={whomweserveImg2} />
         
                  <div className="col-md-4">
                        <p className="join-d-team-btn"> 
                        <a className="hvr-bounce-to-right" href="/order">Order Now</a></p>
                      </div>
                 </div>

                <div className={showBox === 'IttDev' ? "display-block" : "display-none"} >
                <h2 className="service-h2">
                  IT Training
                </h2>
                <p className="service-par">
                  We build the next generation of expert in various skills in order to drive economies. <br />
                  We don’t just conduct trainings on the particular skill alone, we also expose our graduates
                  to various ways to either start their own businesses, apply properly for jobs, learn to
                  freelance properly, and we also outsource our best students to companies with high paying salaries for their skills.
                </p>
                  <img className="img23 image hvr-grow" alt="web development company near me"src={whomweserveImg2} />
                  <div className="col-md-4">
                        <p className="join-d-team-btn"> 
                        <a className="hvr-bounce-to-right" href="/order">Order Now</a></p>
                      </div>

         </div>
                 </div>

                  </div>



                  <div className="cont-choose-w mr-3 ml-3">
                <div className="text-center">
                <AnimationOnScroll animateIn="animate__fadeInRigh" animateOut="animate__fadeInRight">
                    <h2 className="why-you-choose hvr-underline-from-center wow animate__fadeInDown" data-wow-duration="4s" data-wow-delay="0.1s">
                        WHY CHOOSE US
                    </h2>
                    </AnimationOnScroll>
                </div>

                <div className="container_choose">
                    <div className="row">
                        
                        <div className="col-sm-12 col-md-5 offset-md-1 container-box-w">
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeInLeft">
                            <p className="wow animate__fadeInLeft" data-wow-duration=".2s" data-wow-delay="0s" > <i className="fa fa-long-arrow-right h-arrow-rt  fa-lg" ></i>Attention to Project Details</p>
                            </AnimationOnScroll>
                                </div>
                        <div className="col-sm-12 col-md-5 offset-md-1 container-box-w">
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeInLeft">
                            <p className="wow animate__fadeInRight" data-wow-duration=".2s" data-wow-delay="0s" > <i className="fa fa-long-arrow-right h-arrow-rt fa-lg" ></i>Innovation and Creativity</p>
                       </AnimationOnScroll>
                        </div>
                        <div className="col-sm-12 col-md-5 offset-md-1 container-box-w">
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeInLeft">
                            <p className="wow animate__fadeInLeft" data-wow-duration=".2s" data-wow-delay="0s" > <i className="fa fa-long-arrow-right h-arrow-rt  fa-lg" ></i>Affordable Pricing</p>
                          </AnimationOnScroll>
                        </div>
                        <div className="col-sm-12 col-md-5 offset-md-1 container-box-w">
                        <AnimationOnScroll animateIn="animate__fadeInRigh" animateOut="animate__fadeInRight">
                            <p className="wow animate__fadeInRight" data-wow-duration=".2s" data-wow-delay="0s" > <i className="fa fa-long-arrow-right h-arrow-rt fa-lg" ></i>Plan For success</p>
                       </AnimationOnScroll>
                        </div>
                        <div className="col-sm-12 col-md-5 offset-md-1 container-box-w">
                        <AnimationOnScroll animateIn="animate__fadeInRigh" animateOut="animate__fadeInRight">
                            <p className="wow animate__fadeInLeft" data-wow-duration=".2s" data-wow-delay="0s" > <i className="fa fa-long-arrow-right h-arrow-rt  fa-lg" ></i>Expert Delivery</p>
                        </AnimationOnScroll>
                        </div>
                        <div className="col-sm-12 col-md-5 offset-md-1 container-box-w">
                        <AnimationOnScroll animateIn="animate__fadeInRigh" animateOut="animate__fadeInRight">
                            <p className="wow animate__fadeInRight" data-wow-duration=".2s" data-wow-delay="0s" > <i className="fa fa-long-arrow-right h-arrow-rt fa-lg" ></i>Deliver on Schedule</p>
                        </AnimationOnScroll>
                        </div>

                    </div>
                </div>
                
            </div>


            {/* <!-- testimonial --> */}

            <div className="container_testimonial ">
            <div className="text-center mt-5">
                    <h2 className="why-you-choose hvr-underline-from-center" >Testimonial</h2>
                </div>
                <div className="row pt-3 ml-3">
            
                  <div className="col-sm-6 col-md-4">
                        <div className="card mr-3 pb-3">
                            <div className="mt-2"> <span className="fa fa-star active-star"></span> <span className="fa fa-star active-star">
                              </span> <span className="fa fa-star active-star"></span> <span className="fa fa-star active-star"></span>
                               <span className="fa fa-star active-star"></span> </div>
                            <div className="main head-review pb-2 pt-1">Great Service</div>
                            <div className="testimonial">  “TenPlus Digital Labs has been of such a tremendous help in getting us focused more  on our marketing
                              and advertising plans. I highly recommend TenPlus and their outstanding team on any work 
                              related to business promotion." </div>
                            <div className="d-flex flex-row profile pt-4 mt-auto"> 
                            <img src={Testimonial1} alt="" className="rounded-circle" />
                                <div className="d-flex flex-column pl-2">
                                    <div className="name">Adekunle </div>
                                    <p className="text-muted designation">CEO of Brand O Textiles</p>
                                </div>
                            
                    </div>
                  </div>
                     
                     
                  

                  </div>



                  <div className="col-sm-6  col-md-4">
                        <div className="card mr-3 pb-3">
                            <div className="mt-2"> <span className="fa fa-star active-star"></span> <span className="fa fa-star active-star"></span> <span className="fa fa-star active-star"></span> <span className="fa fa-star active-star"></span> <span className="fa fa-star active-star"></span> </div>
                            <div className="main head-review pb-2 pt-1">Great Service</div>
                            <div className="testimonial"> “At first, I was skeptical about the need to create a website. I later figured out of many different ways to
                              monetize my website, and add to my revenue, all thanks to TenPlus Digital Labs. They
                              are good at what they do." </div>
                            <div className="d-flex flex-row profile pt-4 mt-auto"> <img src={{Testimonial2}} alt="" className="rounded-circle" />
                                <div className="d-flex flex-column pl-2">
                                    <div className="name">Abdulkareem Age</div>
                                    <p className="text-muted designation">CEO of Great Olms Apartment</p>
                                
                            </div>
                        </div>
                    </div>
                   </div>


                     
                     
                   <div className="col-sm-6  col-md-4">
                        <div className="card mr-3 pb-3">
                            <div className="mt-2"> <span className="fa fa-star active-star"></span> <span className="fa fa-star active-star">
                              </span> <span className="fa fa-star active-star"></span> <span className="fa fa-star active-star"></span> 
                              <span className="fa fa-star active-star"></span> </div>
                            <div className="main head-review pb-2 pt-1">Great Service</div>
                            <div className="testimonial"> “I have learnt a lot from the founder of the company for some years now, and I can tell his
                              company was built for success even before taking my latest project to him. And as usual, he and his team did excellently
                               well in designing and printing all the materials for my wedding." </div>
                            <div className="d-flex flex-row profile pt-4 mt-auto"> <img src={Testimonial3} alt="" className="rounded-circle" />
                                <div className="d-flex flex-column pl-2">
                                    <div className="name">Toria Ubani</div>
                                    <p className="text-muted designation">CEO of Tee Fashion</p>
                                
                            
                        </div>
                    </div>
                  </div>
              
                </div>



          
                  </div>
                 
               
                    
            </div>

                    
            {/* <!-- testimonial --> */}

            {/* <!-- project  --> */}

            <div className="cont-mind-project text-center mr-3 ml-3">
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeInLeft">
                        
                <h4 className="h4-project-port wow animate__fadeInLeft" data-wow-duration=".5s"> Have Any Project in Mind </h4>
              </AnimationOnScroll>
                 <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeInRight">
                <p className="p-project-port wow animate__fadeInRight" data-wow-duration=".5s">Get in Touch with Us Today</p>
</AnimationOnScroll>
                <div className="text-center mt-5">
                    <a href="/order" className="talk-to-box hvr-bounce-to-right wow animate__fadeInUp" data-wow-duration="2s" >Talk to Us</a>    
                </div>

            </div>

                  </div>
                
    </div>
  )
}

export default Link;