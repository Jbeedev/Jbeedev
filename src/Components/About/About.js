import React,{useState} from 'react'
import AboutImg from '../assets/Images/Printing-Services.png'
import AboutImg1 from '../assets/Images/about-us-1 copy.jpg'
import AboutImg2 from '../assets/Images/customer-love.jpg'
import AboutImg3 from '../assets/Images/CEO_PIC_2.png'
import AboutImg4 from '../assets/Images/Ajibola.png'
import AboutImg5 from '../assets/Images/TENPLUS-LABAKE.png'
import AboutImg6 from '../assets/Images/ahmad.png'
import AboutImg7 from '../assets/Images/Taofeeq.png'
import AboutImg8 from '../assets/Images/LIZZY_PIC.png'
import AboutImg9 from '../assets/Images/Faseeki-Friday.png'
import AboutImg10 from '../assets/Images/Kutashi.png'
import AboutImg11 from '../assets/Images/TENPLUS-LABAKE.png'
import AboutImg12 from '../assets/Images/TENPLUS-LABAKE.png'
import AboutImg13 from '../assets/Images/What-we-do-tenplus.png'
import AboutImg14 from '../assets/Images/What-we-do-tenplus.png'
import './About.css'
export default function About() {

    const [isReadMore, setIsReadMore] = useState(false);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
   
      };



    return (
        <div>

<header>
        <div className="container-fluid" style={{maxWidth: "100%;"}}>
            <div className="row">
                <div className="col-md-12 bg-img-about" style={{backgroundImage:`url(${AboutImg})`}}>
                    <div className="">
                        <div className=" text-center text-uppercase ">
                            <h2 className="banner-h2-text hvr-underline-from-center">About Us</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</header>

    {/* <!-- Our Mission --> */}

    <div className="container-fluid mt-5 mb-5">
        <div className="row">
            <div className='text-center'>
        <h2 className="about-mission mt-3 hvr-underline-from-center">Our Mission</h2>
        </div>
            <div className="col-md-4 offset-md-2 wow animate__fadeInLeft" data-wow-duration=".5s" >
               
            
                    <p className="mission-qoute mr-3 ml-3">
                        To solve challenging performance problems for business and
                        organization using reliable digital strategies.
                        To Promote African Development by encouraging Business Sector and
                        Entrepreneurship in Africa.
                    </p>

                    <div className=" text-center mt-4">
                   
                        <p className="join-d-team-btn"> <a className="hvr-bounce-to-right" href="contact.html">Join the Team</a></p>
                    </div>
                   
            
                       
            </div>
            <div className="col-md-5 offset-md-1 mt-3  wow animate__fadeInRight" data-wow-duration=".5s">
                
                <div>
                <div className="logo_imgr mr-3 ml-3">   
                 <img className="img" alt="web development company near me" src={AboutImg1}   className='sizing img-fluid img-responsive image hvr-grow '/>
                 </div>

                  {/*  <img src="assets/img/about-us-1.jpg" className="abt-mission-img" alt="" />*/}
                   
                </div>

            </div>

           
        </div>
    </div>

    {/* <!-- Our Customer --> */}

    <div className="container-fluid mt-3 mr-3 ml-3 mb-5 customer-cont">
        <div className="container">
         <div className="row">
         <div className='text-center'>

<h2 className="customer-h2-content pb-5 hvr-underline-from-center">Our Customer</h2>
</div>
            <div className="col-md-6 mt-3 wow animate__fadeInLeft" data-wow-duration=".5s">
                
                <div>

                <div className="logo_imgr">    <img className="img" alt="web development company near me"
                          src={AboutImg2}   className='sizing img-fluid mr-3 img-responsive image hvr-grow'/></div>
                   
                </div>

            </div>

            <div className="col-md-6 wow animate__fadeInRight" data-wow-duration=".5s" >
               
                <div className='ml-4'>
                    <p className="customer-qoute ">
                        We do what we do in order to deliver compelling
                        and efficient digital
                        solutions, remarkable experiences, and
                        outstanding results for our clients to promote
                        their personal or business growth.
                    </p>

                    <div className="text-center mt-5 ">
                        <p className="join-d-team-btn"> <a className="hvr-bounce-to-right" href="">Join the Team</a></p>
                    </div>
                   
                </div>

            </div>
        </div>

        </div>
    </div>

    {/* <!-- Our Team --> */}

    <div className="container-fluid mt-3">
        
         <div className="row">

                    <div className="col-12 text-center wow animate__fadeInDown" data-wow-duration=".5s">
                        <h2 className="team-h2-content my-2 hvr-underline-from-center">Our Team</h2>
                    </div>
                
                    <div className="col-md-5 offset-md-1 mt-3 wow animate__fadeInLeft" data-wow-duration=".5s">
                        <h2 className="founder-content hvr-underline-from-center">Founder's Note</h2>
                        <div>
                            <p className="lead-qoute">
                                    Businesses must work together to bridge poverty and underdevelopment,
                                    and this is more important now, more than ever. Something greater
                                    tend to be achieved through collective efforts. <br />
                                    There are countless benefits in exploring digital skills or solutions to our lives and businesses.
                                    <br /> Taking advantage of these can drive an economy to greater success. And taking these opportunities in a large number can
                                    cause rapid increase in the development of the society. <br /> <span className="read-more-hide-desk" style={{fontFamily: "poppins;"}}> A few number of successful companies cannot do it all alone.
                                    We are more about trying our best to increase the number of successful businesses, and also find ways to increase the
                                    gross income of individuals, to be able to have greater positive impact to our society.
                                    </span><p className="me3 read-more-btn hvr-bounce-to-right" id="readMore">read more</p>
                            </p>   
                        </div>
                    </div>

                    <div className="col-md-5 offset-md-1 mt-3 ">
                        <div className="wow animate__fadeInRight" data-wow-duration=".5s">
                        <div className="logo_imgr"><img className="img" alt="web development company near me"
                          src={AboutImg3}   className='sizing3 img-fluid img-responsive image hvr-grow'/></div>
                        </div>
                    </div>
          </div>
        </div>

    {/* <!-- team --> */}

    <div className="container wow animate__fadeIn" data-wow-duration="2s">
        <div className="row mt-5 team-row">
            <div className='col-md-6  col-xl-4  mb-3'>
                <div className='container-fluid relative mb-5 mt-5'>
                    <div className="about-team-card shadow  mt-n5">
                        <div className='contain w-100 h-75'>
                        <img src={AboutImg4} alt="web development company near me"
                             className='sizing4 img-fluid img-responsive image hvr-grow'/>
                                 
                            <div className='overlay'>
                                <div className='about-text p-2'>
                                    Surely, at the beginning you will fail, people will mock you. But don't
                                    loose hope because if u don't fail then you are not even trying. Soon, you
                                    will become the best at it
                                </div>
                            </div>
                        </div>
                        <h4 className='role-name py-2 px-3'>Ajibade Ajibola</h4>
                        <p className="role-tittle ">Cyber Security Expert</p>
                    </div>
                </div>
            </div>

            <div className='col-md-6 col-xl-4  mb-3'>
                <div className='container-fluid relative mb-5 mt-5'>
                    <div className="about-team-card shadow  mt-n5">
                        <div className='contain w-100 h-75'>
                        <img className="img" alt="web development company near me"
                          src={AboutImg5}   className='sizing5 img-fluid img-responsive image hvr-grow'/>
                            <div className='overlay'>
                                <div className='about-text p-2'>
                                    Experience is the name everyone gives to their mistakes. In the end, you get
                                    better. Always put in efforts to solving a problem.
                                </div>
                            </div>
                        </div>
                        <h4 className='role-name py-2 px-3'>Ladele Omolabeke</h4>
                        <p className="role-tittle ">Chief Marketing Officer</p>
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-xl-4  mb-3'>
                <div className='container-fluid relative mb-5 mt-5'>
                    <div className="about-team-card shadow  mt-n5">
                        <div className='contain w-100 h-75'>
                        <img className="img" alt="web development company near me"
                          src={AboutImg6}   className='sizing6 img-fluid img-responsive image hvr-grow'/>
                            <div className='overlay'>
                                <div className='about-text p-2'>
                                    Debugging can be frustrating and stressful but the feeling of satisfaction
                                    after solving a problem is worth it
                                </div>
                            </div>
                        </div>
                        <h4 className='role-name py-2 px-3'>Busari Ahmad</h4>
                        <p className="role-tittle ">Chief Technology Officer</p>
                    </div>
                </div>
            </div>
            
            <span className={`${isReadMore === false && 'display-block'}`}>
                <div className='picture'>

            <div className='col-md-6 col-xl-4 display-all-hide  mb-3'>
                <div className='container-fluid relative mb-5 mt-5'>
                    <div className="about-team-card shadow  mt-n5">
                        <div className='contain w-100 h-75'>
                        <img className="img" alt="web development company near me"
                          src={AboutImg7}   className='sizing7 img-fluid img-responsive image hvr-grow'/>
                            <div className='overlay'>
                                <div className='about-text p-2'>
                                    Don't be too comfortable with your comfort, explore and get new things done.
                                    That's the winning strength
                                </div>
                            </div>
                        </div>
                        <h4 className='role-name py-2 px-3'>Isiak Abdul Azeez</h4>
                        <p className="role-tittle ">Creative Designer</p>
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-xl-4 display-all-hide   mb-3'>
                <div className='container-fluid relative mb-5 mt-5'>
                    <div className="about-team-card shadow  mt-n5">
                        <div className='contain w-100 h-75'>
                        <img className="img" alt="web development company near me"
                          src={AboutImg8}   className='sizing8 img-fluid img-responsive image hvr-grow'/>
                            <div className='overlay'>
                                <div className='about-text p-2'>
                                    Identify your dream buyers is the vital most pervading valuable in
                                    marketing
                                </div>
                            </div>
                        </div>
                        <h4 className='role-name py-2 px-3'>Mas'ud Taofeeq</h4>
                        <p className="role-tittle ">Marketing & SEO Expert</p>
                    </div>
                </div>
            </div>

            <div className='col-md-6 col-xl-4 display-all-hide   mb-3'>
                <div className='container-fluid relative mb-5 mt-5'>
                    <div className="about-team-card shadow  mt-n5">
                        <div className='contain w-100 h-75'>
                        <img className="img" alt="web development company near me"
                          src={AboutImg9}   className='sizing9 img-fluid img-responsive image hvr-grow'/>
                            <div className='overlay'>
                                <div className='about-text p-2'>
                                    Only half of Programming is coding. The other 90% is debugging.
                                </div>
                            </div>
                        </div>
                        <h4 className='role-name py-2 px-3'>Kolade Elizabeth</h4>
                        <p className="role-tittle ">Mobile App Developer</p>
                    </div>
                </div>
            </div>
</div>
<div className='picture'>
            <div className='col-md-6 col-xl-4 display-all-hide  mb-3'>
                <div className='container-fluid relative mb-5 mt-5'>
                    <div className="about-team-card shadow  mt-n5">
                        <div className='contain w-100 h-75'>
                        <img className="img" alt="web development company near me"
                          src={AboutImg10}   className='sizing10 img-fluid img-responsive image hvr-grow'/>
                            <div className='overlay'>
                                <div className='about-text p-2'>
                                    Life is what happens when you're busy making other plans.
                                </div>
                            </div>
                        </div>
                        <h4 className='role-name py-2 px-3'>Faseeki Friday</h4>
                        <p className="role-tittle ">Full-stack Developer</p>
                    </div>
                </div>
            </div>

            <div className='col-md-6 col-xl-4 display-all-hide  mb-3'>
                <div className='container-fluid relative mb-5 mt-5'>
                    <div className="about-team-card shadow  mt-n5">
                        <div className='contain w-100 h-75'>
                        <img className="img" alt="web development company near me"
                          src={AboutImg11}   className='sizing11 img-fluid img-responsive image hvr-grow'/>
                            <div className='overlay'>
                                <div className='about-text p-2'>
                                    Soon, there might be no reason and no way that a human mind will be able to
                                    keep up with an artificial intelligence machine.
                                </div>
                            </div>
                        </div>
                        <h4 className='role-name py-2 px-3'>Bolade Emmanuel</h4>
                        <p className="role-tittle ">Data Scientist</p>
                    </div>
                </div>
            </div>

            <div className='col-md-6 col-xl-4 display-all-hide  mb-3'>
                <div className='container-fluid relative mb-5 mt-5'>
                    <div className="about-team-card shadow  mt-n5">
                        <div className='contain w-100 h-75'>
                        <img className="img" alt="web development company near me"
                          src={AboutImg12}   className='sizing12 img-fluid img-responsive image hvr-grow'/>
                            <div className='overlay'>
                                <div className='about-text p-2'>
                                    By far, the greatest danger of Artificial Intelligence is that people
                                    conclude too early that they understand it
                                </div>
                            </div>
                        </div>
                        <h4 className='role-name py-2 px-3'>Muhammad Kutashi</h4>
                        <p className="role-tittle ">Machine Learning Engineer</p>
                    </div>
                </div>
            </div>
            </div>
</span>
            <div className="col-md-12 text-center">
                <div className="show-all-team mb-3">
               
                <span className="me3 read-more-btn hvr-bounce-to-right" onClick={toggleReadMore}>Show more</span>
                </div>
             </div>
        </div>
    </div>
    

    {/* <!-- team end --> */}

    {/* <!-- We go beyond! --> */}

    <div className="container-fluid mt-3">
        
        <div className="row">

            <div className="col-md-6 we-go-beyond wow animate__fadeInLeft" data-wow-duration=".5s">
                <div>
                    
                        <h2 className="beyond-h3 hvr-underline-from-center">WE Go Beyond!</h2>
                        <p className="beyond-content-post">We try not to deliver, but over-deliver in every of our projects.
                            We are a performance agency that drives digital strategy, growth and revenue.
                        </p>
                </div>
            </div>

            <div className="col-md-6 wow animate__fadeInRight" data-wow-duration=".5s" style={{paddingRight: "0px;", paddingLeft: "0px;"}}>
                <div>
                <img className="img" alt="web development company near me"
                          src={AboutImg13}   className='sizing img-fluid img-responsive image hvr-grow'/>
                </div>
            </div>


        </div>

    </div> 


{/* <!-- Our Value --> */}

  {/* <!--Carousel Wrapper--> */}
  <div className="abt-swip-carousel">
    <div id="multi-item-example"  className=" container carousel slide carousel-multi-item " data-ride="carousel">
  
      {/* <!--Slides--> */}
      <div className="carousel-inner text-center" role="listbox">
  
        {/* <!--First slide--> */}
        <div className="carousel-item active">
  
          <div className="row">
            <div className="col-md-2">

              <div className="swiper-slide">
                <div className="border-4 shadow-lg  " id="about-swiper-height">
                    <div className="card-img-top p-3 text-light" style={{backgroundColor:"green"}}
                         alt="">
                        Excellence
                    </div>

                    <div className="card-body">
                        <p className="card-text-ab">Our solution always promises excellent results</p>
                    </div>
                </div>
            </div>
            </div>
  
            <div className="col-md-2 offset-md-1  clearfix d-none d-md-block">

              <div className="swiper-slide">
                <div className="border-4 shadow-lg  " id="about-swiper-height">
                    <div className="card-img-top p-3 text-light" style={{backgroundColor: "#F44B18"}}
                         alt="">
                         Affordability
                    </div>

                    <div className="card-body">
                        <p className="card-text-ab"> Our prices are the cheapest compared to the value customers
                            get from other brands for similar service
                        </p>
                    </div>
                </div>
            </div>
            </div>
  
            <div className="col-md-2 offset-md-1  clearfix d-none d-md-block">
             
              <div className="swiper-slide">
                <div className="border-4 shadow-lg  " id="about-swiper-height">    
                    <div className="card-img-top p-3 text-light" style={{backgroundColor:"#1F4395"}}
                        alt="">
                         Innovation
                    </div>

                    <div className="card-body">
                        <p className="card-text-ab">Innovative ideas make our customers stand out in the
                            results they get</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="col-md-2 offset-md-1  clearfix d-none d-md-block">
             
              <div className="swiper-slide">
                <div className="border-4 shadow-lg  " id="about-swiper-height">
                    <div className="card-img-top p-3" style={{backgroundColor:"rgb(19, 19, 19);", color: "white;"}}
                    alt="">
                   Transparency
               </div>
               <div className="card-body">
                   <p className="card-text-ab">Our processes are open and clear to our customers</p>

               </div>
                   
                </div>
            </div>
            </div>
          </div>
  
        </div>
        {/* <!--/.First slide--> */}
  
        {/* <!--Second slide--> */}

                <div className="carousel-item ">
          
                  <div className="row">
                    <div className="col-md-2">
        
                      <div className="swiper-slide">
                        <div className="border-4 shadow-lg  " id="about-swiper-height">
                            <div className="card-img-top p-3 text-light" style={{backgroundColor:"#F44B18"}}
                                    alt="">
                                Timeliness
                            </div>
                            <div className="card-body">
                                <p className="card-text-ab">Our project management strategies help in achieving success in time
                                 for our clients</p>
                            </div>
                           
                        </div>
                    </div>
                    </div>
                    <div className="col-md-2 offset-md-1  clearfix d-none d-md-block">
                      <div className="swiper-slide">
                        <div className="border-4 shadow-lg  " id="about-swiper-height">
                             <div className="card-img-top p-3 text-light" style={{backgroundColor: "green"}}
                                alt="">
                                Feedback
                            </div>

                            <div className="card-body">
                                <p className="card-text-ab"> We always listen to our customers' reviews to help deliver better
                                                    services
                                </p>
                            </div> 
                           
                        </div>
                    </div>
                    </div>
          
                    <div className="col-md-2 offset-md-1  clearfix d-none d-md-block">
        
                      <div className="swiper-slide">
                        <div className="border-4 shadow-lg  " id="about-swiper-height">
                        <div className="card-img-top p-3 text-light" style={{backgroundColor:"#1F4395"}}
                                alt="">
                            Innovation
                        </div>
                        <div className="card-body">
                            <p className="card-text-ab">Innovative ideas make our customers stand out in the
                                                    results they get</p>

                        </div>
                        </div>
                    </div>
                    </div>
          
                    <div className="col-md-2 offset-md-1  clearfix d-none d-md-block">
                     
                      <div className="swiper-slide">
                        <div className="border-4 shadow-lg  " id="about-swiper-height">    
                                <div className="card-img-top p-3 text-light" style={{backgroundColor:"rgb(19, 19, 19);", color: "white;"}}
                                alt="">  Excellence
                                </div>
    
                                <div className="card-body">
                                    <p className="card-text-ab">Our solution always promises excellent results</p>
                                </div>
                        </div>
                    </div>
                    </div>
                    
                  </div>
          
                </div>
        
        {/* <!--/.Second slide--> */}

        {/* <!--THird slide--> */}

        <div className="carousel-item ">
          
            <div className="row">

                <div className="col-md-2">
             
                    <div className="swiper-slide">
                      <div className="border-4 shadow-lg  " id="about-swiper-height">    
                          <div className="card-img-top p-3 text-light" style={{backgroundColor:"#1F4395"}}
                              alt="">
                               Innovation
                          </div>
      
                          <div className="card-body">
                              <p className="card-text-ab">Innovative ideas make our customers stand out in the
                                  results they get</p>
                          </div>
                      </div>
                  </div>
                  </div>
                  <div className="col-md-2 offset-md-1  clearfix d-none d-md-block">
                   
                    <div className="swiper-slide">
                      <div className="border-4 shadow-lg  " id="about-swiper-height">
                          <div className="card-img-top p-3" style={{backgroundColor:"rgb(19, 19, 19);", color: "white;"}}
                          alt="">
                         Transparency
                     </div>
                     <div className="card-body">
                         <p className="card-text-ab">Our processes are open and clear to our customers</p>
      
                     </div>
                         
                      </div>
                  </div>
                  </div>
              <div className="col-md-2 offset-md-1  clearfix d-none d-md-block">
  
                <div className="swiper-slide">
                  <div className="border-4 shadow-lg  " id="about-swiper-height">
                      <div className="card-img-top p-3 text-light" style={{backgroundColor:"#F44B18"}}
                              alt="">
                          Timeliness
                      </div>
                      <div className="card-body">
                          <p className="card-text-ab">Our project management strategies help in achieving success in time
                           for our clients</p>
                      </div>
                     
                  </div>
              </div>
              </div>
              <div className="col-md-2 offset-md-1  clearfix d-none d-md-block">
                <div className="swiper-slide">
                  <div className="border-4 shadow-lg  " id="about-swiper-height">
                       <div className="card-img-top p-3 text-light" style={{backgroundColor:"green"}}
                          alt="">
                          Feedback
                      </div>

                      <div className="card-body">
                          <p className="card-text-ab"> We always listen to our customers' reviews to help deliver better
                                              services
                          </p>
                      </div> 
                     
                  </div>
              </div>
              </div>
              
            </div>
    
          </div>
        
        {/* <!--/.THird slide--> */}
  
    
  
      </div>
      {/* <!--/.Slides--> */}
  
       {/* <!--Controls--> */}
       <div className="controls-top text-center">
          <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fa fa-chevron-left abt-chevron"></i></a>
          <a className="btn-floating" href="#multi-item-example" data-slide="next"><i className="fa fa-chevron-right abt-chevron"></i></a>
        </div>
        {/* <!--/.Controls--> */}
  
    </div>
  
  </div>
    {/* <!--/.Carousel Wrapper--> */}

    
    


    {/* <!-- Mix with us --> */}

    <div className="container-fluid mb-5">
        
        <div className="row">

            <div className="col-md-6 wow animate__fadeInLeft" data-wow-duration=".5s" style={{paddingRight: "0px;", paddingLeft: "0px;"}}>
                <div>
                <img className="img" alt="web development company near me"
                          src={AboutImg14}   className='sizing img-fluid img-responsive image hvr-grow'/>
                </div>
            </div>

            <div className="col-md-6 we-go-beyond wow animate__fadeInRight" data-wow-duration=".5s">
                <div>
                    
                        <h2 className="beyond-h2 hvr-underline-from-center">Mix With Us</h2>
                        <p className="beyond-content-post"> We were born with the belief that goal driven people with different backgrounds and experience, who come
                            together to pursue a common goal usually achieve one of the best results. Talk to us to join our team.
                        </p>
                </div>
            </div>


        </div>

    </div> 
            
        </div>
    )
}
