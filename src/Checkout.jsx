import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav"

function Checkout({itemsInCart, totalItems, totalPrice}) {
    const shippingCost = 5;
    let totalPriceNum = Number(totalPrice);
    let estimatedTax = ((totalPriceNum + shippingCost) * .07)
    let orderTotal = totalPriceNum + estimatedTax + shippingCost;

    function submitForm() {
        window.location.reload();
    }

    return (
        <>
            <Nav itemsInCart={itemsInCart} totalItems={totalItems} />
            <div className="content">
            <div className="shipping-content">
                <form className="shipping-form" onSubmit={submitForm}>
                    <label>
                        First Name:
                        <input type="text" name="first-name" />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name="last-name" />
                    </label>
                    <label>
                        Street Address:
                        <input type="text" name="address" />
                    </label>
                    <label>
                        City:
                        <input type="text" name="city" />
                    </label>
                    <label>
                        State:
                        <input type="text" name="state" />
                    </label>
                    <label>
                        Zip Code:
                        <input type="text" name="zipcode" />
                    </label>
                    <label>
                        Phone:
                        <input type="tel" name="phone" />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" />
                    </label>
                    <label>
                        Payment Method:
                        <div className="radio-inputs">
                            <input type="radio" id="cash" name="payment" />
                            <label htmlFor="cash">Cash</label>
                        </div>
                        <div className="radio-inputs">
                            <input type="radio" id="check" name="payment" />
                            <label htmlFor="check">Check</label>
                        </div>
                    </label>
                    <input type="submit" value="Place Order" />
                </form>
                <div className="order-summary">
                    <div className="order-row order-title">Order Summary</div>
                    <hr />
                    <div className="order-row">
                        <div className="subtotal-title">Items Subtotal &#40;{totalItems}&#41;:</div>
                        <div className="subtotal-price">${totalPrice}</div>
                    </div>
                    <hr />
                    <div className="order-row">
                        <div className="shipping-type">Standard &#40;3-5 business days&#41;:</div>
                        <div className="shipping-price">${shippingCost}</div>
                    </div>
                    <hr />
                    <div className="order-row">
                        <div className="tax-estimate">Estimated Tax:</div>
                        <div className="tax-cost">${estimatedTax.toFixed(2)}</div>
                    </div>
                    <hr />
                    <div className="order-row">
                        <div className="title">Order Total</div>
                        <div className="total-price">${orderTotal.toFixed(2)}</div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Checkout;