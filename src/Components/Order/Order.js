
import React,{useEffect, useState} from 'react'
import OrderImg from '../assets/Images/Printing-Services.png'
import './Order.css'
//import ReadMoreReact from 'read-more-react';



// const ReadMore = ({ children }) => {

//     const form = children;
//     const [isReadMore, setIsReadMore] = useState(false);
//     const toggleReadMore = () => {
//       setIsReadMore(!isReadMore);
//     };

//     return (
//         <p className="form">
//           {isReadMore ? form.slice(0, 1500) : form}
//           <span onClick={toggleReadMore} className="read-or-hide">
//             {isReadMore ? "...read more" : " show less"}
//           </span>
//         </p>
//       );
//     };


const Order=()=> {
    const [isReadMore, setIsReadMore] = useState(false);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
   
      };
      const [IsLogin,SetIsLogin]=useState(true);

//for forms

      const getInitialState = () => {
        const value = "Orange";
        return value;
      };
    
      const [value, setValue] = useState(getInitialState);
    
      const handleChange = (e) => {
        setValue(e.target.value);
      };

      useEffect(()=>{
        if (IsLogin) {
            setIsReadMore(true)
        }
      },[])

    return (
        <div>
           
<header className="mb-5">
        <div className="container-fluid" style={{maxWidth: "100%;"}}>
            <div className="row">
                <div className="col-md-12 bg-img-about" style={{backgroundImage: `url(${OrderImg})`}}>
                    <div className="">
                        <div className=" text-center text-uppercase ">
                            <h2 className="banner-h2-text hvr-underline-from-center">Request A Qoute</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div className="container-fluid mt-5 mb-2">
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <div>
                    <h1 className="order-h1">To get more information about our request a qoute form, please complete <br /> the following information.</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                    
                            <div className={`${IsLogin && 'display-none'} "form-group col-sm-6 col-md-6"`}>
                          <label htmlFor="FirstName">First Name<br/>
                          <input  type="text" id="First Name" placeholder="First Name" className='first' name="Name" /></label>
                            </div>

                            <div className={`${IsLogin && 'display-none'} "form-group col-sm-6 col-md-6"`}>
                            <label htmlFor="LastName">Last Name<br/>
                          <input type="text" id="Last Name" placeholder="Last Name" name="Name" /></label>
                            </div>
                            <div className={`${IsLogin && 'display-none'} "form-group col-sm-6 col-md-6"`}>
                                    <label htmlFor="UserEmail">Email<br/>
                                    <input type="Text" id="UserEmail" placeholder="Email" name="email" /></label>
                                </div>

                                <div className={`${IsLogin && 'display-none'} "form-group col-sm-6 col-md-6"`}>
                                    <label htmlFor="UserEmail" >Phone Number<br/>
                                    <input type="text" id="PhoneNumber"   placeholder="phoneNumber" name="PhoneNumber" /></label>
                                </div>
                            <div className={`${IsLogin && 'display-none'} "form-group col-sm-6 col-md-6"`}>
                            <label htmlFor="LastName">Address<br/>
                          <input type="text1"id="Address" placeholder="Address" name="Name" /></label>
                            </div>
                           
                                 <div className={`${IsLogin && 'display-none'} "form-group col-sm-6 col-md-6"`}>
                                 <select value={value} placeholder='Country' onChange={handleChange}>
                                
                                 <option className="Orange">Country</option>
                                 <option value="Radish">USA</option>
                                 <option value="Cherry">Canada</option>
                                 <option value="Cherry">Australia</option>
                                 <input id="Country" placeholder="Country" name="Country" />
                                 </select>
                            
                                 </div>

                                 <div className={`${IsLogin && 'display-none'} "form-group col-sm-6 col-md-6"`}>
                                 <select value=""placeholder='Country' onChange={handleChange}>
                                 <option value="Orange">State</option>
                                 <option value="Radish">USA</option>
                                 <option value="Cherry">Canada</option>
                                 <option value="Cherry">Australia</option>
                                 <input id="Country" placeholder="Country" name="Country" />
                                 </select>
                            
                                 </div>
                
                    
                                
                            <span className={`${isReadMore === false && 'display-blocks'}`}>

                           <div className='city'>
                            <div className="form-group1 col-md-6">
                                <label htmlFor="LastName">City/Town<br/>
                                </label>
                                <input type="text2" id="Last Name"  name="Name" />
                            </div>


                            <div className="form-group2 col-md-6">
                                 
                                 <select value={value} onChange={handleChange}>
                                 <option value="Orange">State</option>
                                 <option value="Radish">USA</option>
                                 <option value="Cherry">Canada</option>
                                 <option value="Cherry">Australia</option>
                                 <input id="Country" placeholder="Country" name="Country" />
                                 </select>
                            
                            </div>
                            </div>
                                 

                            <div className='city'>
                                 <div className="form-group col-md-6">
                                 <label htmlFor="LastName">Scope of work</label>
                                 <textarea value="" placeholder="Enter Text Here" onChange={handleChange}>
                                 <option value="Orange">State</option>
                                 <option value="Radish">USA</option>
                                 <option value="Cherry">Canada</option>
                                 <option value="Cherry">Australia</option>
                                 <input id="Country" placeholder="Country" name="Country" />
                                 </textarea>
                            
                                 </div>
                                   
                                 <div className="form-group col-md-6">
                                 <label htmlFor="LastName">Additional Details</label>
                                 <textarea value="" placeholder="Enter Text Here" onChange={handleChange}>
                                 <option value="Orange">State</option>
                                 <option value="Radish">USA</option>
                                 <option value="Cherry">Canada</option>
                                 <option value="Cherry">Australia</option>
                                 <input id="Country" placeholder="Country" name="Country" />
                                 </textarea>
                                 </div>

                                 </div>
                                 <div className='city'>
                                 <div className="form-group col-md-6">
                            <label htmlFor="LastName">Target Audience<br/>
                          <input type="text" id="Last Name" placeholder='E.g Business,Student,Age,Catergory etc' name="Name" /></label>
                            </div>

                            
                            <div className="form-group col-md-6">
                            <label htmlFor="LastName">Target Audience Size<br/>
                          <input type="text" id="Last Name" placeholder='E.g 50000' name="Name" /></label>
                            </div>




                              </div>
                            </span>
                           
                            <div className="text-center mt-4">
                            <button type="submit" className="order-submit hvr-bounce-to-right"> <span onClick={toggleReadMore}>Place Your Order</span></button>
                        </div>
                            {/*}
                            </div>
                            <div className="form-group col-md-12  ">
                                <label className="order-label-cust" for="address">Address</label>
                                <input type="text" placeholder="address" className="form-control" id="" />
                            </div>
                            <div className="form-group col-md-6 ">
                                <select onchange="initStates()" id="country-select" className="form-control" name="country" required>
                                    <option selected disabled>Country</option>
                                  </select>
                            </div>
                            <div className="form-group col-md-6 ">
                                <select id="state-select" name="state" className="form-control" required>
                                    <option selected disabled>State</option>
                                </select>
                            </div>
                           
                            <ReadMore> 
                              <div className="form-group col-md-6 ">
                           
                                <label className="order-label-cust" for="city">City/Town</label>
                                <input type="text"  className="form-control" id="" />
                            </div>
                            <div className="form-group col-md-6 ">
                                <label className="order-label-cust" for="produc">Product/Service</label>
                                <select className="form-control" id="">
                                    <option value="" disabled selected>Select a service</option>
                                    <option value="1">Web Development</option>
                                    <option value="2">Mobile App Development</option>
                                    <option value="3">Digital Marketing</option>
                                    <option value="4">Data Science</option>
                                    <option value="5">Machine Learning</option>
                                    <option value="6">Graphic Design</option>
                                    <option value="7">Video Editing</option>
                                    <option value="8">Project Management</option>
                                    <option value="9">CyberSecurity</option>
                                    <option value="10">Consulting</option>
                                  </select>
                            </div>
                            
                            <div className="form-group col-md-6 ">
                                <label className="order-label-cust" for="scope">Scope of Work</label>
                                <textarea name="" className="form-control" id="" cols="30" rows="4"></textarea>
                            </div>
                            <div className="form-group col-md-6 ">
                                <label className="order-label-cust" for="addition">Additional Details <span className="click-h-order" data-toggle="modal" data-target="#add-details" >click here</span> </label>
                                <textarea name="" className="form-control" id="" cols="30" rows="4"></textarea>
                            </div>
                            <div className="form-group col-md-6 ">
                                <label className="order-label-cust" for="about_business">About Your Business</label>
                                 <textarea name="" className="form-control" id="" cols="30" rows="4"></textarea>
                            </div>
                            <div className="form-group col-md-6 ">
                                <label className="order-label-cust" for="competitor">Competitor</label>
                                 <textarea name="" className="form-control" id="" cols="30" rows="4"></textarea>
                            </div>
                            <div className="form-group col-md-6 ">
                                <label className="order-label-cust" for="target_audience">Target Audience</label>
                                <input type="text" placeholder="E.g Business, student, age, category etc " className="form-control" id="" />
                            </div>
                            <div className="form-group col-md-6 ">
                                <label className="order-label-cust" for="target_audience_size">Target Audience Size</label>
                                <input type="text" placeholder="E.g 50000" className="form-control" id="" />
                            </div>
                            <div className="form-group col-md-6 ">
                                <label className="order-label-cust" for="deadline">Deadline</label>
                                <input type="date" className="form-control" id="" />
                            </div>
                            <div className="form-group col-md-6 ">
                                <label className="order-label-cust" for="budget">Budget</label>
                                <div className="input-group-prepend ">
                                    <select className="budget-select input-budget form-control" style={{width: "19%;"}} name="currency" id="currency">
                                        <option className="budget-option" value="NGN">&#8358;</option>
                                        <option className="budget-option" value="USD">&#36;</option>
                                    </select>
                                    <input type="text" className="form-control" id="budget" name="budget" placeholder="budget" required />
                                     <span className="text-danger"></span>
                                </div>
                            </div>
                            <div className="form-group col-md-6  ">
                                <label className="order-label-cust" for="budget">Upload document <span className="click-h-order" data-toggle="modal" data-target="#clickAndUpload" >click here</span> </label> <br />
                                <div className="input-group-prepend ml-4 ">
                                    <input type="checkbox" className="order-checked custom-control-input" id="customControlInline" required />

                                  <label className="order-label-cust custom-control-label" for="customControlInline"><span>Check the box to accept our </span><a className="order-terms" 
                                       href="terms.html">Terms and   Conditions</a></label>
                                </div>
                            </div>
                                */}
                            
                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="clickAndUpload" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Upload a file</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>
                                    <div className="modal-body">
                                    <form action="" method="post">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <input type="file" name="" id="" /> 
                                            </div>
                                            <div className="col-md-12 mt-2"> 
                                                <input type="file" name="" id="" />
                                            </div>
                                        </div>
                                        
                                    </form>
                                    </div>
                                    <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Upload</button>
                                    </div>
                                </div>
                                </div>
                            </div>

                            {/* <!-- additional details --> */}

                            <div className="modal fade" id="add-details" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Upload a file</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>
                                    <div className="modal-body">
                                    <form action="" method="post">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <input type="file" name="" id="" /> 
                                            </div>
                                            <div className="col-md-12 mt-2"> 
                                                <input type="file" name="" id="" />
                                            </div>
                                        </div>
                                        
                                    </form>
                                    </div>
                                    <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Upload</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            

                             {/* <!-- Modal end --> */}
                            
                            
                        </div>
                      
         


                         
                    </form>
                </div>

            </div>

        </div>
    </div>


            
        </div>
    )
}
 
export default Order;