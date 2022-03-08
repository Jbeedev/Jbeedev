import BrandImg3 from '../assets/Images/Printing-Services.png';

const Shirt = () => {
    return (
        <div>

              <header>
                <div class="container-fluid" style={{backgroundImage: `url( ${ BrandImg3})`, maxWidth: "100%;" }}>
                    <div class="row">
                        <div class="col-md-12 bg-img-about">
                            <div class="">
                                <div class=" text-center text-uppercase ">
                                    <h2 class="banner-h2-text hvr-underline-from-center">T-Shirt</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <header>
        <div class="container-fluid" style={{maxWidth: '100%'}}>
            <div class="row">
                <div class="col-md-12 bg-img-about">
                    <div class="">
                        <div class=" text-center text-uppercase ">
                            <h2 class="banner-h2-text hvr-underline-from-center">T-Shirt</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>




<div class="container">
    <div class="row">
        
                <div class="col-md-3" id="bus-card">  
                    <div class="card print-cate-size">
                        <img src="assets/img/hard-cover-notepad.jpg" class="card-img-top" alt="" /> 
                        <div class="card-body text-center">
                          <h6 class="cartegory-box hvr-bounce-to-right">Custom T-Shirt</h6>
                        </div>
                      </div>    
                </div>
                <div class="col-md-3" id="die-cut"> 
                    <div class="card print-cate-size">
                        <img src="assets/img/hard-cover-notepad.jpg" class="card-img-top" alt="" />
                        <div class="card-body text-center">
                          <h6 class="cartegory-box hvr-bounce-to-right">Custom Jackets</h6>
                        </div>
                     </div>      
                </div>
                <div class="col-md-3" id="square-card"> 
                    <div class="card print-cate-size">
                        <img src="assets/img/hard-cover-notepad.jpg" class="card-img-top" alt="" />
                        <div class="card-body text-center">
                          <h6 class="cartegory-box hvr-bounce-to-right">Polo Shirts</h6>
                        </div>
                     </div>      
                </div>
                <div class="col-md-3" id="trans-plastic"> 
                    <div class="card print-cate-size">
                        <img src="assets/img/hard-cover-notepad.jpg" class="card-img-top" alt="" />
                        <div class="card-body text-center">
                          <h6 class="cartegory-box hvr-bounce-to-right">Sublime T-shirt</h6>
                        </div>
                     </div>      
                </div>
    </div>
</div>


{/* <!-- cont-a --> */}

<div class="Business-Card-a">

<div class="container">

    <div class="row">
        <div class="col-md-5 offset-md-1">

            <div class="shirt-carousel">

                <ul id="glasscase" class="gc-start">
                    <li><img class="shirt-product-img" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" alt="Text" data-gc-caption="T-shirt" /></li>
                    <li><img class="shirt-product-img" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" alt="Text" /></li>
                    <li><img class="shirt-product-img" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" /></li>
                    <li><img class="shirt-product-img" src="https://source.unsplash.com/featured?teChnology" alt="Text" /></li>
                    <li><img class="shirt-product-img" src="https://source.unsplash.com/featured?teChnology" alt="Text" /></li>
                    <li><img class="shirt-product-img" src="https://source.unsplash.com/featured?teChnology" alt="Text" /></li>
                </ul>

            </div>   

       </div>

       <div class="col-md-5 offset-md-1 mt-3 product-md-style  product-md-style  product-md-style">

            <h2 class="product-name-pr" >Custom T-Shirt</h2>
            <h4> &#x20A6; 3,500</h4>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequatur sunt hic distinctio, natus labore quo,
                 nobis tenetur ut sapiente ex modi quasi voluptates ratione maxime explicabo, nesciunt et est. </p>
                
            <div>
                <p><i class="far fa-check-circle mr-2"></i>Flex heat transfer</p>
                <p><i class="far fa-check-circle mr-2"></i>Screen print</p>
                <p><i class="far fa-check-circle mr-2"></i>Front only print</p>
            </div>

            <div>
                <p><strong>minimum order Quantity - 5 units</strong></p>

            </div>

            <form action="" method="post">
                <div class="form-group">
                    <label for="quantity">Choose Quantity</label>
                    <select class="form-control" id="sel1">
                      <option>select an option</option>
                      <option>1 - 20</option>
                      <option>20 - 50</option>
                      <option>50 - 100</option>
                    </select>
                  </div>

                  <div class="mt-3">
                    <label for="size"> <strong>Choose a size</strong> </label>
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
                            <input type="checkbox" id="one" /> <span class="ml-2 my-1"> First checkbox</span></label>
                          <label for="two">
                            <input type="checkbox" id="two" /> <span class="ml-2 my-1"> Second checkbox</span></label>
                          <label for="three">
                            <input type="checkbox" id="three" /> <span class="ml-2 my-1">Third checkbox</span></label>
                        </div>
                      </div>     

                  </div>
                  
                 
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



                  
                <div class=" mt-4">
                    <button class="add-to-cart-box hvr-bounce-to-right mr-2" type="submit">Add to cart</button> 
                </div>

            </form>


        </div>

   
  </div>
</div>

{/* <!-- collaps --> */}


<div class="container px-1 my-5">
    <div class="row">
        <div class="col-md-12">
            <div class="card card-tab-cont " >
                <div class="card-body p-b-0">
                    {/* <!-- Nav tabs --> */}
                    <ul class="nav nav-tabs customtab" role="tablist">
                        <li class="nav-item text-center"> <a class="nav-link active home1" data-toggle="tab" href="#description" role="tab"><span class="hidden-sm-up"></span> <span class="hidden-xs-down">Descriptions</span></a></li>
                        <li class="nav-item text-center"> <a class="nav-link req-sm-up" data-toggle="tab" href="#review" role="tab"><span class="hidden-sm-up"></span> <span class="hidden-xs-down">Reviews</span></a> </li>
                        <li class="nav-item text-center"> <a class="nav-link" data-toggle="tab" href="#upload" role="tab"><span class="hidden-sm-up"></span> <span class="hidden-xs-down">Upload</span></a> </li>
                    </ul>
                    {/* <!-- Tab panes --> */}
                    <div class="tab-content">
                        <div class="tab-pane active mt-2" id="description" role="tabpanel">table
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
          <tr>
            <td width="77%">
              <div>
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
                  </div>
                  <div class="col-md-9">
                    <ul class="ratingW">
                      <li class="on"><a href="javascript:void(0);"><div class="star"></div></a></li>
                      <li class="on"><a href="javascript:void(0);"><div class="star"></div></a></li>
                      <li class="on"><a href="javascript:void(0);"><div class="star"></div></a></li>
                      <li><a href="javascript:void(0);"><div class="star"></div></a></li>
                      <li><a href="javascript:void(0);"><div class="star"></div></a></li>
                    </ul>
                  </div>
                  <div class="form-group mt-5">
                    <div class="col-md-10 text-center">
                      <button type="submit" class="add-to-cart-box hvr-bounce-to-right ">Submit</button>
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

</div>

{/* <!-- cont-a ends --> */}


{/* <!-- cont-b --> */}

<div class="Business-Card-b">

    <div class="container">
    
        <div class="row">
            <div class="col-md-5 offset-md-1">
    
                <div class="shirt-carousel">
    
                    <ul id="glasscase" class="gc-start">
                        <li><img class="shirt-product-img" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" alt="Text" data-gc-caption="Your caption text" /></li>
                        <li><img class="shirt-product-img" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" alt="Text" /></li>
                        <li><img class="shirt-product-img" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" /></li>
                        <li><img class="shirt-product-img" src="https://source.unsplash.com/featured?teChnology" alt="Text" /></li>
                        <li><img class="shirt-product-img" src="https://source.unsplash.com/featured?teChnology" alt="Text" /></li>
                        <li><img class="shirt-product-img" src="https://source.unsplash.com/featured?teChnology" alt="Text" /></li>
                    </ul>
    
                </div>   
    
           </div>
    
           <div class="col-md-5 offset-md-1 mt-3 product-md-style  product-md-style ">
    
                <h2 class="product-name-pr" >Custom Jacket</h2>
                <h4> &#x20A6; 3,500</h4>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequatur sunt hic distinctio, natus labore quo,
                     nobis tenetur ut sapiente ex modi quasi voluptates ratione maxime explicabo, nesciunt et est. </p>
                    
                <div>
                    <p><i class="far fa-check-circle mr-2"></i>Flex heat transfer</p>
                    <p><i class="far fa-check-circle mr-2"></i>Screen print</p>
                    <p><i class="far fa-check-circle mr-2"></i>Front only print</p>
                </div>
    
                <div>
                    <p><strong>minimum order Quantity - 5 units</strong></p>
    
                </div>
                
                <form action="" method="post">
                    <div class="form-group">
                        <label for="quantity">Choose Quantity</label>
                        <select class="form-control" id="sel1">
                          <option>select an option</option>
                          <option>1 - 20</option>
                          <option>20 - 50</option>
                          <option>50 - 100</option>
                        </select>
                      </div>
    
                      <div class="mt-3">
                        <label for="size"> <strong>Choose a size</strong> </label>
                      </div>

                      <div class="row mt-1">

                        <div class="multiselect">
                            <div class="selectBox" onclick="showCheckboxes2()">
                              <select  class="form-control" >
                                <option>Select an option</option>
                              </select>
                              <div class="overSelect"></div>
                            </div>
                            <div id="checkboxes2">
                              <label for="one">
                                <input type="checkbox" id="one" /> <span class="ml-2 my-1"> First checkbox</span></label>
                              <label for="two"><input type="checkbox" id="two" /> <span class="ml-2 my-1"> Second checkbox</span></label>
                              <label for="three"><input type="checkbox" id="three" /> <span class="ml-2 my-1">Third checkbox</span></label>
                            </div>
                          </div>
    
                          
    
                      </div>
                      
                     
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
                                <textarea name=""  class=" form-control mt-3" id="design-for-me-b" cols="30" rows="10">(1) Tell us about your Business. (2) Describe design specification. (3) Phone No. </textarea>
                             </div>
    
                          </div>
    
                      </div>
    
    
    
                      
                    <div class=" mt-4">
                        <button class="add-to-cart-box hvr-bounce-to-right mr-2" type="submit">Add to cart</button> 
                    </div>
    
                </form>
    
    
            </div>
    
       
      </div>
    </div>
    
    {/* <!-- collaps --> */}
    
    
    <div class="container px-1 my-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card card-tab-cont "  >
                    <div class="card-body p-b-0">
                        {/* <!-- Nav tabs --> */}
                        <ul class="nav nav-tabs customtab" role="tablist">
                            <li class="nav-item text-center"> <a class="nav-link active home1" data-toggle="tab" href="#description-a" role="tab"><span class="hidden-sm-up"></span> <span class="hidden-xs-down">Descriptions</span></a> </li>
                            <li class="nav-item text-center"> <a class="nav-link req-sm-up" data-toggle="tab" href="#review-a" role="tab"><span class="hidden-sm-up"></span> <span class="hidden-xs-down">Reviews</span></a> </li>
                            <li class="nav-item text-center"> <a class="nav-link" data-toggle="tab" href="#upload-a" role="tab"><span class="hidden-sm-up"></span> <span class="hidden-xs-down">Upload</span></a> </li>
                        </ul>
                        {/* <!-- Tab panes --> */}
                        <div class="tab-content">
                            <div class="tab-pane active mt-2" id="description-a" role="tabpanel">
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
                                         
                                    </div>
                                
                               </div>
    
                            </div>
    
                            <div class="tab-pane   pt-2" id="review-a" role="tabpanel">
    
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
                                                          <button type="submit" class="add-to-cart-box hvr-bounce-to-right ">Submit</button>
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
                            
                            <div class="tab-pane  pt-2 " id="upload-a" role="tabpanel">
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
    
    </div>
    
    {/* <!-- cont-b ends --> */}


    {/* <!-- cont-c --> */}

<div class="Business-Card-c">

    <div class="container">
    
        <div class="row">
            <div class="col-md-5 offset-md-1">
    
                <div class="shirt-carousel">
    
                    <ul id="glasscase" class="gc-start">
                        <li><img class="shirt-product-img" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" alt="Text" data-gc-caption="Your caption text" /></li>
                        <li><img class="shirt-product-img" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" alt="Text" /></li>
                        <li><img class="shirt-product-img" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" /></li>
                        <li><img class="shirt-product-img" src="https://source.unsplash.com/featured?teChnology" alt="Text" /></li>
                        <li><img class="shirt-product-img" src="https://source.unsplash.com/featured?teChnology" alt="Text" /></li>
                        <li><img class="shirt-product-img" src="https://source.unsplash.com/featured?teChnology" alt="Text" /></li>
                    </ul>
    
                </div>   
    
           </div>
    
           <div class="col-md-5 offset-md-1 mt-3 product-md-style  product-md-style ">
    
                <h2 class="product-name-pr" >Polo Shirt</h2>
                <h4> &#x20A6; 3,500</h4>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequatur sunt hic distinctio, natus labore quo,
                     nobis tenetur ut sapiente ex modi quasi voluptates ratione maxime explicabo, nesciunt et est. </p>
                    
                <div>
                    <p><i class="far fa-check-circle mr-2"></i>Flex heat transfer</p>
                    <p><i class="far fa-check-circle mr-2"></i>Screen print</p>
                    <p><i class="far fa-check-circle mr-2"></i>Front only print</p>
                </div>
    
                <div>
                    <p><strong>minimum order Quantity - 5 units</strong></p>
    
                </div>
                
                <form action="" method="post">
                    <div class="form-group">
                        <label for="quantity">Choose Quantity</label>
                        <select class="form-control" id="sel1">
                          <option>select an option</option>
                          <option>1 - 20</option>
                          <option>20 - 50</option>
                          <option>50 - 100</option>
                        </select>
                      </div>
    
                      <div class="mt-3 form-group">
                        <label for="size"> <strong>Choose a size</strong> </label>
                    
                      <div class="row mt-1">

                        <div class="multiselect">
                            <div class="selectBox" onclick="showCheckboxes3()">
                              <select class="form-control" >  
                                <option>Select an option</option>
                              </select>
                              <div class="overSelect"></div>
                            </div>
                            <div id="checkboxes3">
                              <label for="one"> <input type="checkbox" id="one" /> <span class="ml-2 my-1"> First checkbox</span></label>
                              <label for="two"><input type="checkbox" id="two" /> <span class="ml-2 my-1"> Second checkbox</span></label>
                              <label for="three"><input type="checkbox" id="three" /> <span class="ml-2 my-1">Third checkbox</span></label>
                            </div>
                          </div>

                      </div>
                    </div>
                      
                     
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
                                <textarea name=""  class=" form-control mt-3" id="design-for-me-c" cols="30" rows="10">(1) Tell us about your Business. (2) Describe design specification. (3) Phone No. </textarea>
                             </div>
    
                          </div>
    
                      </div>
    
    
                      
                    <div class=" mt-4">
                        <button class="add-to-cart-box hvr-bounce-to-right mr-2" type="submit">Add to cart</button> 
                    </div>
    
                </form>
    
    
            </div>
    
       
      </div>
    </div>
    
    {/* <!-- collaps --> */}
    
    
    <div class="container px-1 my-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card card-tab-cont "  >
                    <div class="card-body p-b-0">
                        {/* <!-- Nav tabs --> */}
                        <ul class="nav nav-tabs customtab" role="tablist">
                            <li class="nav-item text-center"> <a class="nav-link active home1" data-toggle="tab" href="#description-b" role="tab"><span class="hidden-sm-up"></span> <span class="hidden-xs-down">Descriptions</span></a> </li>
                            <li class="nav-item text-center"> <a class="nav-link req-sm-up" data-toggle="tab" href="#review-b" role="tab"><span class="hidden-sm-up"></span> <span class="hidden-xs-down">Reviews</span></a> </li>
                            <li class="nav-item text-center"> <a class="nav-link" data-toggle="tab" href="#upload-b" role="tab"><span class="hidden-sm-up"></span> <span class="hidden-xs-down">Upload</span></a> </li>
                        </ul>
                        {/* <!-- Tab panes --> */}
                        <div class="tab-content">
                            <div class="tab-pane active mt-2" id="description-b" role="tabpanel">
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
                                         
                                    </div>
                                
                               </div>
    
                            </div>
    
                            <div class="tab-pane   pt-2" id="review-b" role="tabpanel">
    
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
                                                          <button type="submit" class="add-to-cart-box hvr-bounce-to-right ">Submit</button>
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
                            
                            <div class="tab-pane  pt-2 " id="upload-b" role="tabpanel">
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
    
    </div>
    
    {/* <!-- cont-c ends --> */}

    {/* <!-- cont-d --> */}

<div class="Business-Card-d">

    <div class="container">
    
        <div class="row">
            <div class="col-md-5 offset-md-1">
    
                <div class="shirt-carousel">
    
                    <ul id="glasscase" class="gc-start">
                        <li><img class="shirt-product-img" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" alt="Text" data-gc-caption="Your caption text" /></li>
                        <li><img class="shirt-product-img" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" alt="Text" /></li>
                        <li><img class="shirt-product-img" src="" /></li>
                        <li><img class="shirt-product-img" src="" alt="Text" /></li>
                        <li><img class="shirt-product-img" src="" alt="Text" /></li>
                        <li><img class="shirt-product-img" src="" alt="Text" /></li>
                    </ul>
    
                </div>   
    
           </div>
    
           <div class="col-md-5 offset-md-1 mt-3 product-md-style ">
    
                <h2 class="product-name-pr" >Sublime T-Shirt</h2>
                <h4> &#x20A6; 3,500</h4>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequatur sunt hic distinctio, natus labore quo,
                     nobis tenetur ut sapiente ex modi quasi voluptates ratione maxime explicabo, nesciunt et est. </p>
                    
                <div>
                    <p><i class="far fa-check-circle mr-2"></i>Flex heat transfer</p>
                    <p><i class="far fa-check-circle mr-2"></i>Screen print</p>
                    <p><i class="far fa-check-circle mr-2"></i>Front only print</p>
                </div>
    
                <div>
                    <p><strong>minimum order Quantity - 5 units</strong></p>
    
                </div>
                
                <form action="" method="post">
                    <div class="form-group">
                        <label for="quantity">Choose Quantity</label>
                        <select class="form-control" id="sel1">
                          <option>select an option</option>
                          <option>1 - 20</option>
                          <option>20 - 50</option>
                          <option>50 - 100</option>
                        </select>
                      </div>
    
                      <div class="mt-3">
                        <label for="size"> <strong>Choose a size</strong> </label>
                      </div>
                      <div class="row mt-1">
                        
                        <div class="multiselect">
                            <div class="selectBox" onclick="showCheckboxes4()">
                              <select class="form-control" >
                                <option >Select an option</option>
                              </select>
                              <div class="overSelect"></div>
                            </div>
                            <div id="checkboxes4">
                              <label for="one">
                                <input type="checkbox" id="one" /> <span class="ml-2 my-1"> First checkbox</span></label>
                              <label for="two">
                                <input type="checkbox" id="two" /> <span class="ml-2 my-1"> Second checkbox</span></label>
                              <label for="three">
                                <input type="checkbox" id="three" /> <span class="ml-2 my-1">Third checkbox</span></label>
                            </div>
                          </div>
                        
                      </div>
                      
                     
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
                                <textarea name=""  class=" form-control mt-3" id="design-for-me-d" cols="30" rows="10">(1) Tell us about your Business. (2) Describe design specification. (3) Phone No. </textarea>
                             </div>
    
                          </div>
    
                      </div>
    
    
    
                      
                    <div class=" mt-4">
                        <button class="add-to-cart-box hvr-bounce-to-right mr-2" type="submit">Add to cart</button> 
                    </div>
    
                </form>
    
    
            </div>
    
       
      </div>
    </div>
    
    {/* <!-- collaps --> */}
    
    
    <div class="container px-1 my-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card card-tab-cont "  >
                    <div class="card-body p-b-0">
                        {/* <!-- Nav tabs --> */}
                        <ul class="nav nav-tabs customtab" role="tablist">
                            <li class="nav-item text-center"> <a class="nav-link active home1" data-toggle="tab" href="#description-c" role="tab"><span class="hidden-sm-up"></span> <span class="hidden-xs-down">Descriptions</span></a> </li>
                            <li class="nav-item text-center"> <a class="nav-link req-sm-up" data-toggle="tab" href="#review-c" role="tab"><span class="hidden-sm-up"></span> <span class="hidden-xs-down">Reviews</span></a> </li>
                            <li class="nav-item text-center"> <a class="nav-link" data-toggle="tab" href="#upload-c" role="tab"><span class="hidden-sm-up"></span> <span class="hidden-xs-down">Upload</span></a> </li>
                        </ul>
                        {/* <!-- Tab panes --> */}
                        <div class="tab-content">
                            <div class="tab-pane active mt-2" id="description-c" role="tabpanel">
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
                                         
                                    </div>
                                
                               </div>
    
                            </div>
    
                            <div class="tab-pane   pt-2" id="review-c" role="tabpanel">
    
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
                                                          <button type="submit" class="add-to-cart-box hvr-bounce-to-right ">Submit</button>
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
                            
                            <div class="tab-pane  pt-2 " id="upload-c" role="tabpanel">
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
    
    </div>
    
    {/* <!-- cont-d ends --> */}
    
    
    


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


    <div class="container">

        <div class="row">
            <div class="text-center col-md-12 mb-5">
                <h4 class="why-you-choose hvr-underline-from-center mb-1">Product Category</h4>
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

        </div>
    );
}
 
export default Shirt;