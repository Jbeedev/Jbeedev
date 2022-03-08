import React from 'react'
import ContactImg from '../assets/Images/Printing-Services.png'


export default function Contact() {
    return (
        <div>

            <header>
                <div class="container-fluid" style={{maxWidth: "100%;"}}>
                    <div class="row">
                        <div class="col-md-12 bg-img-contact" style= {{backgroundImage: `url(${ContactImg})`}}>
                            <div class="">
                                <div class=" text-center text-uppercase ">
                                    <h2 class="banner-h2-text hvr-underline-from-center ">Contact Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div class="container-fluid mt-5 mb-2">
                <div class="row">
                    <div class="col-md-5 offset-md-1">
                        <h1 class="contact-h1">Want to Connect! Message Us</h1>
                        <div>
                            <form action="" method="post" role="form">
                                <div class="row">
                                    <div class="form-group col-md-6  ">
                                        <input type="text" placeholder="first name" class="form-control" id="" />
                                    </div>
                                    <div class="form-group col-md-6 ">
                                        <input type="text" placeholder="last name" class="form-control" id="" />
                                    </div>
                                    {/* <div class="form-group col-md-12 ">
                                        <input type="text" placeholder="phone number" class="form-control" id="" />
                                    </div> */}
                                    <div class="form-group col-md-12 ">
                                        <input type="email" placeholder="email" class="form-control" id="" />
                                    </div>
                                    <div class="form-group col-md-12 ">
                                        <select class="form-control" id="">
                                            <option disabled selected>Reason</option>
                                            <option value="Enquiry">Enquiry</option>
                                            <option value="Support">Support</option>
                                            <option value="Join Us">Join Us</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-12 ">
                                        <textarea name="" id="" class="form-control" cols="30" rows="10"></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" class="contact-submit hvr-bounce-to-right">Submit</button>
                                    </div>
                                </div>

                            </form>
                        </div>

                    </div>

                    <div class="col-md-5 offset-md-1">
                        
                        
                        <div  class="contact-right-div">
                            <p class="contact-p">Just send your message to connect with us</p>
                            <p class="contact-p">Have a question?</p>
                        </div>
                        
                
                        <div class="contact-content-cont">
                            <p><i class="fa fa-phone mr-2 text-dark"></i><a href="tel:+2348139251969">08139251969</a> </p>
                            <p><i class="fa fa-envelope mr-2 text-dark"></i><a href = "mailto:info@tenpluslabs.com?subject = Feedback&body = Message">
                                info@tenpluslabs.com </a> </p>
                            <p><i class="fa fa-map-marker mr-2 text-dark"></i><a href="https://goo.gl/maps/X9UebAW9PATQC66E9"> No. 29, University Road, Tanke, <br /> <span class="ml-4">Ilorin, Kwara State.</span> </a></p>
                        </div>
                        

                    </div>
                </div>
            </div>

      {/* <-- =========================
            Google Map
    =========================  --> */}
    
            

        </div>
    )
}
