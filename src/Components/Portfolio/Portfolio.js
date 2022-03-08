import React,{useEffect, useState}  from "react";
import PortfolioImg from '../assets/Images/Printing-Services.png'
import PortfolioImg1 from '../assets/Images/grace-school.png'
import PortfolioImg2 from '../assets/Images/carfax.png'
import PortfolioImg3 from '../assets/Images/OCH.png'
import PortfolioImg4 from '../assets/Images/Lakecoast-App.png'
import PortfolioImg5 from '../assets/Images/Tencab.png'
import PortfolioImg6 from '../assets/Images/Lakecoast-App.png'
import PortfolioImg7 from '../assets/Images/Flyer.png'
import PortfolioImg8 from '../assets/Images/Logo-graphics.png'
import PortfolioImg9 from '../assets/Images/Magazine.png'
import PortfolioImg10 from '../assets/Images/Bill-board.png'
import PortfolioImg11 from '../assets/Images/Calendar.png'
import PortfolioImg12 from '../assets/Images/Digital.png'
import PortfolioImg13 from '../assets/Images/Frame-printing.png'
import PortfolioImg14 from '../assets/Images/Bill-board.png'
import PortfolioImg15 from '../assets/Images/Digital.png'
import PortfolioImg16 from '../assets/Images/CAR.png'
import PortfolioImg17 from '../assets/Images/Quick-Health.png'
import PortfolioImg18 from '../assets/Images/ORE.png'
import PortfolioImg19 from '../assets/Images/CAR.png'
import PortfolioImg20 from '../assets/Images/GLAM.png'
import PortfolioImg21 from '../assets/Images/Quick-Health.png'
import PortfolioImg22 from '../assets/Images/consulting-logo.png'
import PortfolioImg23 from '../assets/Images/consulting.jpg'
import PortfolioImg24 from '../assets/Images/copywriting.jpg'
import PortfolioImg25 from '../assets/Images/WHATS.png'
import PortfolioImg26 from '../assets/Images/COurses.png'
import PortfolioImg27 from '../assets/Images/kid-learning.jpeg'
import './Portfolio.css'

export default function Portfolio() {
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
                            <div className="col-md-12 bg-img-port" style={{backgroundImage: `url(${PortfolioImg})`}}>
                                <div className="">
                                    <div className=" text-center text-uppercase ">
                                        <h2 className="banner-h2-text hvr-underline-from-center">Portfolio</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </header>

    <div className="container-fluid">
        <div className="row">
            <div className="col-md-10 offset-md-1 mt-5 cont-best-quality wow animate__fadeInLeft" data-wow-duration=".5s">
                <h1>We Give The Best Quality, Start</h1>
                <h1>Your Project Now!</h1>
                  
             <div className="mt-4">
                <p className="more-info-port"> <strong>NOTE:</strong> These are few of our portfolios, due to</p>
                <p className="more-info-ports">privacy agreement with our clients.</p>
            </div>
                
            </div>
        </div>
    </div>

   

    <div className="container mt-3 wow animate__fadeIn" data-wow-duration="3s" data-wow-delay="0.1s">

        <div className="dropdown-on-sm">
            <div className="row">
                <div className="col-md-8 offset-md-1" > 
                    <label for="design">Select the service from the drop down</label>
                    <select className="form-control mt-3" id="design101">
                        <option selected>Select</option>
                        <option value="web">Web Development</option>
                        <option value="app">Mobile App Development</option>
                        <option value="graphics">Graphics Design</option>
                        <option value="printing">Printing Services</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="ai">Data Sci. And Machine Learn</option>
                        <option value="project">Project Management</option>
                        <option value="consulting">IT Consulting</option>
                        <option value="training">IT Training</option>
                    </select>
              </div>
         </div>
        </div>
     
        <div className="row">
                <div className="col-md-1">    
                </div>
                <div className="col-md-1 show-all-img">
                       
                </div>
                <div className={`${showBox === 'webDev' && "Serv_active"} serv_button col-md-12`} onClick={()=>setShowBoxFunc('webDev')}> 
                <div className="col-md-2 show-web">
                    <p className="portfolio-box hvr-outline-in " style={{width: "100%;"}}>Web Development</p>    
                </div>
                </div>
                <div className="col-md-3 show-app">
                    <p className="portfolio-box hvr-outline-in  " style={{width: "100%;"}} >Mobile App Development</p>    
                </div>
                <div className="col-md-2 show-graphics">
                    <p className="portfolio-box hvr-outline-in  " style={{width: "100%;"}} >Graphics Design</p>    
                </div>
                <div className="col-md-2 show-print">
                    <p className="portfolio-box hvr-outline-in  " style={{width: "100%;"}} >Printing Services</p>    
                </div> 
                <div className="col-md-1">    
                </div> 

                <div className="col-md-2 show-market">
                    <p className="portfolio-box hvr-outline-in " style={{width: "100%;"}} >Digital Marketing</p>    
                </div>  
                
                <div className="col-md-3 show-ai">
                    <p className="portfolio-box hvr-outline-in " style={{width: "100%;"}} >Data Sci. And Machine Learn.</p>    
                </div>
                <div className="col-md-3 show-project">
                    <p className="portfolio-box hvr-outline-in " style={{width: "100%;"}} >Project Management</p>    
                </div>
                <div className="col-md-2 show-consult">
                    <p className="portfolio-box hvr-outline-in " style={{width: "100%;"}} >IT Consulting</p>    
                </div>
                <div className="col-md-2 show-training">
                    <p className="portfolio-box hvr-outline-in " style={{width: "100%;"}} >IT Training</p>    
                </div>
        </div>

    </div>


     <div className="container wow animate__fadeIn" data-wow-duration="3s" data-wow-delay="0.1s">

            {/* <!-- popup modal --> */}

            {/* <!-- The Modal --> */}
            <div id="myModal" className="modal">

                {/* <!-- The Close Button --> */}
                <span className="close">&times;</span>
            
                {/* <!-- Modal Content (The Image) --> */}
                <img className="modal-content" id="img /01" />
            
                {/* <!-- Modal Caption (Image Text) --> */}
                
                <div id="caption"></div>
            </div> 

            <div className="row" id="myList">
                <div className="web_picture">
                <div className={showBox === 'webDev'&& "display-none"}>
                <div className="col-md-4 to-list-w show-pox  mt-5">       
                    <img src={PortfolioImg1} id="MyImg"  className="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="Web Design" />  
                    <div className="text-center">
                        <p>Web Development</p>
                    </div>
                
                </div>
                <div className="col-md-4 to-list-w show-pox  mt-5 ">
                    <img src={PortfolioImg2} id="MyImg2"  className="portfolio-img img-responsive hvr-grow " height="200px" width="90%" alt="Web Design" />   
                     <div className="text-center">
                        <p>Web Development</p>
                    </div> 
                </div>
                <div className="col-md-4 to-list-w show-pox  mt-5 ">
                    <img src={PortfolioImg3} id="MyImg3" className="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="Web Design" />   
                     <div className="text-center">
                        <p>Web Development</p>
                    </div> 
                </div>
                </div>
                </div>
                <div className={showBox === 'webDev' ? "display-block" : "display-none" }>
                <div className="col-md-4 to-list-ap show-pox  mt-5 list-hide">
                    <img src={PortfolioImg4} id="MyImg4" className="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="Mobile App" />
                     <div className="text-center">
                        <p>Mobile App Dev.</p>
                    </div> 
                </div>
                <div className="col-md-4 to-list-ap show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg5} id="MyImg5" className="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="Mobile App" />   
                     <div className="text-center">
                        <p>Mobile App Dev.</p>
                    </div> 
                </div>
                <div className="col-md-4 to-list-ap show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg6} id="MyImg6" className="portfolio-img img-responsive hvr-grow " height="200px" width="90%"   alt="Mobile App" />   
                     <div className="text-center">
                        <p>Mobile App Dev.</p>
                    </div> 
                </div>
                </div>
            
                <div className="col-md-4 to-list-g show-pox  mt-5 list-hide">
                    <img src={PortfolioImg7} id="MyImg7" className="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="Graphics" />   
                     <div className="text-center">
                        <p>Logo Design</p>
                    </div> 
                </div>
                <div className="col-md-4 to-list-g show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg8} id="MyImg8" className="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="Graphics" />   
                     <div className="text-center">
                        <p>Flyer</p>
                    </div> 
                </div>
                <div className="col-md-4 to-list-g show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg9} id="MyImg9" className="portfolio-img img-responsive hvr-grow " height="200px" width="90%"   alt="Graphics" />   
                     <div className="text-center">
                        <p>Billboard</p>
                    </div> 
                </div>

                <div className="col-md-4 to-list-p show-pox  mt-5 list-hide">
                    <img src={PortfolioImg10}  id="MyImg10" className="portfolio-img img-responsive hvr-grow" height="200px" width="90%"  alt="Printing" />   
                     <div className="text-center">
                        <p>Magazine</p>
                    </div> 
                </div>
                <div className="col-md-4 to-list-p show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg11} id="MyImg11" className="portfolio-img img-responsive hvr-grow " height="200px" width="90%" alt="Printing" />   
                     <div className="text-center">
                        <p>Calendar</p>
                    </div> 
                </div>
                <div className="col-md-4 to-list-p show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg12} id="MyImg12" className="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="Printing" />   
                     <div className="text-center">
                        <p>Frame</p>
                    </div> 
                </div>


                <div className="col-md-4 to-list-dig show-pox  mt-5 list-hide">
                    <img src={PortfolioImg13} id="MyImg13" className="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="Marketing" />   
                     <div className="text-center">
                        <p>Digital Marketing</p>
                    </div> 
                </div>
                <div className="col-md-4 to-list-dig show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg14} id="MyImg14" className="portfolio-img img-responsive hvr-grow " height="200px" width="90%" alt="Marketing" />   
                     <div className="text-center">
                        <p>Copywriting</p>
                    </div> 
                </div>
                <div className="col-md-4 to-list-dig show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg15} id="MyImg15" className="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="Marketing" />   
                     <div className="text-center">
                        <p>SEO</p>
                    </div> 
                </div>


                <div className="col-md-4 to-list-ai show-pox  mt-5 list-hide">
                    <img src={PortfolioImg16} id="MyImg16" className="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="AI" />   
                     <div className="text-center">
                        <p>AI</p>
                    </div> 
                </div>
                <div className="col-md-4 to-list-ai show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg17} id="MyImg17" className="portfolio-img img-responsive hvr-grow " height="200px" width="90%" alt="AI" />   
                     <div className="text-center">
                        <p>Machine Learning</p>
                    </div> 
                </div>
                <div className="col-md-4 to-list-ai show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg18} id="MyImg18" className="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="AI" />   
                     <div className="text-center">
                        <p>AI</p>
                    </div> 
                </div>


                <div className="col-md-4 to-list-proj show-pox  mt-5 list-hide">
                    <img src={PortfolioImg19} id="MyImg19" className="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="Project" />   
                     <div className="text-center">
                        <p>Project Management</p>
                    </div> 
                </div>
                <div className="col-md-4 to-list-proj show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg20} id="MyImg20" className="portfolio-img img-responsive hvr-grow " height="200px" width="90%"alt="Project" />   
                     <div className="text-center">
                        <p>Project Management</p>
                    </div> 
                </div>
                <div className="col-md-4 to-list-proj show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg21} id="MyImg21" className="portfolio-img img-responsive hvr-grow " height="200px" width="90%" alt="Project" />   
                     <div className="text-center">
                        <p>Project Management</p>
                    </div> 
                </div>


                <div className="col-md-4 to-list-c show-pox  mt-5 list-hide">
                    <img src={PortfolioImg22} id="MyImg22" className="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="IT Consulting" />   
                     <div className="text-center">
                        <p>IT Consulting</p>
                    </div> 
                </div>
                <div className="col-md-4 to-list-c show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg23} id="MyImg23" className="portfolio-img img-responsive hvr-grow " height="200px" width="90%" alt="IT Consulting" />   
                     <div className="text-center">
                        <p>IT Consulting</p>
                    </div> 
                </div>
                <div className="col-md-4 to-list-c show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg24} id="MyImg24" className="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="IT Consulting" />   
                     <div className="text-center">
                        <p>IT Consulting</p>
                    </div> 
                </div>

                <div className="col-md-4 to-list-t show-pox  mt-5 list-hide">
                    <img src={PortfolioImg25} id="MyImg25" className="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="IT Training" />   
                     <div className="text-center">
                        <p>IT Training</p>
                    </div> 
                </div>
                <div className="col-md-4 to-list-t show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg26} id="MyImg26" className="portfolio-img img-responsive hvr-grow " height="200px" width="90%" alt="IT Training" />   
                     <div className="text-center">
                        <p>IT Training</p>
                    </div> 
                </div>
                <div className="col-md-4 to-list-t show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg27} id="MyImg27" className="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="IT Training" />   
                     <div className="text-center">
                        <p>IT Training</p>
                    </div> 
                </div>
                

                
            </div>
           

            <div className="mt-5">
                    <div className="text-center">
                        <p className="see-more-box hvr-bounce-to-right show-all-img mr-2" id="loadMore">Show More</p>    
                        <p className="see-more-box hvr-bounce-to-right" id="showLess">Show less</p>
                    </div>
            </div>

           

   

    </div> 

    <div className="cont-mind-project text-center">

        <h4 className="h4-project-port wow animate__fadeInLeft" data-wow-duration=".5s"> Have Any Project in Mind </h4>
        <p className="p-project-port wow animate__fadeInRight" data-wow-duration=".5s">Get in Touch with Us Today</p>

        <div className="text-center mt-4">
            <a href="order.html" className="talk-to-box hvr-bounce-to-right wow animate__fadeInUp" data-wow-duration="2s" >Talk to Us</a>    
        </div>

    </div>
            
        </div>
    )
}
