import PostImg1 from '../assets/Images/banner-image.jpg'
import PostImg2 from '../assets/Images/vehicle-branding-images.png'
import PostImg3 from '../assets/Images/hard-cover-notepad.jpg'
import PostImg4 from '../assets/Images/Bottle.png'
import BrandImg3 from '../assets/Images/Printing-Services.png';
import './Shop.css'

const Shop = () => {
    return (
        <div>

            <header>
                <div class="container-fluid" style={{backgroundImage: `url( ${ BrandImg3})`, maxWidth: "100%;" }}>
                    <div class="row">
                        <div class="col-md-12 bg-img-about">
                            <div class="">
                                <div class=" text-center text-uppercase ">
                                    <h2 class="banner-h2-text hvr-underline-from-center">Banner Design</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <HeaderBg /> */}

            <div class="container-fluid" style={{marginTop: "50px;"}}>

    <div class="row">
        <div class="col-md-10">
            <div class="row">
                <div class="col-md-5 offset-md-1">
                    <div class="shirt-carousel">

                        <ul id="glasscase" class="gc-start">
                            <li><img class="shirt-product-img" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" alt="Text" data-gc-caption="Your caption text" /></li>
                            <li><img class="shirt-product-img" src={PostImg1} alt="Text" /></li>
                            <li><img class="shirt-product-img" src={PostImg2} /></li>
                            <li><img class="shirt-product-img" src={PostImg3} alt="Text" /></li>
                            <li><img class="shirt-product-img" src={PostImg4} alt="Text" /></li>
                        </ul>
        
                    </div>
        
                    <div class="product-info">
                        <p>Please note that all prices advertised and referred to on our website are exclusive of Value Added Tax (VAT). VAT is chargeable and payable by the
                             buyer/client at the same time as the buyer/client pays the relevant fees.</p>
                    </div>

                </div>

                <div class="col-md-4 mt-3 product-md-style">
 
                        <h2 class="product-name-pr" >Banner</h2>
                        <h4 class="product-price"> &#x20A6; 30,000 </h4>
                        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequatur sunt hic distinctio, natus labore quo,
                            nobis tenetur ut sapiente ex modi quasi voluptates ratione maxime explicabo, nesciunt et est. </p>
                            
                        <div>
                            <p><i class="fa fa-check-circle mr-2"></i>2 x 5 feet</p>
                            <p><i class="fa fa-check-circle mr-2"></i>High Quality</p>
                            <p><i class="fa fa-check-circle mr-2"></i>Easy to set up</p>
                        </div>
                        
                        <form action="" method="post">

                            <div class="form-group mt-3">
                                <label for="design"> <strong> Do you have a design?</strong></label>
                                <select class="form-control" id="design101">
                                    <option selected>Select</option>
                                    <option value="yes-design" >Yes</option>
                                    <option value="design-for-me" >No (Design for me)</option>
                                </select>

                                <div class="row">

                                    <div class="col-md-8">
                                    <input type="file" class="form-control mt-3 " id="upload-file-p" />
                                    </div>

                                    <div class="col-md-12">
                                        <textarea name=""  class=" form-control mt-3" id="design-for-me" cols="30" rows="10">(1) Tell us about your Business. (2) Describe design specification. (3) Phone No. </textarea>
                                    </div>

                                </div>

                            </div>

                            <div class="form-group mt-3">
                                <label for="design"> <strong> Do you have a design?</strong></label>
                                <select class="form-control" id="design101">
                                    <option selected>Select</option>
                                    <option value="yes" >Yes</option>
                                    <option value="No" >No (Design for me)</option>
                                </select>

                            </div>

                            {/* <!-- thickness --> */}

                            <div class="form-group">

                                <div class="mt-3">
                                    <label for="size"> <strong>Select Thickness</strong> </label>
                                  </div>
                                  <div class="row mt-1">
                
                                    <div class="col-md-12">
                
                                        <select class="form-control readers" id="readers">
                                            <option data-price="0" value="" selected >100mm</option>
                                            <option data-price="2000" value="" >200mm</option>
                                            <option data-price="3000" value="" >300mm</option>
                                            <option data-price="4000" value="" >400mm</option>
                                            
                                          </select>
                
                                    </div>
                                  </div>

                            </div>

                            {/* <!-- choose quantity --> */}
                            <div class="form-group">
                                <label for="quantity"> <strong>Choose Quantity</strong> </label>
                                <select class="form-control readers quantity-data" id="readers">
                                  <option data-price="0"    value="20" selected>1 - 20</option>
                                  <option data-price="2000" value="50" >20 - 50</option>
                                  <option data-price="3000" value="100" >50 - 100</option>
                                </select>
                              </div>

                              {/* <!-- choose size checkbox --> */}
                              <div class="form-group">

                                    <div class="mt-3">
                                        <label for="size"> <strong>Checkbox Here</strong> </label>
                                    </div>
                                    
                                    <div class="row mt-1">
                    
                                        <div class="multiselect">
                                            <div class="selectBox " onclick="showCheckboxes()">
                                            <select class="form-control">
                                                <option>Select an option</option>
                                            </select>
                                            <div class="overSelect"></div>
                                            </div>
                                            <div id="checkboxes">
                                            <label for="one">
                                                <input type="checkbox" id="one" name="price[]" value="1" /> <span class="ml-2 my-1"> First checkbox</span></label>
                                            <label for="two">
                                                <input type="checkbox" id="two" /> <span class="ml-2 my-1"> Second checkbox</span></label>
                                            <label for="three">
                                                <input type="checkbox" id="three" /> <span class="ml-2 my-1">Third checkbox</span></label>
                                            </div>
                                        </div>     
                    
                                    </div>

                                </div>

                                  {/* <!-- choose size radio button --> */}
                              <div class="form-group">

                                <div class="mt-3">
                                    <label for="size"> <strong>Radio Button</strong> </label>
                                </div>
                                
                                <div class="row mt-1">
                
                                    <div class="multiselect">
                                        <div class="selectBox " onclick="showCheckboxes2()">
                                        <select class="form-control">
                                            <option>Select an option</option>
                                        </select>
                                        <div class="overSelect"></div>
                                        </div>
                                        <div id="checkboxes2">
                                            <div class="radio">
                                            <label><input type="radio" name="optradio" class="mr-2 my-1" />Option 1</label>
                                            </div>
                                            <div class="radio">
                                            <label><input type="radio" name="optradio" class="mr-2 my-1" />Option 2</label>
                                            </div>
                                            <div class="radio disabled">
                                            <label><input type="radio" name="optradio" class="mr-2 my-1" />Option 3</label>
                                            </div>
                                        </div>
                                    </div>     
                
                                </div>

                            </div>

                            
                            <div class=" mt-4 d-none">
                                <button class="add-to-cart-box add-to-cart hvr-bounce-to-right mr-2" data-name="Shirt" data-price="1.22" type="submit">Add to cart</button> 
                            </div>

                        </form>

                </div>
            </div>

            
             {/* <!-- collaps cont start here --> */}

            <div class="container px-1 my-5">
                <div class="row"> 
                    <div class="col-md-10 offset-md-1">
                        <div class="card card-tab-cont" >
                            <div class="card-body p-b-0">
                                {/* <!-- Nav tabs --> */}
                                <ul class="nav nav-tabs customtab" role="tablist">
                                    <li class="nav-item text-center"> <a class="nav-link active home1" data-toggle="tab" href="#description" role="tab"><span class="hidden-sm-up"></span> <span class="hidden-xs-down">Descriptions</span></a> </li>
                                    <li class="nav-item text-center"> <a class="nav-link req-sm-up" data-toggle="tab" href="#review" role="tab"><span class="hidden-sm-up"></span> <span class="hidden-xs-down">Reviews</span></a> </li>
                                    <li class="nav-item text-center"> <a class="nav-link" data-toggle="tab" href="#upload" role="tab"><span class="hidden-sm-up"></span> <span class="hidden-xs-down">Upload</span></a> </li>
                                </ul>
                                {/* <!-- Tab panes --> */}
                                <div class="tab-content">
                                    <div class="tab-pane active mt-2" id="description" role="tabpanel">
                                        <div class="row">
                                            <div class=" col-md-12">
                                                <p class="mt-4 real-gen-color "> 
                                                    Make an impressive business card with specialty finish that stands out from the rest. Our business cards comes in various options;
                                                    Matt Card with Matt Lamination
                                                </p>   
                                                <p class=" real-gen-color "> Full-Color Print </p>  
                                                <p class="real-gen-color "> Available in Different Thickness
                                                    (500gsm, 800gsm)</p>   
                                                <p class="real-gen-color "> Front and Back Print with Special Effects Option </p>  
                                                <p class="real-gen-color "> Minimum Order Quantity –<strong> 100 Units </strong> </p>  
                                                <p class="real-gen-color "> <a href="" target="_blank" rel="noopener noreferrer">Contact us,</a>  for more inquiries. </p> 

                                                <div class="ul-square-div">
                                                    <ul class="ul-sqaure real-gen-color">
                                                        <li>Coffee</li>
                                                        <li>Tea</li>
                                                        <li>Coca Cola</li>
                                                      </ul>
                                                </div>
                                                
                                                
                                                <div>

                                                <table class="table table-hover" style={{color:"#1F4395;"}}>
                                                    <thead >
                                                      <tr>
                                                        <th>Firstname</th>
                                                        <th>Lastname</th>
                                                        <th>Email</th>
                                                      </tr>
                                                    </thead>
                                                    <tbody>
                                                      <tr>
                                                        <td>John</td>
                                                        <td>Doe</td>
                                                        <td>john@example.com</td>
                                                      </tr>
                                                      <tr>
                                                        <td>Mary</td>
                                                        <td>Moe</td>
                                                        <td>mary@example.com</td>
                                                      </tr>
                                                      <tr>
                                                        <td>July</td>
                                                        <td>Dooley</td>
                                                        <td>july@example.com</td>
                                                      </tr>
                                                    </tbody>
                                                  </table>

                                                </div>
                                                 
                                            </div>
                                        
                                       </div>
            
                                    </div>
            
                                    <div class="tab-pane   pt-2" id="review" role="tabpanel">
            
                                        <div class="row">
                                            <div class=" col-md-12">
            
                                                    <div class="p-3">
                                                        <h4 class=" real-gen-color " >Be the first to review “Business Cards” </h4>
                                                    </div>
                                                    
                                                    <table width="100%">


                                                      <div class="col-md-9 col-md-offset-0">
                                                        <tr><td width="77%">
                                                        <div class="">
                                                        <form class="form-horizontal" action="#." method="post">
                                                            


{/* <!-- Name input--> */}
<div class="form-group">
    <label class="col-md-3 control-label real-gen-color" for="name">Full Name</label>
    <div class="col-md-9">
        <input id="name" name="name" type="text" placeholder="Your name" class="form-control" />
    </div>
</div>

{/* <!-- Email input--> */}
<div class="form-group">
    <label class="col-md-3 control-label real-gen-color" for="email">Your E-mail</label>
    <div class="col-md-9">
        <input id="email" name="email" type="text" placeholder="Your email" class="form-control" />
    </div>
</div>

{/* <!-- Message body --> */}
<div class="form-group">
    <label class="col-md-3 control-label real-gen-color" for="message">Your message</label>
    <div class="col-md-9">
        <textarea class="form-control" id="message" name="message" placeholder="Please enter your feedback here..." rows="5"></textarea>
    </div>
</div>

{/* <!-- Rating --> */}
<div class="form-group">
    <label class="col-md-3 control-label real-gen-color" for="email">
        <p class="counterW">score: <span class="scoreNow">3</span> out of <span>5</span></p>
    </label>
    <div class="col-md-9">

        <ul class="ratingW">
            <li class="on"><a href="javascript:void(0);"><div class="star"></div></a></li>
            <li class="on"><a href="javascript:void(0);"><div class="star"></div></a></li>
            <li class="on"><a href="javascript:void(0);"><div class="star"></div></a></li>
            <li><a href="javascript:void(0);"><div class="star"></div></a></li>
            <li><a href="javascript:void(0);"><div class="star"></div></a></li>
        </ul>

    </div>
</div>

<div class="form-group mt-5">
    <div class="col-md-10 text-center">
        <button type="submit" class="description-box hvr-bounce-to-right ">Submit</button>
    </div>
</div>



</form>

                                                        </div>
                                                        
                                                   
                                                    </td>
                                                    </tr>
                                                    </div>
                                                    </table>
                                               
                                               
                                                
                                                
                                            </div>
            
                                        </div>
                                        
                                    </div>
                                    
                                    <div class="tab-pane  pt-2 " id="upload" role="tabpanel">
                                        <div class="row">
                                            <div class=" col-md-12">
            
                                                <p class=" mt-4 real-gen-color mb-4"> We accept artwork files in the following formats: </p>  
                                                <p class=" mt-4 real-gen-color "> PDF, EPS, AI, TIFF, PSD, PNG </p>  
                                                <p class=" mt-4 real-gen-color "> Your artwork should be created in CMYK mode and 100-300 dpi quality. If you are using vector files like PDF, AI,
                                                     or EPS please outline all fonts. When you upload a PSD file please merge all visible layers. Create your artwork files in the
                                                      exact size that you are ordering, with no bleed, and no crop marks. </p>  
                                                                               
            
                                           </div>
            
                                       </div>
                                        
                                    </div>
                                    
                                    
                                </div>
                                {/* <!-- tab content end --> */}
            
                            </div>
                            {/* <!-- card body end --> */}
                        </div>
                    </div>
                 </div>
            </div> 
            
            {/* <!-- colaps end  --> */}


            {/* <!-- Other category start here --> */}

 <div class="container">
    <div class="row">
        
        <div class="col-md-10 offset-md-1 mb-5">
            <h4 class="other-product hvr-underline-from-center mb-1"> Other Products</h4>
        </div>

            {/* <!-- popular product --> */}
        {/* <!-- popup modal --> */}

        {/* <!-- The Modal --> */}
        <div id="myModal" class="modal">

            {/* <!-- The Close Button --> */}
            <span class="close">&times;</span>
        
            {/* <!-- Modal Content (The Image) --> */}
            <img class="modal-content" id="img01" />
        
            {/* <!-- Modal Caption (Image Text) --> */}
            <div id="caption"></div>
        </div> 
        
        <div class="col-md-3 offset-md-1 popular-back">
            <div  class="item"  ><img src="assets/img/banner-image.jpg" class="popular-pro-img img-responsive hvr-grow " height="200px" id="myImg" alt="Banner" /></div>
            <p class="hvr-forward"  > <a href="banner.html"> Banner</a> <i class="fa fa-arrow-circle-right  px-2"></i> </p>
        </div>
        <div class="col-md-3 offset-md-1 popular-back">
            <div  class="item"  ><img src="assets/img/t-shirt-design.jpg" class="popular-pro-img img-responsive hvr-grow " height="200px" id="myImg2" alt="T-Shirts" /></div>
            <p class="hvr-forward"  > <a href="shirt.html">T-Shirts</a>  <i class="fa fa-arrow-circle-right px-2"></i> </p>
        </div>
        <div class="col-md-3 offset-md-1 popular-back">
            <div  class="item"  ><img src="assets/img/Bill-board.png" class="popular-pro-img img-responsive hvr-grow " height="200px" id="myImg3" alt="Flyers" /></div>
            <p class="hvr-forward"  > <a href="banner.html">Flyers</a>  <i class="fa fa-arrow-circle-right px-2"></i> </p>
        </div>

        <div class="col-md-3 offset-md-1 popular-back  d-none ">
            <div  class="item"  ><img src="assets/img/vehicle-branding-images.png" class="popular-pro-img img-responsive hvr-grow " height="200px" id="myImg4" alt="Vehicle Branding " /></div>
            <p class="hvr-forward"  > <a href="banner.html"> Vehicle Branding</a> <i class="fa fa-arrow-circle-right px-2"></i> </p>
        </div>
        <div class="col-md-3 offset-md-1 popular-back  d-none ">
            <div  class="item"  ><img src="assets/img/hard-cover-notepad.jpg" class="popular-pro-img img-responsive hvr-grow " height="200px" id="myImg5" alt="Hard Cover Notepad" /></div>
            <p class="hvr-forward"  > <a href="business-card.html">Hard Cover Notepad</a> <i class="fa fa-arrow-circle-right px-2"></i> </p>
        </div>
        <div class="col-md-3 offset-md-1 popular-back  d-none ">
            <div  class="item"  ><img src="assets/img/id-card.jpg" class="popular-pro-img img-responsive hvr-grow " height="200px" id="myImg6" alt="ID Card" /></div>
            <p class="hvr-forward"  > <a href="business-card.html">ID Card </a> <i class="fa fa-arrow-circle-right px-2"></i> </p>
        </div>

        <div class="col-md-3 offset-md-1 popular-back  d-none ">
            <div  class="item"  ><img src="assets/img/Bottle.png" class="popular-pro-img img-responsive hvr-grow " height="200px" id="myImg7" alt="Vehicle Branding" /></div>
            <p class="hvr-forward"  > <a href="banner.html">Bottle Branding</a>  <i class="fa fa-arrow-circle-right px-2"></i> </p>
        </div>
        <div class="col-md-3 offset-md-1 popular-back  d-none ">
            <div  class="item"  ><img src="assets/img/business-card.png" class="popular-pro-img img-responsive hvr-grow " height="200px" id="myImg8" alt="Business Card" /></div>
            <p class="hvr-forward"  > <a href="business-card.html"> Business Card</a><i class="fa fa-arrow-circle-right px-2"></i> </p>
        </div>
        <div class="col-md-3 offset-md-1 popular-back  d-none ">
            <div  class="item"  ><img src="assets/img/carrier-bags.jpg" class="popular-pro-img img-responsive hvr-grow " height="200px" id="myImg9" alt="Carrier Bag" /></div>
            <p class="hvr-forward"  > <a href="shirt.html">Carrier Bag</a> <i class="fa fa-arrow-circle-right px-2"></i> </p>
        </div>


     </div>  
</div>

  {/* <!-- other product end --> */}



       </div>
       {/* <!-- div md-9 end --> */}

        <div class="col-md-2 ">

                <div class="cont-stick-pr2 sticky-md-non">
                    <div>
                        <h4 class="side-content">How is your website’s SEO?</h4>
                        <p class="side-more-text">
                            Use our free tool to get your score calculated in under 60 seconds.
                        </p>
                    </div>
                    <form role="form">
                        <div class="form-group seo-div-group">
                          <input type="text" placeholder="http://your-url.com" class="form-control" id="email" />
                        </div>
                        <button type="submit" class="get-seo-btn">Get Your SEO Score</button>
                    </form>
                </div>

                <div class="cont-stick-pr2 sticky-md-non">
                    <div>
                        <h4 class="side-content-ai">AI POWERED SOCIAL ACCOUNT GROWTH CALCULATOR</h4>
                        <p class="side-more-text-ai">
                            Enter your Social Account, we will provide you with helpful tips, tricks and growth estimations
                        </p>
                        <p class="text-white text-center" style={{fontSize: "10px;", padding: "7px;"}}>
                            100% free to use - Powered by AI
                        </p>
                    </div>
                    <form role="form">
                        <div class="form-group seo-div-group">
                          <input type="text" placeholder="FB or IG Url" class="form-control" id="email" />
                        </div>
                        <button type="submit" class="get-seo-btn">Get Started</button>
                    </form>
                </div>

                <div class="cont-stick-pr">
                    <h4 class="call-strategy-pr text-white">Can't find your order?</h4>
                    <h6 class="call-strategy-pr-desc">Request a Free Quote.</h6>
                    <p class="p-request-pr wow animate__fadeInRight" data-wow-duration=".5s">1. We will discuss your business and marketing goals. </p>
                    <p class="p-request-pr wow animate__fadeInRight" data-wow-duration=".5s">2. How our unique profitability framework can be applied to your business. </p>
                    <p class="p-request-pr wow animate__fadeInRight" data-wow-duration=".5s">3. We’ll help you understand what questions you need to be asking in order to double or triple your sales and revenue </p>
                    <div class=" text-center ">
                       <a class="Request-Free-Qoute hvr-bounce-to-right mr-2" type="submit">Request Free Qoute</a> 
                    </div>
                </div>

        </div>

        {/* <!-- div md-3 end sticky --> */}

       

    

        </div>
        {/* <!-- row ends --> */}

   
    </div>

    {/* <!-- cont-fluid end --> */}

{/* <!-- </div> --> */}

{/* <!-- cont-a end --> */}

{/* <!-- fix bottom Add to cart--> */}

<div class="fixed-bottom fx-bottom-div">
     <div class="fix-bottom-h4">
         <div class="row">
             <div class="col-md-4">

                 <div class="row">
                     <div class="col-md-10 offset-md-1 product-text-aligns">
                        <img src="assets/img/t-shirt-design.jpg" height="50px" alt="" /> 
                        <span class="product-name"> Business Card </span>
                     </div>
                    
                 </div>
                
             </div>
             <div class="col-md-4">
                 <h4>Quantity</h4>
                 <p id="quantity-val"></p>
             </div>
             <div class="col-md-4">

                <div class="row">
                    <div class="col-md-6">
                       <h4 >&#8358; <span class="product-price2">30000</span></h4>
                    </div>
                    <div class="col-md-6">
                        <form role="form">
                            <button type="submit" class="add-to-cart" ata-name="card" data-price="" >Add to Cart</button>
                        </form>
                    </div>
                </div>

             </div>
         </div>
     </div>
</div>

        </div>
    );
}
 
export default Shop;