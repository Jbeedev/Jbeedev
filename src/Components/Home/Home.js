import React,{ useEffect,useState  }from "react";
//import BackToTop from "react-back-to-top";
import { AnimationOnScroll } from 'react-animation-on-scroll';
//import ScrollToTop from "react-scroll-to-top";
import ImgImg1 from '../assets/Images/TenPlus_Banner02.png' 
import ImgImg2 from '../assets/Images/TenPlusBanner002.png' 
import ImgImg3 from '../assets/Images/TenPlus_Banner02.png' 
import ImgImg4 from '../assets/Images/TenPlus-Banner-003.png' 
import ImgImg5 from '../assets/Images/What-we-do-tenplus.png' 
import ImgImg6 from '../assets/Images/app-logo-type.png' 
import WorldMap from '../assets/Images/word-map-globe-tenplus.png' 
import Testimonial1 from '../assets/Images/Testimonial001.png' 
import Testimonial2 from '../assets/Images/Testimonial.png' 
import Testimonial3 from '../assets/Images/Testimonial01.png' 
import ToolsImg1 from '../assets/Images/Tenplus Partners 01.png' 
import ToolsImg2 from '../assets/Images/Asana-logo.png' 
import ToolsImg3 from '../assets/Images/aws.png' 
import ToolsImg4 from '../assets/Images/FB.png' 
import ToolsImg5 from '../assets/Images/Tenplus Partners 03.png' 
import ToolsImg6 from '../assets/Images/TEF.png' 
import ToolsImg7 from '../assets/Images/PICK BOOK LOGO.png' 
import ToolsImg8 from '../assets/Images/Link.png' 
import ToolsImg9 from '../assets/Images/Tenplus Partners 02.png' 
import ToolsImg10 from '../assets/Images/Flutter.png' 
import ToolsImg11 from '../assets/Images/Android-Studio.png' 
import ToolsImg12 from '../assets/Images/SLack-logo.png' 
import ToolsImg13 from '../assets/Images/twitter.png' 
import ToolsImg14 from '../assets/Images/IG.png' 
import ToolsImg15 from '../assets/Images/Titok.png' ;
import './Home.css'
//import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
import Marquee from "react-fast-marquee";

const Home = () => {

 const [toggleState, setToggleState] = useState(0);
 const toggleTab =(index)=>{
   if(index === toggleState){
        setToggleState(0)
   }else{
      setToggleState(index)
   }
 }
 


    return (

         
    

        
        <div>
      
          
         {/*<ScrollToTop smooth style={{ backgroundColor:"red",borderRadius:'40px',width:"50px" }} svgPath=''/>*/}
      
            {/* <!-- Landing Imgs --> */}
          <div>
            <div className="aj-img ">
            <div id="carouselExampleImgsOnly" class="carousel img carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
    <div class="carousel-item active" >
            
                  <img src={ImgImg1} class="d-block w-100"
                        alt="web development company near me" />

                    <div className="index-banner-section ">
                        <div className="col-md-12 col-sm-12 textContainer">
                            <h5 className="banner">CUTTING EDGE <br/> DIGITAL SOLUTIONS</h5>
                            <p className="banner-p2">within reach</p>
                            <p className="banner-p1">discover the fastest, <br /> most effective way <br /> to get experts for your needs </p>
                            <div className="cont-banner-buttons mt-4">
                                <a href="order" className="aj-request hvr-bounce-to-right  mr-3">REQUEST A QUOTE</a>
                                <a href="contact" className="aj-contact hvr-bounce-to-right  ">LET'S TALK</a>
                  
                        </div>
                    </div>
                </div>
                </div>
                
                <div class="carousel-item" >
             
                    <img src={ImgImg2} class="d-block w-100" alt="web development company in nigeria" />
                    <div className="index-banner-section">
                        <div className="col-md-12 col-sm-12">
                            <h5 className="banner">CUTTING EDGE <br /> DIGITAL SOLUTIONS</h5>
                            <p className="banner-p2">within reach</p>
                            <p className="banner-p1">discover the fastest, <br /> most effective way <br /> to get experts for your needs </p>
                            <div className="cont-banner-buttons mt-4">
                                <a href="order" className="aj-request hvr-bounce-to-right  mr-3">REQUEST A QUOTE</a>
                                <a href="contact" className="aj-contact hvr-bounce-to-right  ">LET'S TALK</a>
                         
                        </div>
                    </div>
                </div>
                </div>
                <div class="carousel-item">
        <img src={ImgImg3} class="d-block w-100"
                        alt="web development company near me" />

                    <div className="index-banner-section">
                        <div className="col-md-12 col-sm-12">
                            <h5 className="banner">CUTTING EDGE <br /> DIGITAL SOLUTIONS</h5>
                            <p className="banner-p2">within reach</p>
                            <p className="banner-p1">discover the fastest, <br /> most effective way <br /> to get experts for your needs </p>
                            <div className="cont-banner-buttons mt-4">
                                <a href="order" className="aj-request hvr-bounce-to-right mr-3">REQUEST A QUOTE</a>
                                <a href="contact" className="aj-contact hvr-bounce-to-right  ">LET'S TALK</a>
                           
                        </div>
                    </div>
                </div>
</div>
<div class="carousel-item">
              
                    <img src={ImgImg4} class="d-block w-100" alt="web development company in nigeria" />
                    <div className="index-banner-section">
                        <div className="col-md-12 col-sm-12">
                            <h5 className="banner mb-4">CUTTING EDGE <br /> DIGITAL SOLUTIONS</h5>
                            <p className="banner-p2">within reach</p>
                            <p className="banner-p1">discover the fastest, <br /> most effective way <br /> to get experts for your needs </p>
                            <div className="cont-banner-buttons mt-4">
                                <a href="order" className="aj-request hvr-bounce-to-right  mr-3">REQUEST A QUOTE</a>
                                <a href="contact" className="aj-contact hvr-bounce-to-right  ">LET'S TALK</a>
                           
                        </div>
                    </div>
                </div>

            </div>
            </div>
            </div>
           </div>
          </div>





      







          {/* <!-- Landing Imgs --> */}


          {/* <!-- Preloader --> */}
          {/* <div className="preloader">
            <div className="loader">
                <div className="loader__figure"></div>
                <p className="loader__label">Tenplus Digital Labs</p>
            </div>
          </div> */}
          {/* <!-- preloader --> */}



          {/* <!-- Our Mission --> */}

            <div className="container my-3 py-4  our-mission-box">
                <div className="row">
    
                    <div className="col-md-5 offset-md-1  wow animate__fadeInLeft" data-wow-duration=".5s" data-wow-delay="0s" >
                    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeInLeft">
                        <h2 className="index-service">The Best Services at Affordable Prices</h2>   
                            <div className="mt-4">
                                <p className="h-read-btn"> <a className="hvr-bounce-to-right" href="/portfolio">Read more</a></p>
                            </div>
                        </AnimationOnScroll>    
                    </div>
                    <div className="col-md-5 offset-md-1  wow animate__fadeInRight" data-wow-duration=".5s" data-wow-delay="0s">
                        
                        <div>
                        <AnimationOnScroll animateIn="animate__fadeInRight" animateOut="animate__fadeInRight">
                            <img src={ ImgImg5 } className="service-mission-img" alt="" />
                            </AnimationOnScroll>
                        
                        </div>

                    </div>

                
                </div>
            </div>

          {/* <!-- Our Vision and Mission --> */}

            <div className="cont-vision mr-3 ml-3">
                <div className="row">
                <div className="text-center col-md-6 wow animate__fadeInLeft" data-wow-duration=".5s" data-wow-delay="">
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeInLeft">
                    <div className="our-mission-cont ">
                                <h2 className="our_mision h-mission-h2 hvr-underline-from-center">OUR MISSION</h2>
                        
                            <h5 className="missonText"> To solve challenging performance problems for businesses
                                and organizations using reliable digital strategies.
                            To Promote African Development by encouraging Business Sector and Entrepreneurship in Africa.</h5>
                        
                    </div>
                        </AnimationOnScroll>    
                </div>

                <div className=" col-md-6  wow animate__fadeInRight" data-wow-duration=".5s" data-wow-delay="">
                <AnimationOnScroll animateIn="animate__fadeInRight" animateOut="animate__fadeInRight">
                <div className="our-vision-cont text-center">
                            <h2 className="our_vision h-mission-h2 hvr-underline-from-center r">OUR VISION</h2>
                        
                            <h5 className="missonText"> To be the best Innovative Company in Nigeria</h5>
                        
                </div>
                </AnimationOnScroll>
                </div>

            </div>
          </div>

          {/* <!-- services --> */}

          {/* <!-- service section md d --> */}

          <div className="container-fluid world-map-cont wow animate__fadeIn" data-wow-duration=".7s" data-wow-delay="0.1s">
          <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeIn">
          <div className="row">
            <div className="map_container col-md-8">
              <div className="service-circle-bg" style={{ width: `70%`,backgroundImage: `url(${WorldMap})`}}>
              {/*<img className="img-fluid img-thumbnail" alt="web development company near me"
                          src={WorldMap}/>*/}
                          
                <div className="row">
                       
                  <div className="col-md-12">
                    <div className={toggleState === 1 ? "click active-click cont-service-a" : "click cont-service-a"}>
                      <p className="hvr-forward"  
                        onClick = {() =>{
                        toggleTab(1)
                        }
                      }> 
                      <i className="fa fa-globe  pr-1"></i> Web Development <i className="fa fa-arrow-circle-right  pl-2"></i>  </p>
                    </div>
                  </div>

                  
                  <div className="col-md-6">
                    <div className="click cont-service-b">
                      <p className="hvr-forward" 
                        onClick = {() =>toggleTab(2)}> <i className="fab fa-app-store  pr-1"></i> Mobile App Development<i className="fa fa-arrow-circle-right  pl-2"></i>  </p>
                    </div>
                  </div>
                  
                  <div className="col-md-5 offset-md-1 ">
                    <div className="click cont-service-c  graphics">
                      <p className="hvr-forward"  
         onClick = {() =>toggleTab(3)}> <i className="fa fa-crop  pr-1"></i>  Graphics Design <i className="fa fa-arrow-circle-right  pl-2"></i>  </p>
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="click cont-service-d ">
                      <p className="hvr-forward" 
                      onClick = {() =>toggleTab(4)}> <i className="fa fa-print  pr-1"></i>  Prints Services <i className="fa fa-arrow-circle-right  pl-2"></i>  </p>
                    </div>
                  </div>

                  <div className="col-md-5 offset-md-2">
                    <div className="click cont-service-e ">
                      <p className="hvr-forward" 
                      onClick = {() =>toggleTab(5)}> <i className="fa fa-bullhorn  pr-1"></i>  Digital Marketing <i className="fa fa-arrow-circle-right  pl-2"></i>  </p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="click cont-service-f ">
                      <p className="hvr-forward" 
                      onClick = {() =>toggleTab(6)}> <i className="fa fa-book  pr-1"></i>  Project Management <i className="fa fa-arrow-circle-right  pl-2"></i>  </p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="cont-service-img ">
                      <img src={ImgImg6} className="  cont-service-img2" alt="" />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className=" active-click cont-service-g ">
                      <p className="hvr-forward"    
                       onClick = {() =>toggleTab(7)}>
                        <i className="fa fa-globe pr-1"></i>  Data Science <i className="fa fa-arrow-circle-right  pl-2"></i>  </p>
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className=" active-click cont-service-h ">
                      <p className="hvr-forward"
                          onClick = {() =>toggleTab(8)}>  <i className="fa fa-file-video-o  pr-1"></i>  Video Editing <i className="fa fa-arrow-circle-right  pl-2"></i>  </p>
                    </div>
                  </div>
            
                  <div className="col-md-5 offset-md-2">
                    <div className=" active-click cont-service-i ">
                      <p className="hvr-forward" 
                          onClick = {() =>toggleTab(9)}> <i className="fa fa-lock  pr-1"></i>  Cyber Security <i className="fa fa-arrow-circle-right  pl-2"></i>  </p>
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className=" active-click cont-service-j ">
                      <p className="hvr-forward" 
                          onClick = {() =>toggleTab(10)}> <i className="fa fa-bitcoin  pr-1"></i> Blockchain <i className="fa fa-arrow-circle-right  pl-2"></i>  </p>
                    </div>
                  </div>

                  <div className="col-md-5 offset-md-2">
                    <div className=" active-click cont-service-k ">
                      <p className="hvr-forward"
                          onClick = {() =>toggleTab(11)}> <i className="fa fa-calendar  pr-1"></i>  IT Consulting <i className="fa fa-arrow-circle-right  pl-2"></i>  </p>
                    </div>
                  </div>


                  <div className="col-md-12">
                    <div className=" active-click cont-service-l ">
                      <p className="hvr-forward" 
                          onClick = {() =>toggleTab(12)}> <i className="fa fa-desktop  pr-1"></i>  IT Training <i className="fa fa-arrow-circle-right  pl-2"></i>  </p>
                    </div>
                  
                  </div>
              


            
                </div>   
                
              </div>

              </div>

          <div className="content-tab col-md-4">
            <div className="Tenplus col-md-12">
              <div  className={toggleState  === 0 ? "webDevelopment" : "cont-right-service-div"} id="serve-div-a" >
                <h2 className="service-h2">
                  Tenplus Digital Labs Competency Platform
                </h2>
                <p className="service-par">Our competencies focus exclusively on in‑demand digital technologies and ensure workplace relevance.</p>
                <p className="serv-learn-m-btn"> <a className="hvr-bounce-to-right" href="/portfolio">Learn more <i className="fa fa-arrow-circle-right  pl-2"></i> </a></p>
              </div>
              <div className="cont-right-service-div1">
             
              <div className="">
              <div  className={toggleState  === 1 ? "webDevelopment" : "cont-right-service-div"} id="serve-div-a" > 
                <h2 className="service-h2">
                  
                  Web Development
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
                <p className="serv-learn-m-btn"> <a className="hvr-bounce-to-right" href="/portfolio">Learn more <i className="fa fa-arrow-circle-right  pl-2"></i> </a></p>
              </div>
              </div>

              <div  className={toggleState  === 2 ? "webDevelopment" : "cont-right-service-div"} id="serve-div-a" > 
                <h2 className="service-h2">
                  Mobile App Development
                </h2>
                  <p className="service-par">Users interact more with the web through mobile devices. Statistics of mobile users have grown
                    significantly. Therefore, businesses have evolved and have been optimized to reach more of these users.
                    <br />
                    Need a mobile app for your project?
                  </p>
                <p className="serv-learn-m-btn"> <a className="hvr-bounce-to-right" href="/portfolio">Learn more <i className="fa fa-arrow-circle-right  pl-2"></i> </a></p>
              </div>

              <div  className={toggleState  === 3 ? "webDevelopment" : "cont-right-service-div"} id="serve-div-a" > 
                <h2 className="service-h2">
                  Graphics Design
                </h2>
                  <p className="service-par">Create beautiful and interactive designs to communicate your brand, messages or ideas to your target audience. Graphics are used
                    in almost all aspects of our personal or business lives. <br /> Strategic designs grow audience engagement by over 70% over text as they are over easily
                    processed by the users’ brain. This is one of the benefits of visual communication <br />
                    Tell us your idea, and we give you the best design to represent your idea. Also need them printed? We offer the best quality
                    print service to our customers.
                  </p>
                <p className="serv-learn-m-btn"> <a className="hvr-bounce-to-right" href="/portfolio">Learn more <i className="fa fa-arrow-circle-right  pl-2"></i> </a></p>
              </div>

              <div  className={toggleState  === 4 ? "webDevelopment" : "cont-right-service-div"} id="serve-div-a" >
                <h2 className="service-h2">
                  Prints Services
                </h2>
                  <p className="service-par">
                    Use our Printing Services to complete your printing needs on time, with fast delivery. We produce and deliver quality results. We offer Delivery Services on Prints Nationwide.
                    <br />
                    Services: Brochure Printing, Corporate Printing, Full Corporate Branding, Signage, All forms of Customizing, and lots more.
                    <br />
                    Talk to us today, and tell us your demands. We will serve you the best.
                  </p>
                <p className="serv-learn-m-btn"> <a className="hvr-bounce-to-right" href="/portfolio">Learn more <i className="fa fa-arrow-circle-right  pl-2"></i> </a></p>
              </div>

              <div  className={toggleState  === 5 ? "webDevelopment" : "cont-right-service-div"} id="serve-div-a" >
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
                <p className="serv-learn-m-btn"> <a className="hvr-bounce-to-right" href="/portfolio">Learn more <i className="fa fa-arrow-circle-right  pl-2"></i> </a></p>
              </div>

              <div  className={toggleState  === 6 ? "webDevelopment" : "cont-right-service-div"} id="serve-div-a" >
                <h2 className="service-h2">
                  Project Management
                </h2>
                  <p className="service-par">
                      Lack of project management usually leads to failure. But your project should not fail.
                      <br />
                      We can help streamline your project management activities from pre-project planning to post-project review to get efficient results.
                  </p>
                <p className="serv-learn-m-btn"> <a className="hvr-bounce-to-right" href="/portfolio">Learn more <i className="fa fa-arrow-circle-right  pl-2"></i> </a></p>
              </div>

              <div  className={toggleState  === 7 ? "webDevelopment" : "cont-right-service-div"} id="serve-div-a" >
                <h2 className="service-h2">
                  Data Science and Machine Learning
                </h2>
                <p className="service-par">
                  Discover how data science, data analytics, machine learning and artificial intelligence are shaping the future.
                  We conduct thorough research into through computer technology, simulation and market management to predict successful outcomes.
                </p>
                <p className="serv-learn-m-btn"> <a className="hvr-bounce-to-right" href="/portfolio">Learn more <i className="fa fa-arrow-circle-right  pl-2"></i> </a></p>
              </div>

              <div  className={toggleState  === 8 ? "webDevelopment" : "cont-right-service-div"} id="serve-div-a" >
                <h2 className="service-h2">
                  Video Editing
                </h2>
                <p className="service-par">
                    Videos top the trend as the best marketing tool to deliver to your target audience. <br />
                    We capture, manipulate, arrange our videos to present efficiently to the needs of the target audience.
                    <br />
                    Let’s talk about your project. Order below to get a quote.
                </p>
                <p className="serv-learn-m-btn"> <a className="hvr-bounce-to-right" href="/portfolio">Learn more <i className="fa fa-arrow-circle-right  pl-2"></i> </a></p>
              </div>

              <div  className={toggleState  === 9 ? "webDevelopment" : "cont-right-service-div"} id="serve-div-a" > 
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
                <p className="serv-learn-m-btn"> <a className="hvr-bounce-to-right" href="/portfolio">Learn more <i className="fa fa-arrow-circle-right  pl-2"></i> </a></p>
              </div>

              <div  className={toggleState  === 10 ? "webDevelopment" : "cont-right-service-div"} id="serve-div-a" >
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
                <p className="serv-learn-m-btn"> <a className="hvr-bounce-to-right" href="/portfolio">Learn more <i className="fa fa-arrow-circle-right  pl-2"></i> </a></p>
              </div>

              <div  className={toggleState  === 11 ? "webDevelopment" : "cont-right-service-div"} id="serve-div-a" >
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
                <p className="serv-learn-m-btn"> <a className="hvr-bounce-to-right" href="/portfolio">Learn more <i className="fa fa-arrow-circle-right  pl-2"></i> </a></p>
              </div>

              <div  className={toggleState  === 12 ? "webDevelopment" : "cont-right-service-div"} id="serve-div-a" >
                <h2 className="service-h2">
                  IT Training
                </h2>
                <p className="service-par">
                  We build the next generation of expert in various skills in order to drive economies. <br />
                  We don’t just conduct trainings on the particular skill alone, we also expose our graduates
                  to various ways to either start their own businesses, apply properly for jobs, learn to
                  freelance properly, and we also outsource our best students to companies with high paying salaries for their skills.
                </p>
                <p className="serv-learn-m-btn"> <a className="hvr-bounce-to-right" href="/portfolio">Learn more <i className="fa fa-arrow-circle-right  pl-2"></i> </a></p>
              </div>
              </div>

            </div>
          </div>
          </div>
</AnimationOnScroll>
          </div>


          {/* <!-- service section md d --> */}


          {/* <!-- service section mobile --> */}
          
          <div className="service-only-mobile-d">

          <div className="container-fluid my-5 ">
              <div className="row" id="accordion">
              
              <div className="col-md-10 offset-md-1" >

                  <div className="demo">
                      <div className="accordion" id="accordionExample">
                        <div className="card">
                          <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                            <button type="button" class="btn btn-link" data-toggle="collapse" data-target="#collapseOne"><i className="fa fa-plus" style={{color: "#ED1C24;"}}></i>Web Development</button>
                            </h2>
                          </div>
                          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                              <p>
                                  The benefit of owning a website today cannot be overemphasized. Website have
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
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-5 offset-md-1">
                                  <a href="portfolio.html#service-p" className="service-tab-box hvr-bounce-to-right" style={{textDecoration: "none;"}}>Learn More</a>
                                </div>
                                <div className="col-md-5 offset-md-1">
                                  <a href="/order" className="service-tab-box hvr-bounce-to-right" style={{textDecoration: "none;"}}>Order
                                      Now</a>
                                </div>
                            </div>

                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="headingTwo">
                            <h2 className="mb-0">
                            <button type="button" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo"><i className="fa fa-plus"></i>Mobile App Development</button>
                            </h2>
                          </div>
      <div id="collapseTwo" class="collapse " aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="card-body">
                              <p>
                                Users interact more with the web through mobile devices. Statistics of mobile users have grown
                                significantly. Therefore, businesses have evolved and have been optimized to reach more of these users.
                                  <br />
                                Need a mobile app for your project?
                              </p>
                            </div>

                            <div className="row mb-3">
                              <div className="col-md-5 offset-md-1">
                                <a href="portfolio.html#service-p" className="service-tab-box hvr-bounce-to-right" style={{textDecoration: "none;"}}>Learn More</a>
                              </div>
                              <div className="col-md-5 offset-md-1">
                                <a href="order.html" className="service-tab-box hvr-bounce-to-right" style={{textDecoration: "none;"}}>Order
                                    Now</a>
                              </div>
                            </div>

                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="headingThree">
                            <h2 className="mb-0">
                              <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree"><i className="fa fa-plus" style={{color: "#ED1C24;"}} ></i>Graphics Design</button>
                            </h2>
                          </div>
                          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div className="card-body">
                              <p>

                                  Create beautiful and interactive designs
                                  to communicate your brand, messages or
                                  ideas to your target audience. Graphics
                                  are used
                                  in almost all aspects of our personal or
                                  business lives. Strategic designs grow
                                  audience engagement by over 70% over text
                                  as they are over easily
                                  processed by the users’ brain. This is one
                                  of the benefits of visual communication
                                  <br /> <br />
                                  Tell us your idea, and we give you the
                                  best design to represent your idea. Also
                                  need them printed? We offer the best
                                  quality.

                              </p>
                            </div>

                            <div className="row mb-3">
                              <div className="col-md-5 offset-md-1">
                                <a href="portfolio.html#service-p" className="service-tab-box hvr-bounce-to-right" style={{textDecoration: "none;"}}>Learn More</a>
                              </div>
                              <div className="col-md-5 offset-md-1">
                                <a href="/order" className="service-tab-box hvr-bounce-to-right" style={{textDecoration: "none;"}}>Order
                                    Now</a>
                              </div>
                            </div>

                          </div>
                        </div>

                        <div className="card">
                          <div className="card-header" id="heading-4">
                            <h2 className="mb-0">
                              <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-4"><i className="fa fa-plus"  ></i> Prints Services</button>
                            </h2>
                          </div>
                          <div id="collapse-4" className="collapse" aria-labelledby="heading-4" data-parent="#accordionExample">
                            <div className="card-body">
                              <p>

                                  Use our Printing Services to complete your
                                  printing needs on time, with fast
                                  delivery. We produce and deliver quality
                                  results. We offer Delivery Services on
                                  Prints Nationwide.
                                  <br />
                                  Services: Brochure Printing, Corporate
                                  Printing, Full Corporate Branding,
                                  Signage, All forms of Customizing, and
                                  lots more.
                                      <br />
                                  Talk to us today, and tell us your
                                  demands. We will serve you the best
                              </p>
                            </div>

                            <div className="row mb-3">
                              <div className="col-md-5 offset-md-1">
                                <a href="portfolio.html#service-p" className="service-tab-box hvr-bounce-to-right" style={{textDecoration: "none;"}}>Learn More</a>
                              </div>
                              <div className="col-md-5 offset-md-1">
                                <a href="/order" className="service-tab-box hvr-bounce-to-right" style={{textDecoration: "none;"}}>Order
                                    Now</a>
                              </div>
                          </div>

                          </div>
                        </div>

                        <div className="card">
                          <div className="card-header" id="heading-5">
                            <h2 className="mb-0">
                              <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-5"><i className="fa fa-plus" style={{color: "#ED1C24;"}} ></i> Digital Marketing</button>
                            </h2>
                          </div>
                          <div id="collapse-5" className="collapse" aria-labelledby="heading-5" data-parent="#accordionExample">
                            <div className="card-body">
                              <p>
                                  Digital Marketing has greatly evolved over the years.
                                  Most businesses are now conducted
                                  online and this has significantly
                                  increased the number of competition for
                                  sales growth. Properly planned marketing
                                  techniques are required to ensure
                                  profitability.
                                  <br />
                                  We ensure this through our contents
                                  (copywriting, graphics and videos), SEO, social media
                                  marketing techniques, display ads,
                                  and others.
                                  <br /><br />
                                  Do you have a Project? Tell us! We will ensure
                                  to deliver the result you desire.
                              </p>
                            </div>

                            <div className="row mb-3">
                              <div className="col-md-5 offset-md-1">
                                <a href="portfolio.html#service-p" className="service-tab-box hvr-bounce-to-right" style={{textDecoration: "none;"}}>Learn More</a>
                              </div>
                              <div className="col-md-5 offset-md-1">
                                <a href="/order" className="service-tab-box hvr-bounce-to-right" style={{textDecoration: "none;"}}>Order
                                    Now</a>
                              </div>
                          </div>

                          </div>
                        </div>

                        <div className="card">
                          <div className="card-header" id="heading-6">
                            <h2 className="mb-0">
                              <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-6"><i className="fa fa-plus"  ></i>Project Management</button>
                            </h2>
                          </div>
                          <div id="collapse-6" className="collapse" aria-labelledby="heading-6" data-parent="#accordionExample">
                            <div className="card-body">
                              <p>
                                  Lack of project management usually leads
                                  to failure. But your project should not
                                  fail.
                                  <br />
                                  We can help streamline your project
                                  management activities from pre-project
                                  planning to post-project review to get
                                  efficient results
                              </p>
                            </div>

                            <div className="row mb-3">
                              <div className="col-md-5 offset-md-1">
                                <a href="portfolio.html#service-p" className="service-tab-box hvr-bounce-to-right" style={{textDecoration: "none;"}}>Learn More</a>
                              </div>
                              <div className="col-md-5 offset-md-1">
                                <a href="/order" className="service-tab-box hvr-bounce-to-right" style={{textDecoration: "none;"}}>Order
                                    Now</a>
                              </div>
                            </div>

                          </div>
                        </div>

                        <div className="card">
                          <div className="card-header" id="heading-7">
                            <h2 className="mb-0">
                              <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-7"><i className="fa fa-plus" style={{color: "#ED1C24;"}} ></i>Data Sci. & Machine Learning</button>
                            </h2>
                          </div>
                          <div id="collapse-7" className="collapse" aria-labelledby="heading-7" data-parent="#accordionExample">
                            <div className="card-body">
                              <p>
                                  Discover how data science, data analytics,
                                  machine learning and artificial
                                  intelligence are shaping the future.
                                  <br />
                                  We conduct thorough research into
                                  computer technology, simulation and market
                                  management to predict successful outcomes.
                              </p>
                            </div>

                            <div className="row mb-3">
                              <div className="col-md-5 offset-md-1">
                                <a href="portfolio.html#service-p" className="service-tab-box hvr-bounce-to-right" style={{textDecoration: "none;"}}>Learn More</a>
                              </div>
                              <div className="col-md-5 offset-md-1">
                                <a href="/order" className="service-tab-box hvr-bounce-to-right" style={{textDecoration: "none;"}}>Order
                                    Now</a>
                              </div>
                            </div>

                          </div>
                        </div>

                        <div className="card">
                          <div className="card-header" id="heading-8">
                            <h2 className="mb-0">
                              <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-8"><i className="fa fa-plus"  ></i>Video Editing</button>
                            </h2>
                          </div>
                          <div id="collapse-8" className="collapse" aria-labelledby="heading-8" data-parent="#accordionExample">
                            <div className="card-body">
                              <p>
                                  Videos top the trend as the best marketing
                                  tool to deliver to your target audience.
                                  <br />
                                  We capture, manipulate, arrange our videos
                                  to present efficiently to the needs of the
                                  target audience.
                                  <br />
                                  Let’s talk about your project. Order below
                                  to get a quote.
                              </p>
                            </div>

                            <div className="row mb-3">
                              <div className="col-md-5 offset-md-1">
                                <a href="portfolio.html#service-p" className="service-tab-box hvr-bounce-to-right" style={{textDecoration: "none;"}}>Learn More</a>
                              </div>
                              <div className="col-md-5 offset-md-1">
                                <a href="/order" className="service-tab-box hvr-bounce-to-right" style={{textDecoration: "none;"}}>Order
                                    Now</a>
                              </div>
                            </div>

                          </div>
                        </div>

                        <div className="card">
                          <div className="card-header" id="heading-9">
                            <h2 className="mb-0">
                              <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-9"><i className="fa fa-plus" style={{color: "#ED1C24;"}} ></i>Cyber Security</button>
                            </h2>
                          </div>
                          <div id="collapse-9" className="collapse" aria-labelledby="heading-9" data-parent="#accordionExample">
                            <div className="card-body">
                              <p>
                                  We align Cyber Security with Digital
                                  Transformation: Protecting Global Networks,
                                  Digital Platforms, and your Most Valuable
                                  Enterprise Data across the World.
                                  </p>
                                  <p ><strong>We provide expert services on:</strong>
                                  <br /> <br />Secure Monitoring; <br />Compliance and Audit; <br /> Incidents Response; and
                                  <br /> Penetration Testing.  </p>
                            </div>

                            <div className="row mb-3">
                              <div className="col-md-5 offset-md-1">
                                <a href="portfolio.html#service-p" className="service-tab-box hvr-bounce-to-right" style={{textDecoration: "none;"}}>Learn More</a>
                              </div>
                              <div className="col-md-5 offset-md-1">
                                <a href="/order" className="service-tab-box hvr-bounce-to-right" style={{textDecoration: "none;"}}>Order
                                    Now</a>
                              </div>
                            </div>

                          </div>
                        </div>

                        <div className="card">
                          <div className="card-header" id="heading-10">
                            <h2 className="mb-0">
                              <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-10"><i className="fa fa-plus" ></i>Blockchain</button>
                            </h2>
                          </div>
                          <div id="collapse-10" className="collapse" aria-labelledby="heading-10" data-parent="#accordionExample">
                            <div className="card-body">
                              <p>
                                  Right now, visionary companies are coming together to transform the way their industries
                                  work with the help of Blockchain. Enable trusted data exchange and workflow beyond the
                                  boundaries with distributed ledger technology and Blockchain.
                                  <br />
                                  <br />
                                  We develop and provide blockchain technology
                                  services that help you
                                  materialize your ideas into sustainable
                                  business models.
                              </p>
                            </div>

                            <div className="row mb-3">
                              <div className="col-md-5 offset-md-1">
                                <a href="portfolio.html#service-p" className="service-tab-box hvr-bounce-to-right" style={{textDecoration: "none;"}}>Learn More</a>
                              </div>
                              <div className="col-md-5 offset-md-1">
                                <a href="/order" className="service-tab-box hvr-bounce-to-right" style={{textDecoration: "none;"}}>Order
                                    Now</a>
                              </div>
                          </div>

                          </div>
                        </div>

                        <div className="card">
                          <div className="card-header" id="heading-11">
                            <h2 className="mb-0">
                              <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-11"><i className="fa fa-plus" style={{color: "#ED1C24;"}} ></i> IT Consulting</button>
                            </h2>
                          </div>
                          <div id="collapse-11" className="collapse" aria-labelledby="heading-11" data-parent="#accordionExample">
                            <div className="card-body">
                              <p>We give expert Information Technology related advices to businesses and
                                  organizations on how best to use Information Technology in achieving or
                                  promoting their objectives.
                                  <br /> <br />
                                  Start a project and we shall schedule a session for you.</p>
                            </div>

                            <div className="row mb-3">
                              <div className="col-md-5 offset-md-1">
                                <a href="portfolio.html#service-p" className="service-tab-box hvr-bounce-to-right" style={{textDecoration: "none;"}}>Learn More</a>
                              </div>
                              <div className="col-md-5 offset-md-1">
                                <a href="/order" className="service-tab-box hvr-bounce-to-right" style={{textDecoration: "none;"}}>Order
                                    Now</a>
                              </div>
                            </div>

                          </div>
                        </div>

                        <div className="card">
                          <div className="card-header" id="heading-12">
                            <h2 className="mb-0">
                              <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-12"><i className="fa fa-plus"  ></i>IT Training</button>
                            </h2>
                          </div>
                          <div id="collapse-12" className="collapse" aria-labelledby="heading-12" data-parent="#accordionExample">
                            <div className="card-body">
                              <p>
                                  We build the next generation of expert in various skills in order to drive economies.
                                  <br /> <br />
                                  We don’t just conduct trainings on the particular skill alone, we also expose our graduates
                                  to various ways to either start their own businesses, apply properly for jobs, learn to freelance
                                  properly, and we also outsource our best students to companies with high paying salaries for their skills.
                              </p>
                            </div>

                            <div className="row mb-3">
                              <div className="col-md-5 offset-md-1">
                                <a href="portfolio.html#service-p" className="service-tab-box hvr-bounce-to-right" style={{textDecoration: "none;"}}>Learn More</a>
                              </div>
                              <div className="col-md-5 offset-md-1">
                                <a href="/order" className="service-tab-box hvr-bounce-to-right" style={{textDecoration: "none;"}}>Order
                                    Now</a>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>

              </div>

              
            </div>
          </div>
          </div>

          {/* <!-- service end for mobile --> */}

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
                    <a href="order.html" className="talk-to-box hvr-bounce-to-right wow animate__fadeInUp" data-wow-duration="2s" >Talk to Us</a>    
                </div>

            </div>

            {/* <!-- project --> */}

              {/* <!-- partners --> */}
             
              <div className="container-fluid">
                <div className="text-center mt-5">
                    <h2 className="why-you-choose hvr-underline-from-center" >Our Tools</h2>
                </div>
                <div class='container-fluid'>
                
                <section className="customer-logos imgr">
                  <Marquee style={{backgroundColor:"white",speed:"0.9s"}}> 
                    <div className="logo_imgr">
                          <img className="img1" alt="web development company near me"src={ToolsImg1} />
                    </div>
                   <div className="logo_imgr">
                     <img className="img1" alt="web development company near me"  src={ToolsImg2} />
                    </div>
                    <div className="logo_imgr">
                      <img className="img1" alt="web development company near me"  src={ToolsImg3} />
                     </div>
                    <div className="logo_imgr">
                      <img className="img1" alt="web development company near me"  src={ToolsImg4} />
                    </div>
                    <div className="logo_imgr">
                      <img className="img1" alt="digital marketing agency in nigeria" src={ToolsImg5} />
                    </div>
                    <div className="logo_imgr">
                      <img className="img1" alt="digital marketing agency in nigeria" src={ToolsImg6} />
                   </div>
                    <div className="logo_imgr">
                      <img className="img1" alt="software engineer in nigeria"  src={ToolsImg7} />
                    </div>
                    <div className="logo_imgr">
                      <img className="img1" alt="software engineer in nigeria"   src={ToolsImg8} />
                    </div>
                   
                    <div className="logo_imgr">
                      <img className="img1" alt="digital marketing agency in nigeria"src={ToolsImg9} />
                    </div>
                    <div className="logo_imgr">
                      <img className="img1" alt="digital marketing software companies" src={ToolsImg10} />
                    </div>
                    <div className="logo_imgr">
                      <img className="img1" alt="digital marketing software companies" src={ToolsImg11} />
                    </div>
                    <div className="logo_imgr">
                      <img className="img1" alt="digital marketing software companies" src={ToolsImg12} />
                    </div>
                    <div className="logo_imgr">
                      <img className="img1" alt="digital marketing software companies" src={ToolsImg13} />
                    </div>
                    <div className="logo_imgr">
                     <img className="img1" alt="digital marketing agency in nigeria" src={ToolsImg14} />
                    </div>
                    <div className="logo_imgr">
                      <img className="img1" alt="digital marketing agency in nigeria"src={ToolsImg15} />
                    </div>
                       </Marquee>                   
                </section>
               
            </div>
            </div>
            {/* <!-- partners --> */}


            {/* <!-- cookies --> */}
            <div className="cookie-bar-ml">
                <div className="row">
                    <div className="col-md-3 col-12 cookie-bar">
            
                        <div className="cookie-notice container">
                            <p className="cookie-para">We use third-party cookies to improve your site experience, perform analytics and enhance our services.
                                                  By clicking <span className="Iconsent"> “I CONSENT” ,</span>  you agree to the storing of cookies on your device.</p>
                            <p className="cookie-para"> Read our updated <a className="cookie-privacy" href="privacy.html">Privacy & Cookies Notice</a>  to learn more.</p>
                            <a href="javascript:;" className="cookie-btn">I CONSENT</a>
                        </div>
                    </div>
                    <div className="col-md-7 col-12">
                        
                    </div>
                </div>
            </div>
      

            {/* <!-- cookies end --> */}
        </div>
      
    );
  
}


 
export default Home;