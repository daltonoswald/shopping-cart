/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Nav from "./Nav"

function Cart({itemsInCart, setItemsInCart}) {
    console.log(itemsInCart);
    return (
        <>
            <Nav itemsInCart={itemsInCart} />
            <p>Welcome to the cart.</p>
            <div className="items-in-cart">
                {/* {itemsInCart.map((item) =>
                        <div>{item}</div>
                )} */}
                {itemsInCart.length !== 0 ? (
                    itemsInCart.map(item => (
                        <CartItem key={item[0].id} data={item} />
                    ))
                )
                : (
                    <div className="items-in-cart">
                        <p>Nothing in your cart.</p>
                    </div>
                )}
            </div>
            <Total itemsInCart={itemsInCart} />
        </>
    )
}

function CartItem({ data }) {
    const [quantity, setQuantity] = useState(data[1]);

    function handleDecrease() {
        if (quantity != 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="item-wrapper">
            <img src={data[0].image} className="item-image" />
            <div className="item-card">
                <h3>{data[0].title}</h3>
                <p>${data[0].price}</p>
            </div>
            <div className="quantity-selction">
                {/* <button id="minus" onClick={handleDecrease}>-</button> */}
                <div className="quantity">{quantity}</div>
                {/* <button id="plus" onClick={() => setQuantity((quantity) => quantity +1)}>+</button> */}
            </div>
        </div>
    )
}

function Total({ itemsInCart }) {
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        function calculateTotal() {
            let price = 0;
            for(let i = 0; i < itemsInCart.length; i++) {
                price += itemsInCart[i][0].price * itemsInCart[i][1];
            }
            setTotalPrice(price);
        }
        if (itemsInCart.length > 0) calculateTotal();
    },[itemsInCart])

    return (
        <div className="cart-total">Total: ${totalPrice}</div>
    )
}

export default Cart