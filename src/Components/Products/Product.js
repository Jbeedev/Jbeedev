import { useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

import ProductBg from "../assets/Images/Printing-Services.png";
import BannerImg from "../assets/Images/banner-image.jpg";
import TshirtImg from "../assets/Images/t-shirt-design.jpg";
import FlyerImg from "../assets/Images/Bill-board.png";
import Shirt1 from "../assets/Images/banner-image.jpg";
import Shirt2 from "../assets/Images/vehicle-branding-images.png";
import Shirt3 from "../assets/Images/hard-cover-notepad.jpg";
import Shirt4 from "../assets/Images/Bottle.png";

const Products = () => {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  const [optionsTab, setOptionsTab] = useState(1);

  const changeToggle = (index) => {
    setOptionsTab(index);
  };

  const [checkBox, setCheckBox ] = useState();

  const checkBoxHandle = (index) => {
    setCheckBox(index);
  //   if (check)
    
  }

  return (
    <div>
      <header>
        <div class="container-fluid" style={{ maxWidth: "100%;" }}>
          <div class="row">
            <div
              class="col-md-12 bg-img-about"
              style={{ backgroundImage: `url( ${ProductBg})` }}
            >
              <div class="">
                <div class=" text-center text-uppercase ">
                  <h2 class="banner-h2-text hvr-underline-from-center">
                    Plans
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <div class="Business-Card-a"> */}
      <div class="container-fluid" style={{ marginTop: "50px" }}>
        <div class="row">
          <div class="col-md-10">
            <div class="row">
              <div class="col-md-5 offset-md-1">
                <div class="shirt-carousel">
                  <ul id="glasscase" class="gc-start">
                    <li>
                      <img
                        class="shirt-product-img"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                        alt="Text"
                        data-gc-caption="Your caption text"
                      />
                    </li>
                    <li>
                      <img class="shirt-product-img" src={Shirt1} alt="Text" />
                    </li>
                    <li>
                      <img class="shirt-product-img" src={Shirt2} />
                    </li>
                    <li>
                      <img class="shirt-product-img" src={Shirt3} alt="Text" />
                    </li>
                    <li>
                      <img class="shirt-product-img" src={Shirt4} alt="Text" />
                    </li>
                  </ul>
                </div>

                <div class="product-info">
                  <p>
                    
                    note that all prices advertised and referred to on our
                    website are exclusive of Value Added Tax (VAT). VAT is
                    chargeable and payable by the buyer/client at the same time
                    as the buyer/client pays the relevant fees.
                  </p>
                </div>
              </div>

              <div class="col-md-4 mt-3 product-md-style">
                <h2 class="product-name-pr">Products</h2>
                <h4 class="product-price"> &#x20A6; 30,000 </h4>
                <p>
                  
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate consequatur sunt hic distinctio, natus labore quo,
                  nobis tenetur ut sapiente ex modi quasi voluptates ratione
                  maxime explicabo, nesciunt et est.
                </p>

                <div>
                  <p>
                    <i class="fa fa-check-circle mr-2"></i>2 x 5 feet
                  </p>
                  <p>
                    <i class="fa fa-check-circle mr-2"></i>High Quality
                  </p>
                  <p>
                    <i class="fa fa-check-circle mr-2"></i>Easy to set up
                  </p>
                </div>

                <form action="" method="post">
                  <div class="form-group mt-3">
                    <label for="design">
                      
                      <h5> Do you have a design?</h5>
                    </label>
                    <select class="form-control custom-select" id="design101">
                      <option selected>Select</option>
                      <option value="yes-design">Yes</option>
                      <option value="design-for-me">No (Design for me)</option>
                      <option value="design-for-me">Check out</option>
                    </select>

                    <div class="row">
                      <div class="col-md-8">
                        <input
                          type="file"
                          class="form-control mt-3 "
                          id="upload-file-p"
                        />
                        <div id="upload-file-p" class="ml-1 mt-3">
                          <p>
                            <i class="far fa-check-circle mr-2"></i>Upload your
                            design
                          </p>
                          <p>
                            <i class="far fa-check-circle mr-2"></i>Your file
                            should not be more than (200mb)
                          </p>
                        </div>
                      </div>

                      <div class="col-md-12">
                        <textarea
                          name=""
                          class=" form-control mt-3"
                          id="design-for-me"
                          cols="30"
                          rows="10"
                        >
                          (1) Tell us about your Business. (2) Describe design
                          specification.
                        </textarea>
                      </div>
                    </div>
                  </div>
                  <div class=" mt-4 d-none">
                    <button
                      class="add-to-cart-box add-to-cart hvr-bounce-to-right mr-2"
                      data-name="Shirt"
                      data-price="1.22"
                      type="submit"
                    >
                      Add to cart
                    </button>
                  </div>
                </form>
                <form action="" method="post">
                  <div class="form-group mt-3">
                    <label for="design">                    
                      <h5> Do you have a design?</h5>
                    </label>
                    <select class="form-control custom-select" id="design101">
                      <option selected>Select</option>
                      <option value="yes-design">Yes</option>
                      <option value="design-for-me">No (Design for me)</option>
                      <option value="design-for-me">Check out</option>
                    </select>
                  </div>                 
                </form>
                <form action="" method="post">
                  <div class="form-group mt-3">
                    <label for="design">                    
                      <h5> Select Thickness</h5>
                    </label>
                    <select class="form-control custom-select" id="design101">
                      <option selected>100mm</option>
                      <option value="yes-design">200mm</option>
                      <option value="design-for-me">300mm</option>
                      <option value="design-for-me">400mm</option>
                    </select>
                  </div>                 
                </form>
                <form action="" method="post">
                  <div class="form-group mt-3">
                    <label for="design">                    
                      <h5> Choose Quantity</h5>
                    </label>
                    <select class="form-control custom-select" id="design101">
                      <option selected>1 - 20</option>
                      <option value="yes-design">20 - 50</option>
                      <option value="design-for-me">50 - 100</option>
                      <option value="design-for-me">100 - 200</option>
                    </select>
                  </div>                 
                </form>
              </div>
            </div>

            {/* <!-- product and description row end --> */}

            <div class="container">
              <div class="row col-md-8 offset-md-2 input-group mb-3">
                <div class="col-md-4">
                  <button
                    class={
                      optionsTab === 1
                        ? "active-tab btn-lg rounded p-1"
                        : "btn btn-outline-primary rounded p-1"
                    }
                    onClick={() => changeToggle(1)}
                  >
                    Product
                  </button>
                </div>
                <div class="col-md-4">
                  <button
                    class={
                      optionsTab === 2
                        ? "active-tab btn-lg rounded p-1"
                        : "btn btn-outline-primary rounded p-1"
                    }
                    onClick={() => changeToggle(2)}
                  >
                    Select features
                  </button>
                </div>
                <div class="col-md-4">
                  <button
                    class={
                      optionsTab === 3
                        ? "active-tab btn-lg btn-outline-secodary rounded p-1"
                        : "btn btn-outline-primary rounded p-1"
                    }
                    onClick={() => changeToggle(3)}
                  >
                    Plans
                  </button>
                </div>
              </div>
            </div>

            <hr class="" />

            {/* Select features, Plans, tab component begins */}

            <div class="container">
              <div
                class={
                  optionsTab === 1 ? "container shadow rounded row col-md-6 offset-md-3 content-active" : "content"
                }
              >
                <label htmlFor="">Do you have a design for me</label>
                <select class="custom-select custom-select-sm mb-3">
                  <option selected>Select</option>
                  <option value="1">Yes</option>
                  <option value="2">No(Design for me)</option>
                </select>
                <label htmlFor="">Select Thickness</label>
                <select class="custom-select custom-select-sm mb-3">
                  <option selected>Select</option>
                  <option value="1">100</option>
                  <option value="2">200</option>
                  <option value="3">300</option>
                  <option value="4">400</option>
                  <option value="5">500</option>
                </select>
                <label htmlFor="">Choose Quantity</label>
                <select class="custom-select custom-select-sm mb-3">
                  <option selected>Select</option>
                  <option value="1">1 - 20</option>
                  <option value="2">21 - 40</option>
                  <option value="2">41 - 50</option>
                  <option value="2">51 - 60</option>
                </select>
                <div>
                  <label htmlFor="">Checkbox Hered</label>
                  <select class="custom-select mb-3" onClick = { () => checkBoxHandle(1) }>
                    <option selected>Select</option>
                  </select>
                  <div class={ checkBox === 1 ? "a-checkbox-active" : "a-checkbox"}>
                    <div for="1">
                      <input type="checkbox" />
                      <span> First Checkbox</span>
                    </div>
                    <div for="2">
                      <input type="checkbox" />
                      <span> First Checkbox</span>
                    </div>
                    <div for="3">
                      <input type="checkbox" />
                      <span> First Checkbox</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="">Checkbox Here</label>
                  <select class="custom-select custom-select-sm mb-3" onClick = { () => checkBoxHandle(2) }>
                    <option selected>Select</option>
                  </select>
                  <div class={ checkBox === 2 ? "a-checkbox-active" : "a-checkbox"}>
                    <div for="1">
                      <input type="radio" />
                      <span> First Checkbox</span>
                    </div>
                    <div for="2">
                      <input type="radio" />
                      <span> First Checkbox</span>
                    </div>
                    <div for="3">
                      <input type="radio" />
                      <span> First Checkbox</span>
                    </div>
                  </div>
                </div>
              </div>
              <section
                class={
                  optionsTab === 3 ? "container row col-md-10 offset-md-1 content-active" : "content"
                }
              >
                <div class="row">
                  <div class="col-md-4">
                    <div class="card ">
                      <div class="price-header mt-5">
                        <h4 class="text-center price-title bold">
                          Business Starter
                        </h4>
                      </div>
                      <div class="text-center mt-3">
                        <p class="text-center price">
                          $30<span class="price-currency"> usd</span>
                        </p>
                        <p class="price-duration">/user/month</p>
                      </div>
                      <div class="text-center mt-3">
                        <button class="p-2 rounded price-btn btn-primary">
                          Get started
                        </button>
                      </div>
                      <hr />
                      <div class="card-body ">
                        <ul class="list-unstyled list-body">
                          <li class="">
                            <i class="las la-check"></i> Custom and secure
                            business email
                          </li>
                          <li class="">
                            <i class="las la-check"></i> 100 participant video
                            meetings
                          </li>
                          <li class="">
                            <i class="las la-check"></i> 30 GB cloud storage per
                            user
                          </li>
                          <li class="">
                            <i class="las la-check"></i> Security and management
                            controls
                          </li>
                          <li class="">
                            <i class="las la-check"></i> Standard Support
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card ">
                      <div class="price-header mt-5">
                        <h4 class="text-center price-title bold">
                          Business Starter
                        </h4>
                      </div>
                      <div class="text-center mt-3">
                        <p class="text-center price">
                          $30<span class="price-currency"> usd</span>
                        </p>
                        <p class="price-duration">/user/month</p>
                      </div>
                      <div class="text-center mt-3">
                        <button class="p-2 rounded price-btn btn-primary">
                          Get started
                        </button>
                      </div>
                      <hr />
                      <div class="card-body ">
                        <ul class="list-unstyled list-body">
                          <li class="">
                            <i class="las la-check"></i> Custom and secure
                            business email
                          </li>
                          <li class="">
                            <i class="las la-check"></i> 100 participant video
                            meetings
                          </li>
                          <li class="">
                            <i class="las la-check"></i> 30 GB cloud storage per
                            user
                          </li>
                          <li class="">
                            <i class="las la-check"></i> Security and management
                            controls
                          </li>
                          <li class="">
                            <i class="las la-check"></i> Standard Support
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card ">
                      <div class="price-header mt-5">
                        <h4 class="text-center price-title bold">
                          Business Starter
                        </h4>
                      </div>
                      <div class="text-center mt-3">
                        <p class="text-center price">
                          $30<span class="price-currency"> usd</span>
                        </p>
                        <p class="price-duration">/user/month</p>
                      </div>
                      <div class="text-center mt-3">
                        <button class="p-2 rounded price-btn btn-primary">
                          Get started
                        </button>
                      </div>
                      <hr />
                      <div class="card-body ">
                        <ul class="list-unstyled list-body">
                          <li class="">
                            <i class="las la-check"></i> Custom and secure
                            business email
                          </li>
                          <li class="">
                            <i class="las la-check"></i> 100 participant video
                            meetings
                          </li>
                          <li class="">
                            <i class="las la-check"></i> 30 GB cloud storage per
                            user
                          </li>
                          <li class="">
                            <i class="las la-check"></i> Security and management
                            controls
                          </li>
                          <li class="">
                            <i class="las la-check"></i> Standard Support
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div
                class={
                  optionsTab === 2 ? "container row col-md-10 offset-md-1 content-active" : "content"
                }
              >
                <div class="shadow row rounded">
                  <h3>Specifications</h3>
                  <hr />
                  <div class="col-sm-6">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">KEY FEATURES</h5>
                        <hr />
                        <ul>
                          <li>Moring citrus taste</li>
                          <li>Brilliant tasting Gin</li>
                          <li>750ml</li>
                          <li>
                            Lorem ipsum dolor iendis minus inventore. Animi,
                            reiciendis iendis minus inventore. Animi,
                            reiciendis?
                          </li>
                          <li>Alcoholic drink</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">
                          SPECIFICATION
                          <hr />
                        </h5>

                        <ul>
                          <li>SKU:</li>
                          <li>Weight</li>
                          <li>Colour:</li>
                          <li>Main Material:</li>
                          <li>Shop type:</li>
                          <li>Nafdac No:</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Select features, Plans, tab component ends */}

            <hr class="mb-5" />

            {/* <!-- collaps cont start here --> */}

            <div class="container px-1 my-5">
              <div class="row">
                <div class="col-md-10 offset-md-1">
                  <div class="card card-tab-cont">
                    <div class="card-body p-b-0">
                      {/* <!-- Nav tabs --> */}
                      <ul class="nav nav-tabs customtab" role="tablist">
                        <li class="nav-item text-center">
                          
                          <p
                            class={
                              toggle === 1
                                ? "nav-link active home1"
                                : "nav-link home1"
                            }
                            onClick={() => toggleTab(1)}
                            data-toggle="tab"
                            role="tab"
                          >
                            <span class="hidden-sm-up"></span>
                            <span class="hidden-xs-down">Descriptions</span>
                          </p>
                        </li>
                        <li class="nav-item text-center">
                          
                          <p
                            class={
                              toggle === 2
                                ? "nav-link active req-sm-up"
                                : "nav-link req-sm-up"
                            }
                            onClick={() => toggleTab(2)}
                            data-toggle="tab"
                            role="tab"
                          >
                            <span class="hidden-sm-up"></span>
                            <span class="hidden-xs-down">Reviews</span>
                          </p>
                        </li>
                        <li class="nav-item text-center">
                          
                          <p
                            class={
                              toggle === 3 ? "nav-link active" : "nav-link"
                            }
                            onClick={() => toggleTab(3)}
                            data-toggle="tab"
                            role="tab"
                          >
                            <span class="hidden-sm-up"></span>
                            <span class="hidden-xs-down">Upload</span>
                          </p>
                        </li>
                      </ul>
                      {/* <!-- Tab panes --> */}
                      <div class="tab-content">
                        <div
                          class={
                            toggle === 1
                              ? "tab-pane tabs-content-active active mt-2"
                              : "tabs-content"
                          }
                          id="description"
                          role="tabpanel"
                        >
                          <div class="row">
                            <div class=" col-md-12">
                              <p class="mt-4 real-gen-color ">
                                Make an impressive business card with specialty
                                finish that stands out from the rest. Our
                                business cards comes in various options; Matt
                                Card with Matt Lamination
                              </p>
                              <p class=" real-gen-color "> Full-Color Print </p>
                              <p class="real-gen-color ">
                                
                                Available in Different Thickness (500gsm,
                                800gsm)
                              </p>
                              <p class="real-gen-color ">
                               
                                Front and Back Print with Special Effects Option
                              </p>
                              <p class="real-gen-color ">
                                
                                Minimum Order Quantity –
                                <strong> 100 Units </strong>
                              </p>
                              <p class="real-gen-color ">
                                
                                <Link
                                  to=""
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Contact us,
                                </Link>
                                for more inquiries.
                              </p>

                              <div class="ul-square-div">
                                <ul class="ul-sqaure real-gen-color">
                                  <li>Coffee</li>
                                  <li>Tea</li>
                                  <li>Coca Cola</li>
                                </ul>
                              </div>

                              <div>
                                <table
                                  class="table table-hover"
                                  style={{ color: "#1F4395;" }}
                                >
                                  <thead>
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

                        <div
                          class={
                            toggle === 2
                              ? "tab-pane tabs-content-active active pt-2"
                              : "tab-pane tabs-content pt-2"
                          }
                          id="review"
                          role="tabpanel"
                        >
                          <div class="row">
                            <div class=" col-md-12">
                              <div class="p-3">
                                <h4 class=" real-gen-color ">
                                  Be the first to review “Business Cards”
                                </h4>
                              </div>

                              <table width="100%">
                                <div class="col-md-9 col-md-offset-0">
                                  <tr>
                                    <td width="77%">
                                      <div class="">
                                        <form
                                          class="form-horizontal"
                                          action="#."
                                          method="post"
                                        >
                                          {/* <!-- Name input--> */}
                                          <div class="form-group">
                                            <label
                                              class="col-md-3 control-label real-gen-color"
                                              for="name"
                                            >
                                              Full Name
                                            </label>
                                            <div class="col-md-9">
                                              <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder="Your name"
                                                class="form-control"
                                              />
                                            </div>
                                          </div>

                                          {/* <!-- Email input--> */}
                                          <div class="form-group">
                                            <label
                                              class="col-md-3 control-label real-gen-color"
                                              for="email"
                                            >
                                              Your E-mail
                                            </label>
                                            <div class="col-md-9">
                                              <input
                                                id="email"
                                                name="email"
                                                type="text"
                                                placeholder="Your email"
                                                class="form-control"
                                              />
                                            </div>
                                          </div>

                                          {/* <!-- Message body --> */}
                                          <div class="form-group">
                                            <label
                                              class="col-md-3 control-label real-gen-color"
                                              for="message"
                                            >
                                              Your message
                                            </label>
                                            <div class="col-md-9">
                                              <textarea
                                                class="form-control"
                                                id="message"
                                                name="message"
                                                placeholder="Please enter your feedback here..."
                                                rows="5"
                                              ></textarea>
                                            </div>
                                          </div>

                                          {/* <!-- Rating --> */}
                                          <div class="form-group">
                                            <label
                                              class="col-md-3 control-label real-gen-color"
                                              for="email"
                                            >
                                              <p class="counterW">
                                                score:
                                                <span class="scoreNow">3</span>
                                                out of <span>5</span>
                                              </p>
                                            </label>
                                            <div class="col-md-9">
                                              <ul class="ratingW">
                                                <li class="on">
                                                  <Link href="javascript:void(0);">
                                                    <div class="star"></div>
                                                  </Link>
                                                </li>
                                                <li class="on">
                                                  <Link href="javascript:void(0);">
                                                    <div class="star"></div>
                                                  </Link>
                                                </li>
                                                <li class="on">
                                                  <Link href="javascript:void(0);">
                                                    <div class="star"></div>
                                                  </Link>
                                                </li>
                                                <li>
                                                  <Link href="javascript:void(0);">
                                                    <div class="star"></div>
                                                  </Link>
                                                </li>
                                                <li>
                                                  <Link href="javascript:void(0);">
                                                    <div class="star"></div>
                                                  </Link>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>

                                          <div class="form-group mt-5">
                                            <div class="col-md-10 text-center">
                                              <button
                                                type="submit"
                                                class="description-box hvr-bounce-to-right "
                                              >
                                                Submit
                                              </button>
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

                        <div
                          class={
                            toggle === 3
                              ? "tab-pane tabs-content-active active pt-2"
                              : "tab-pane tabs-content pt-2"
                          }
                          id="upload"
                          role="tabpanel"
                        >
                          <div class="row">
                            <div class=" col-md-12">
                              <p class=" mt-4 real-gen-color mb-4">
                                
                                We accept artwork files in the following
                                formats:
                              </p>
                              <p class=" mt-4 real-gen-color ">
                                
                                PDF, EPS, AI, TIFF, PSD, PNG
                              </p>
                              <p class=" mt-4 real-gen-color ">
                                
                                Your artwork should be created in CMYK mode and
                                100-300 dpi quality. If you are using vector
                                files like PDF, AI, or EPS please outline all
                                fonts. When you upload a PSD file please merge
                                all visible layers. Create your artwork files in
                                the exact size that you are ordering, with no
                                bleed, and no crop marks.
                              </p>
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
                  <h4 class="other-product hvr-underline-from-center mb-1">
                    
                    Other Products
                  </h4>
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
                  <div class="item">
                    <img
                      src={BannerImg}
                      class="popular-pro-img img-responsive hvr-grow "
                      height="200px"
                      id="myImg"
                      alt="Banner"
                    />
                  </div>
                  <p class="hvr-forward">
                    
                    <Link to=""> Banner</Link>
                    <i class="fa fa-arrow-circle-right  px-2"></i>
                  </p>
                </div>
                <div class="col-md-3 offset-md-1 popular-back">
                  <div class="item">
                    <img
                      src={TshirtImg}
                      class="popular-pro-img img-responsive hvr-grow "
                      height="200px"
                      id="myImg2"
                      alt="T-Shirts"
                    />
                  </div>
                  <p class="hvr-forward">
                    
                    <Link to="">T-Shirts</Link>
                    <i class="fa fa-arrow-circle-right px-2"></i>
                  </p>
                </div>
                <div class="col-md-3 offset-md-1 popular-back">
                  <div class="item">
                    <img
                      src={FlyerImg}
                      class="popular-pro-img img-responsive hvr-grow "
                      height="200px"
                      id="myImg3"
                      alt="Flyers"
                    />
                  </div>
                  <p class="hvr-forward">
                    
                    <Link to="">Flyers</Link>
                    <i class="fa fa-arrow-circle-right px-2"></i>
                  </p>
                </div>

                <div class="col-md-3 offset-md-1 popular-back  d-none ">
                  <div class="item">
                    <img
                      src="assets/img/vehicle-branding-images.png"
                      class="popular-pro-img img-responsive hvr-grow "
                      height="200px"
                      id="myImg4"
                      alt="Vehicle Branding"
                    />
                  </div>
                  <p class="hvr-forward">
                    
                    <Link to=""> Vehicle Branding</Link>
                    <i class="fa fa-arrow-circle-right px-2"></i>
                  </p>
                </div>
                <div class="col-md-3 offset-md-1 popular-back  d-none ">
                  <div class="item">
                    <img
                      src="assets/img/hard-cover-notepad.jpg"
                      class="popular-pro-img img-responsive hvr-grow "
                      height="200px"
                      id="myImg5"
                      alt="Hard Cover Notepad"
                    />
                  </div>
                  <p class="hvr-forward">
                    
                    <Link to="">Hard Cover Notepad</Link>
                    <i class="fa fa-arrow-circle-right px-2"></i>
                  </p>
                </div>
                <div class="col-md-3 offset-md-1 popular-back  d-none ">
                  <div class="item">
                    <img
                      src="assets/img/id-card.jpg"
                      class="popular-pro-img img-responsive hvr-grow "
                      height="200px"
                      id="myImg6"
                      alt="ID Card"
                    />
                  </div>
                  <p class="hvr-forward">
                    
                    <Link to="">ID Card </Link>
                    <i class="fa fa-arrow-circle-right px-2"></i>
                  </p>
                </div>

                <div class="col-md-3 offset-md-1 popular-back  d-none ">
                  <div class="item">
                    <img
                      src="assets/img/Bottle.png"
                      class="popular-pro-img img-responsive hvr-grow "
                      height="200px"
                      id="myImg7"
                      alt="Vehicle Branding"
                    />
                  </div>
                  <p class="hvr-forward">
                    
                    <Link to="">Bottle Branding</Link>
                    <i class="fa fa-arrow-circle-right px-2"></i>
                  </p>
                </div>
                <div class="col-md-3 offset-md-1 popular-back  d-none ">
                  <div class="item">
                    <img
                      src="assets/img/business-card.png"
                      class="popular-pro-img img-responsive hvr-grow "
                      height="200px"
                      id="myImg8"
                      alt="Business Card"
                    />
                  </div>
                  <p class="hvr-forward">
                    
                    <Link to=""> Business Card</Link>
                    <i class="fa fa-arrow-circle-right px-2"></i>
                  </p>
                </div>
                <div class="col-md-3 offset-md-1 popular-back  d-none ">
                  <div class="item">
                    <img
                      src="assets/img/carrier-bags.jpg"
                      class="popular-pro-img img-responsive hvr-grow "
                      height="200px"
                      id="myImg9"
                      alt="Carrier Bag"
                    />
                  </div>
                  <p class="hvr-forward">
                    
                    <Link to="">Carrier Bag</Link>
                    <i class="fa fa-arrow-circle-right px-2"></i>
                  </p>
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
                  Use our free tool to get your score calculated in under 60
                  seconds.
                </p>
              </div>
              <form role="form">
                <div class="form-group seo-div-group">
                  <input
                    type="text"
                    placeholder="http://your-url.com"
                    class="form-control"
                    id="email"
                  />
                </div>
                <button type="submit" class="get-seo-btn">
                  Get Your SEO Score
                </button>
              </form>
            </div>

            <div class="cont-stick-pr2 sticky-md-non">
              <div>
                <h4 class="side-content-ai">
                  AI POWERED SOCIAL ACCOUNT GROWTH CALCULATOR
                </h4>
                <p class="side-more-text-ai">
                  Enter your Social Account, we will provide you with helpful
                  tips, tricks and growth estimations
                </p>
                <p
                  class="text-white text-center"
                  style={{ fontSize: "10px", padding: "7px;" }}
                >
                  100% free to use - Powered by AI
                </p>
              </div>
              <form role="form">
                <div class="form-group seo-div-group">
                  <input
                    type="text"
                    placeholder="FB or IG Url"
                    class="form-control"
                    id="email"
                  />
                </div>
                <button type="submit" class="get-seo-btn">
                  Get Started
                </button>
              </form>
            </div>

            <div class="cont-stick-pr">
              <h4 class="call-strategy-pr text-white">
                Can't find your order?
              </h4>
              <h6 class="call-strategy-pr-desc">Request a Free Quote.</h6>
              <p
                class="p-request-pr wow animate__fadeInRight"
                data-wow-duration=".5s"
              >
                1. We will discuss your business and marketing goals.
              </p>
              <p
                class="p-request-pr wow animate__fadeInRight"
                data-wow-duration=".5s"
              >
                2. How our unique profitability framework can be applied to your
                business.
              </p>
              <p
                class="p-request-pr wow animate__fadeInRight"
                data-wow-duration=".5s"
              >
                3. We’ll help you understand what questions you need to be
                asking in order to double or triple your sales and revenue
              </p>
              <div class=" text-center ">
                <Link
                  class="Request-Free-Qoute hvr-bounce-to-right mr-2"
                  type="submit"
                >
                  Request Free Qoute
                </Link>
              </div>
            </div>
          </div>

          {/* <!-- div md-3 end sticky --> */}
        </div>
        {/* <!-- row ends --> */}
      </div>

      {/* <!-- cont-fluid end --> */}

      {/* <!-- fix bottom Add to cart--> */}

      <div class="fixed-bottom fx-bottom-div">
        <div class="fix-bottom-h4">
          <div class="row">
            <div class="col-md-4">
              <div class="row">
                <div class="col-md-10 offset-md-1 product-text-aligns">
                  <img
                    src="assets/img/t-shirt-design.jpg"
                    height="45px"
                    alt=""
                  />
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
                  <h4>
                    &#8358; <span class="product-price2">30000</span>
                  </h4>
                </div>
                <div class="col-md-6">
                  <form role="form">
                    <button
                      type="submit"
                      class="add-to-cart"
                      ata-name="card"
                      data-price=""
                    >
                      Add to Cart
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
