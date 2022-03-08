import { Link } from 'react-router-dom'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import './Product_Category.css'


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


const ProductLists = () => {

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
                    <Link to="/products">
                        <div  class="item"><img src={product.image} class="popular-pro-img img-responsive hvr-grow " height="200px" id="myImg" alt="Banner" /></div>
                        <p class="hvr-forward"> <Link to="/products">{product.title}</Link> <i class="fa fa-arrow-circle-right  px-2"></i> </p>
                    </Link>
                </div>
            
        ))

        const pagecount = Math.ceil(productLists.length / productPerPage);

        const changePage = ({ selected }) => {
            setPageNumber(selected);
        }


    return (
        <div>

            <header>
                    <div class="container-fluid" style={{maxWidth: "100%;"}}>
                        <div class="row">
                            <div class="col-md-12 bg-img-port" style={{backgroundImage: `url(${Printservice1})`}}>
                                <div class="">
                                    <div class=" text-center text-uppercase ">
                                        <h2 class="banner-h2-text hvr-underline-from-center">Banner</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </header>

<div>
    

</div>   

    <div class="container mt-5">

        <div class="row shadow-lg">
            <div class="text-center col-md-12">
                <h4 class="why-you-choose hvr-underline-from-center mt-3">Product Category</h4>
                <div class="">
        
            {/* <input class="p-2 form-inline mx-auto bg-grey rounded-lg" type="search" placeholder="Search" aria-label="Search" /> */}
        
    </div>
                {/* <Link to="/" className="d-flex justify-content-end">View All</Link> */}
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

        </div>
    );
}
 
export default ProductLists;