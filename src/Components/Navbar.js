import { Link } from 'react-router-dom'

import BrandImg from './assets/Images/Website-Logo.png';
import BrandImg2 from './assets/Images/52-52-logo.png';
import './Navbar.css'




export default function Navbar() {

//navbar scroll when in active state
//const[navbar,setNavbar] = useState(false)

//logo scroll when in active state


//const changeBackground = () =>{
  //  if(window.scrollY ){
       // setNavbar(true);
    //}else{
      //  setNavbar(false)
 //   }
//};

  //window.addEventListener('scroll',changeBackground);

 //for logo


    return (
        <div>
      
          
            <ul class="nav nav-fill navbar-light">
           
  <li class="nav-item  pt-3">
    <Link to="/store" class="nav-link text-white">store</Link>
  </li>
  <li class="nav-item  pt-3">
    <Link to="" class="nav-link text-white">Academia</Link>
  </li>
  <li class="nav-item  pt-3">
    <Link to="" class="nav-link text-white" >MarketPlace</Link>
  </li>
  <li class="nav-item  pt-3">
    <Link to="" class="nav-link text-white" >Portal</Link>
  </li>
   

          </ul>
            {/*



<div className='navbar_Header '>
<ul class="navbar bg-dark">
<li class="nav-item ">
        <a class="nav-link hvr-underline-from-center " href="https://portal.tenpluslabs.com">store</a>
        </li>
        <li class="nav-item">
        <a class="nav-link hvr-underline-from-center " href="printing.html">Academia</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link  hvr-underline-from-center " href="index.html" aria-current="page">MarketPlace</a>
        </li>
        <li class="nav-item">
          <a class="nav-link hvr-underline-from-center  " href="index.html" aria-current="page">Portal</a>
        </li>     
        </ul>
</div>

<nav class={navbar ? 'navbar active' : "navbar navbar-expand-md fixed-top navbar-light bg-transparent"}>
*/}
<header class="sticky-top">
{/*<nav class={navbar ? 'navbar active' : "navbar  navbar-expand-lg navbar-light"}>*/}

<nav class={"navbar navbar  navbar-expand-lg navbar-light"}>
  <div class="navbar-brand nav-brand" href="index.html">
  <img src={ BrandImg }  class="d-none d-sm-block tenplus-logo-mobile" 
  width="143px" height="52px" top="100vh"position="absolute" alt="TenPlus Digital Solutions Ilorin" />
                        <img src={ BrandImg2 } width="52px" height="52px" class="mobile-hide-request" alt="Digital Solutions Ilorin" />
                       
                 
</div>  
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item mr-3">
          <a class="nav-link active  hvr-underline-from-center  " href="/" aria-current="page">Home</a>
        </li>
        
        <li class="nav-item dropdown mr-3">
          <a class="nav-link dropdown-toggle hvr-underline-from-center "  href="/portfolio" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Solutions
          </a>
         
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
         <li> <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="/Link?param=webDev">Web Development</a></li>
       <li>  <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="/Link?param=mobDev">App Development</a></li>
                                   <li> <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="/Link?param=GrapDev">Graphics Design</a></li>
                                   <li> <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="/Link?param=DigDev">Digital Marketting</a></li>
                                   <li> <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="/Link?param=AiDev">Artificial Intelligence</a></li>
                                   <li>  <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="/Link?param=ProDev">Project Management</a></li>
                                   <li>  <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="/Link?param=priDev">Printing Services</a></li>
                                   <li>  <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="/Link?param=VidDev"> Video Editing</a></li>
                                   <li>  <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="/Link?param=CybDev">Cybersecurity</a></li>
                                   <li>  <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="/Link?param=AiDev">Blockchain</a></li>
                                    <li>  <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="/Link?param=ItDev">IT Consulting </a></li>
                                    <li>  <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="/Link?param=IttDev">IT Training</a></li>
          </ul>
        </li>
       
        <li class="nav-item mr-2">
          <a class="nav-link hvr-underline-from-center" href="/portfolio">Portfolio</a>
        </li>
        <li class="nav-item mr-2">
          <a class="nav-link hvr-underline-from-center " href="/blog">Blog</a>
        </li>
        <li class="nav-item dropdown mr-3">
          <a class="nav-link dropdown-toggle hvr-underline-from-center "  href="/about" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          About Us
          </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
         <li> <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="/whoweserve">Who we Serve</a></li>
         </ul>
        </li>
        <li class="nav-item mr-2">
        <a class="nav-link hvr-underline-from-center " href="/contact">Contact Us</a>
        </li>
     
        <div class="input-group rounded">
  <input type="search" class="form-control rounded " placeholder="Search"
   aria-label="Search" aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div>
</ul>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="navbar-nav ms-auto">
           <li class="nav-item ">
                                <a class="nav-link nav-btn hvr-bounce-to-right  " href="order.html">Request A Quote</a>
                            </li>             
    
            <li class="nav-item cart">
                                <a class="nav-link hvr-underline-from-center  nav-btn-portal sign-in  " href="/cart" id="navbarDropdownMenuLinks"  style={{color:"#29abe2;"}} > Cart (<span class="total-count"></span>)</a>
                            </li>
        
                             <li class="nav-item dropdown">
                                <a class="nav-link hvr-underline-from-center  nav-btn-portal  sign-in  " style={{color:"#29abe2;"}} href="login.html">Account</a>
                                <i data-toggle="dropdown" class="fas fa-angle-down solution-angle d-block d-lg-none"></i>
                                <div class="dropdown-menu " aria-labelledby="navbarDropdownMenuLinks">
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="Signin.html">Signin</a>
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="signup.html">Signup</a>
                                </div>
                                </li>
                                </ul>
                                </div>
        
                           
                         
                
       
           
            
    </div>
    
  


  </nav>  
  </header>
 


{/*        
            <div class="container-fluid top-nav" id="banner_container">
                <nav class="navbar navbar-expand-lg navbar-light fixed-top " role="navigation" id="nav">
                    <a class="navbar-brand nav-brand" href="index.html">
                        <img src={ BrandImg }  class="d-none d-sm-block tenplus-logo-mobile" width="143px" height="52px" alt="TenPlus Digital Solutions Ilorin" />
                        <img src={ BrandImg2 } width="52px" height="52px" class="mobile-hide-request" alt="Digital Solutions Ilorin" />
                        <p class="">
                            <a class="nav-link nav-btn-qoute" href="order.html">Request A Quote</a>
                        </p>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon toggle-icon01"> <i class="fa fa-navicon" style={{color:"#fff!important",  fontSize:"28px"}}></i></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ml-">
                            <li class="nav-item">
                                <a class="nav-link hvr-underline-from-center  " href="index.html">Home <span class="sr-only">(current)</span></a>
                            </li>
        
                            <li class="nav-item dropdown ">
                                <a class="nav-link hvr-underline-from-center  dropdown-toggle"   href="service.html" id="navbarDropdownMenuLink" aria-expanded="false">
                                    Solutions
                                </a>
                                <i data-toggle="dropdown" class="fas fa-angle-down solution-angle d-block d-lg-none"></i>
                                <div class="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="service.html?to=web">Web Development</a>
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="service.html?to=app">App Development</a>
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="service.html?to=graphics">Graphics Design</a>
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="service.html?to=digital">Digital Marketting</a>
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="service.html?to=ai">Artificial Intelligence</a>
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="service.html?to=project#service">Project Management</a>
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="service.html?to=print#service">Printing Services</a>
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="order.html">                   Video Editing</a>
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="service.html?to=cyber#service">Cybersecurity</a>
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="service.html?to=blockchain#service">Blockchain</a>
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="service.html?to=consult#service">IT Consulting </a>
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="service.html?to=training#service">IT Training</a>
                                </div>
                            </li>
        
                            <li class="nav-item">
                                <a class="nav-link hvr-underline-from-center  " href="portfolio.html">Portfolio</a>
                            </li>
        
                            <li class="nav-item">
                                <Link class="nav-link hvr-underline-from-center " to="/blog">Blog</Link>
                            </li>
        
                            <li class="nav-item">
                                <a class="nav-link hvr-underline-from-center " href="about.html">About Us</a>
                            </li>
        
                            <li class="nav-item">
                                <a class="nav-link hvr-underline-from-center " href="contact.html">Contact Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link hvr-underline-from-center " href="https://portal.tenpluslabs.com">Portal</a>
                            </li> 
                            <li class="nav-item">
                                <a class="nav-link hvr-underline-from-center " href="printing.html">Printing</a>
                            </li> 
        
        
                        </ul>
        
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link hvr-underline-from-center  nav-btn-portal sign-in-mr " id="navbarDropdownMenuLinks"  aria-expanded="false" style={{color:"#29abe2;"}} href="cart.html"> Cart (<span class="total-count"></span>)</a>
                            </li>
        
                             <li class="nav-item dropdown">
                                <a class="nav-link hvr-underline-from-center  nav-btn-portal mr-2 sign-in-mr  " style={{color:"#29abe2;"}} href="login.html">Account</a>
                                <i data-toggle="dropdown" class="fas fa-angle-down solution-angle d-block d-lg-none"></i>
                                <div class="dropdown-menu " aria-labelledby="navbarDropdownMenuLinks">
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="Signin.html">Signin</a>
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="signup.html">Signup</a>
                                </div>
                            </li> 
        
                            <li class="nav-item">
                                <a class="nav-link nav-btn hvr-bounce-to-right" href="order.html">Request A Quote</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div> 
            */}
            
 </div>
        
        
  )
}
