import React from 'react'
import './Cart.css'

export default function Cart() {
    return (
        <div>

<div class="container">
                <div class="row cart-back">
                    <div class="col-md-8 offset-md-4 ">

                         
                    <div class="cart-header1">
                        <h4 class="cart-title1 hvr-underline-from-center" id="exampleModalLabel">Cart</h4>
                    </div>
                    
                    <div class="modal-body1">
                        {/* <table class="show-cart table">
                            
                        </table> */}
                        <div class="show-cart ">
                            
                        </div>

                        <div class="cartTotalPrice">Total price: &#x20A6;<span class="total-cart"></span></div>

                    </div>

                    <div class="modal-footer1">
                        <div class="row">
                            <div class="col-md-3"><button class="clear-cart clear-cart hvr-bounce-to-right">Clear Cart</button></div>
                            <div class="col-md-3"> <button type="button" class="order-cart-box hvr-bounce-to-right">Order now</button></div>
                        </div>
                        
                    </div>
               


                    </div>
                </div>

            </div>
            
        </div>
    )
}
