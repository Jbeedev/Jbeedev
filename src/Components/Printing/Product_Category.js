import { Link } from 'react-router-dom'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import { Autoplay } from 'swiper';

import Printservice1 from '../assets/Images/Printing-Services.png' 
import Printservice2 from '../assets/Images/Calendar.png' 
import Printservice3 from '../assets/Images/banner-image.jpg' 
import Printservice4 from '../assets/Images/business-card.png' 
import Printservice5 from '../assets/Images/vehicle-branding-images.png' 
import Printservice6 from '../assets/Images/carrier-bags.jpg' 
import Printservice8 from '../assets/Images/banner-image.jpg'
import Printservice10 from '../assets/Images/vehicle-branding-images.png' 
import Printservice11 from '../assets/Images/Bottle.png' 
import Printservice12 from '../assets/Images/hard-cover-notepad.jpg' 
import Printservice13 from '../assets/Images/Printing-Services.png' 
import Tool1 from '../assets/Images/Tenplus Partners 01.png' 
import Tool2 from '../assets/Images/aws.png' 
import Tool3 from '../assets/Images/Asana-logo.png' 
import Tool4 from '../assets/Images/FB.png' 
import Tool5 from '../assets/Images/Tenplus Partners 03.png' 
import Product1 from '../assets/Images/banner-image.jpg' 
import Product2 from '../assets/Images/t-shirt-design.jpg' 
import Product3 from '../assets/Images/Bill-board.png' 
import Product4 from '../assets/Images/vehicle-branding-images.png' 
import Product5 from '../assets/Images/hard-cover-notepad.jpg' 
import Product6 from '../assets/Images/id-card.jpg' 
import Product7 from '../assets/Images/Bottle.png' 
import Product8 from '../assets/Images/business-card.png' 
import Product9 from '../assets/Images/carrier-bags.jpg' 



const Printing = () => {

  const [productLists, setProductLists] = useState([
    {title: 'Product', image: Printservice10, id: 1},
    {title: 'Banner',  image: Printservice8, id: 2},
    {title: 'Product', image: Printservice5, id: 3},
    {title: 'Product', image: Printservice6, id: 4},
    {title: 'Product', image: Printservice4, id: 6},
    {title: 'Product', image: Printservice3, id: 7},
    {title: 'Product', image: Printservice2, id: 8},
    {title: 'Product', image: Printservice1, id: 9},
    {title: 'Product', image: Printservice8, id: 10},
    {title: 'Product', image: Printservice11, id: 11},
    {title: 'Product', image: Printservice12, id: 12},
    {title: 'Product', image: Printservice13, id: 13},
    
]);

const [pageNumber, setPageNumber] = useState(0);

    const productPerPage = 9;
    const pagesVisited = pageNumber * productPerPage;

    const displayProducts = productLists
        .slice(pagesVisited, pagesVisited + productPerPage)
        .map((product) => (
                <div class="col-md-3 offset-md-1 popular-back" key={product.id}>
                    <Link to="/productlists">
                        <div  class="item"><img src={product.image} class="popular-pro-img img-responsive hvr-grow " height="200px" id="myImg" alt="Banner" /></div>
                        <p class="hvr-forward"> <Link to="/productlists">{product.title}</Link> <i class="fa fa-arrow-circle-right  px-2"></i> </p>
                    </Link>
                </div>
            
        ))

        const pagecount = Math.ceil(productLists.length / productPerPage);

        const changePage = ({ selected }) => {
            setPageNumber(selected);
        }


    return (
        <div>

<div>
    <div class="aj-slide ">
        
        
         <div class="caro-print homepage-slide">
            <img src={Printservice1} alt="web development company in nigeria" />
            <div class="print-banner-section">
                <div class="col-md-12 col-sm-12">
                     <h6 class="print-p1">discover the fastest, <br /> most effective way <br /> to get experts for your needs </h6>
                    <div class="print-banner-buttons">
                        {/* <input class="p-2 mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
                        {/* <form class="navbar-form pull-left form-search"> */}
                          <div class="input-append">
                            
                              <input data-provide="typeahead" data-items="4"  type="text" 
                                class="span2 search-query" />
                                <i class="la la-search"></i>
                              {/* <button class="btn text-danger">Search</button> */}
                              <Link to="/productlists" class="print-request hvr-bounce-to-right  mr-3">REQUEST A QUOTE</Link>
                          </div>
                        {/* </form> */}
                       
                    </div>
                </div>
            </div>
        </div>
    
    </div>

</div>

{/* <!-- Landing Slides --> */}


  {/* <!--Carousel Wrapper--> */}
  <div class="printing-carousel mb-5">
    <div class=" container ">
      <div class="text-center col-md-12 ">
          <h4 class="why-you-choose hvr-underline-from-center mb-1 text-white">Featured Products</h4>
      </div>
      <div class="printing-carousel">
  <div id="multi-item-example"  class=" container carousel slide carousel-multi-item " data-ride="carousel">

    {/* <!--Slides--> */}
    <div class="carousel-inner text-center" role="listbox">

      {/* <!--First slide--> */}
      <div class="carousel-item active">

        <div class="row">
          <div class="col-md-2">
            <div class="mb-2">
            <Link to="/productlists"><img class="popular-product-img" src={Product7} alt="" /></Link>
                <p class="hvr-forward pr-pop-product " >
                    <Link to="/productlists">
                        <ul class=" list-unstyled text-center product-li-style">
                          <li>Gordon</li>
                          <li>$250</li>
                          <li><s>$300</s></li>
                        </ul>
                    </Link>  
                </p>
            </div>
          </div>

          <div class="col-md-2 offset-md-1  clearfix d-none d-md-block">
            <div class="mb-2">
              <Link to="/productlists"><img class="popular-product-img" src={Product7} alt="" /></Link>
                <p class="hvr-forward pr-pop-product " >
                    <Link to="/productlists">
                        <ul class="product-li-style list-unstyled">
                          <li>Gordon</li>
                          <li>$250</li>
                          <li><s>$300</s></li>
                        </ul>
                    </Link>  
                </p>
            </div>
          </div>

          <div class="col-md-2 offset-md-1  clearfix d-none d-md-block">
            <div class="mb-2">
              <Link to="/productlists"><img class="popular-product-img" src={Product7} alt="" /></Link>
                <p class="hvr-forward pr-pop-product " >
                    <Link to="/productlists">
                        <ul class="product-li-style list-unstyled">
                          <li>Gordon</li>
                          <li>$250</li>
                          <li><s>$300</s></li>
                        </ul>
                    </Link>  
                </p>
            </div>
          </div>
          <div class="col-md-2 offset-md-1  clearfix d-none d-md-block">
            <div class="mb-2">
              <Link to="/productlists"><img class="popular-product-img" src={Product7} alt="" /></Link>
                <p class="hvr-forward pr-pop-product " >
                    <Link to="/productlists">
                        <ul class="product-li-style list-unstyled">
                          <li>Gordon</li>
                          <li>$250</li>
                          <li><s>$300</s></li>
                        </ul>
                    </Link>  
                </p>
            </div>
          </div>
        </div>

      </div>
      {/* <!--/.First slide--> */}

      {/* <!--Second slide--> */}
      <div class="carousel-item">

        <div class="row">
          <div class="col-md-2 ">
            <div class="mb-2">
              <Link to="/productlists"><img class="popular-product-img" src={Product7} alt="" /></Link>
                <p class="hvr-forward pr-pop-product " >
                    <Link to="/productlists">
                        <ul class="product-li-style list-unstyled">
                          <li>Gordon</li>
                          <li>$250</li>
                          <li><s>$300</s></li>
                        </ul>
                    </Link>  
                </p>
            </div>
          </div>

          <div class="col-md-2 offset-md-1  clearfix d-none d-md-block">
            <div class="mb-2">
              <Link to="/productlists"><img class="popular-product-img" src={Product7} alt="" /></Link>
              <p class="hvr-forward pr-pop-product " >
                  <Link to="/productlists">
                      <ul class="product-li-style list-unstyled">
                        <li>Gordon</li>
                        <li>$250</li>
                        <li><s>$300</s></li>
                      </ul>
                  </Link>  
              </p>
            </div>
          </div>

          <div class="col-md-2 offset-md-1  clearfix d-none d-md-block">
            <div class="mb-2">
              <Link to="/productlists"><img class="popular-product-img" src={Product7} alt="" /></Link>
                <p class="hvr-forward pr-pop-product " >
                    <Link to="/productlists">
                        <ul class="product-li-style list-unstyled">
                          <li>Gordon</li>
                          <li>$250</li>
                          <li><s>$300</s></li>
                        </ul>
                    </Link>  
                </p>
            </div>
          </div>
          <div class="col-md-2 offset-md-1  clearfix d-none d-md-block">
            <div class="mb-2">
              <Link to="/productlists"><img class="popular-product-img" src={Product7} alt="" /></Link>
              <p class="hvr-forward pr-pop-product " >
                  <Link to="/productlists">
                      <ul class="product-li-style list-unstyled">
                        <li>Gordon</li>
                        <li>$250</li>
                        <li><s>$300</s></li>
                      </ul>
                  </Link>  
              </p>
            </div>
          </div>
        </div>

      </div>
      {/* <!--/.Second slide--> */}

      {/* <!--Third slide--> */}
      <div class="carousel-item">

        <div class="row text-center" >
          <div class="col-md-2 ">
            <div class="mb-2">
              <Link to="/productlists"><img class="popular-product-img" src={Product7} alt="" /></Link>
                <p class="hvr-forward pr-pop-product " >
                    <Link to="/productlists">
                        <ul class="product-li-style list-unstyled">
                          <li>Gordon</li>
                          <li>$250</li>
                          <li><s>$300</s></li>
                        </ul>
                    </Link>  
                </p>
            </div>
          </div>

          <div class="col-md-2 offset-md-1  clearfix d-none d-md-block">
            <div class="mb-2">
              <Link to="/productlists"><img class="popular-product-img" src={Product7} alt="" /></Link>
                <p class="hvr-forward pr-pop-product " >
                    <Link to="/productlists">
                        <ul class="product-li-style list-unstyled">
                          <li>Gordon</li>
                          <li>$250</li>
                          <li><s>$300</s></li>
                        </ul>
                    </Link>  
                </p>
            </div>
          </div>    
          <div class="col-md-2 offset-md-1  clearfix d-none d-md-block">
            <div class="mb-2">
              <Link to="/productlists"><img class="popular-product-img" src={Product7} alt="" /></Link>
                <p class="hvr-forward pr-pop-product " >
                    <Link to="/productlists">
                        <ul class="product-li-style list-unstyled">
                          <li>Gordon</li>
                          <li>$250</li>
                          <li><s>$300</s></li>
                        </ul>
                    </Link>  
                </p>
            </div>
          </div>
          
          <div class="col-md-2 offset-md-1  clearfix d-none d-md-block">
            <div class="">
              <Link to="/productlists"><img class="popular-product-img" src={Product7} alt="" /></Link>
                <p class="hvr-forward pr-pop-product " >
                    <Link to="/productlists">
                        <ul class="product-li-style list-unstyled">
                          <li>Gordon</li>
                          <li>$250</li>
                          <li><s>$300</s></li>
                        </ul>
                    </Link>  
                </p>
            </div>
          </div>
        </div>

      </div>

    </div>
    {/* <!--/.Slides--> */}

     {/* <!--Controls--> */}
     <div class="controls-top text-center">
        <a class="btn-floating" href="#multi-item-example" data-slide="prev"><i class="fa fa-chevron-left"></i></a>
        <a class="btn-floating" href="#multi-item-example" data-slide="next"><i class="fa fa-chevron-right"></i></a>
      </div>
      {/* <!--/.Controls--> */}

  </div>

</div>

    </div>
  </div>


  {/* <!--/.Carousel Wrapper--> */}

    <div class="container">

        <div class="row">
            <div class="text-center mb-3 col-md-12">
                <h4 class="why-you-choose hvr-underline-from-center mb-1">Product Category</h4>
            </div>
            { displayProducts }
            <ReactPaginate 
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pagecount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </div>  
     
  </div>

    {/* <!-- testimonial --> */}

    <div class="container">

        <div class="row shadow-lg p-3 bg-white rounded">
            <div class="text-center col-md-12">
                <h4 class="why-you-choose hvr-underline-from-center mb-1">Recomend for You</h4>
                <Link to="/productlists" className="d-flex justify-content-end">View All</Link>
            </div>
<div id="multi-item-examp"  class=" container carousel slide carousel-multi-item " data-ride="carousel">

{/* <!--Slides--> */}
<div class="carousel-inner text-center" role="listbox">

{/* <!--First slide--> */}
<div class="carousel-item active">

  <div class="row">
    <div class="col-md-2">
      <div class="mb-2">
      <Link to="/productlists"><img class="popular-product-img" src={Product7} alt="" /></Link>
          <p class="hvr-forward pr-pop-product " >
              <Link to="/productlists">
                  <ul class=" recomend-list list-unstyled text-center product-li-style">
                    <li>Gordon</li>
                    <li>$250</li>
                    <li><s>$300</s></li>
                  </ul>
              </Link>  
          </p>
      </div>
    </div>

    <div class="col-md-2 offset-md-1  clearfix d-none d-md-block">
      <div class="mb-2">
        <Link to="/productlists"><img class="popular-product-img" src={Product7} alt="" /></Link>
          <p class="hvr-forward pr-pop-product " >
              <Link to="/productlists">
                  <ul class="recomend-list product-li-style list-unstyled">
                    <li>Gordon</li>
                    <li>$250</li>
                    <li><s>$300</s></li>
                  </ul>
              </Link>  
          </p>
      </div>
    </div>

    <div class="col-md-2 offset-md-1  clearfix d-none d-md-block">
      <div class="mb-2">
        <Link to="/productlists"><img class="popular-product-img" src={Product7} alt="" /></Link>
          <p class="hvr-forward pr-pop-product " >
              <Link to="/productlists">
                  <ul class="recomend-list product-li-style list-unstyled">
                    <li>Gordon</li>
                    <li>$250</li>
                    <li><s>$300</s></li>
                  </ul>
              </Link>  
          </p>
      </div>
    </div>
    <div class="col-md-2 offset-md-1  clearfix d-none d-md-block">
      <div class="mb-2">
        <Link to="/productlists"><img class="popular-product-img" src={Product7} alt="" /></Link>
          <p class="hvr-forward pr-pop-product " >
              <Link to="/productlists">
                  <ul class="recomend-list product-li-style list-unstyled">
                    <li>Gordon</li>
                    <li>$250</li>
                    <li><s>$300</s></li>
                  </ul>
              </Link>  
          </p>
      </div>
    </div>
  </div>

</div>
{/* <!--/.First slide--> */}

{/* <!--Second slide--> */}
<div class="carousel-item">

  <div class="row">
    <div class="col-md-2 ">
      <div class="mb-2">
        <Link to="/productlists"><img class="popular-product-img" src={Product7} alt="" /></Link>
          <p class="hvr-forward pr-pop-product " >
              <Link to="/productlists">
                  <ul class="recomend-list product-li-style list-unstyled">
                    <li>Gordon</li>
                    <li>$250</li>
                    <li><s>$300</s></li>
                  </ul>
              </Link>  
          </p>
      </div>
    </div>

    <div class="col-md-2 offset-md-1  clearfix d-none d-md-block">
      <div class="mb-2">
        <Link to="/productlists"><img class="popular-product-img" src={Product7} alt="" /></Link>
        <p class="hvr-forward pr-pop-product " >
            <Link to="/productlists">
                <ul class="recomend-list product-li-style list-unstyled">
                  <li>Gordon</li>
                  <li>$250</li>
                  <li><s>$300</s></li>
                </ul>
            </Link>  
        </p>
      </div>
    </div>

    <div class="col-md-2 offset-md-1  clearfix d-none d-md-block">
      <div class="mb-2">
        <Link to="/productlists"><img class="popular-product-img" src={Product7} alt="" /></Link>
          <p class="hvr-forward pr-pop-product " >
              <Link to="/productlists">
                  <ul class="recomend-list product-li-style list-unstyled">
                    <li>Gordon</li>
                    <li>$250</li>
                    <li><s>$300</s></li>
                  </ul>
              </Link>  
          </p>
      </div>
    </div>
    <div class="col-md-2 offset-md-1  clearfix d-none d-md-block">
      <div class="mb-2">
        <Link to="/productlists"><img class="popular-product-img" src={Product7} alt="" /></Link>
        <p class="hvr-forward pr-pop-product " >
            <Link to="/productlists">
                <ul class="recomend-list product-li-style list-unstyled">
                  <li>Gordon</li>
                  <li>$250</li>
                  <li><s>$300</s></li>
                </ul>
            </Link>  
        </p>
      </div>
    </div>
  </div>

</div>
{/* <!--/.Second slide--> */}

{/* <!--Third slide--> */}
<div class="carousel-item">

  <div class="row text-center" >
    <div class="col-md-2 ">
      <div class="mb-2">
        <Link to="/productlists"><img class="popular-product-img" src={Product7} alt="" /></Link>
          <p class="hvr-forward pr-pop-product " >
              <Link to="/productlists">
                  <ul class="recomend-list product-li-style list-unstyled">
                    <li>Gordon</li>
                    <li>$250</li>
                    <li><s>$300</s></li>
                  </ul>
              </Link>  
          </p>
      </div>
    </div>

    <div class="col-md-2 offset-md-1  clearfix d-none d-md-block">
      <div class="mb-2">
        <Link to="/productlists"><img class="popular-product-img" src={Product7} alt="" /></Link>
          <p class="hvr-forward pr-pop-product " >
              <Link to="/productlists">
                  <ul class="recomend-list product-li-style list-unstyled">
                    <li>Gordon</li>
                    <li>$250</li>
                    <li><s>$300</s></li>
                  </ul>
              </Link>  
          </p>
      </div>
    </div>    
    <div class="col-md-2 offset-md-1  clearfix d-none d-md-block">
      <div class="mb-2">
        <Link to="/productlists"><img class="popular-product-img" src={Product7} alt="" /></Link>
          <p class="hvr-forward pr-pop-product " >
              <Link to="/productlists">
                  <ul class="recomend-list product-li-style list-unstyled">
                    <li>Gordon</li>
                    <li>$250</li>
                    <li><s>$300</s></li>
                  </ul>
              </Link>  
          </p>
      </div>
    </div>
    
    <div class="col-md-2 offset-md-1  clearfix d-none d-md-block">
      <div class="">
        <Link to="/productlists"><img class="popular-product-img" src={Product7} alt="" /></Link>
          <p class="hvr-forward pr-pop-product " >
              <Link to="/productlists">
                  <ul class="recomend-list product-li-style list-unstyled">
                    <li>Gordon</li>
                    <li>$250</li>
                    <li><s>$300</s></li>
                  </ul>
              </Link>  
          </p>
      </div>
    </div>
  </div>

</div>

</div>
{/* <!--/.Slides--> */}

{/* <!--Controls--> */}
<div class="controls-top text-center">
  <a class="btn-floating recommend-caro" href="#multi-item-examp" data-slide="prev"><i class="fa fa-chevron-left"></i></a>
  <a class="btn-floating recommend-caro" href="#multi-item-examp" data-slide="next"><i class="fa fa-chevron-right"></i></a>
</div>
{/* <!--/.Controls--> */}

</div>
  

        </div>  
     
  </div>
  

    <div class="container-fluid my-5 ">
        <div class="text-center">
            <h2 class="why-you-choose hvr-underline-from-center" >Our Tools</h2>
        </div>
<Marquee>
    <img class="slideImg" alt="web development company near me" src={Tool1} />
    <img class="slideImg" alt="web development company near me" src={Tool2} />
    <img class="slideImg" alt="web development company near me" src={Tool3} />
    <img class="slideImg" alt="web development company near me" src={Tool4} />
    <img class="slideImg" alt="web development company near me" src={Tool5} />
    <img class="slideImg" alt="web development company near me" src={Tool3} />
    <img class="slideImg" alt="web development company near me" src={Tool2} />
    <img class="slideImg" alt="web development company near me" src={Tool1} />
    <img class="slideImg" alt="web development company near me" src={Tool4} />
    <img class="slideImg" alt="web development company near me" src={Tool5} />
    <img class="slideImg" alt="web development company near me" src={Tool2} />
    <img class="slideImg" alt="web development company near me" src={Tool1} />
    <img class="slideImg" alt="web development company near me" src={Tool3} />
</Marquee>   
    
        
    </div>
  

        </div>
    );
}
 
export default Printing;