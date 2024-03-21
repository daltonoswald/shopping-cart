/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Nav from "./Nav"

function Cart({itemsInCart, setItemsInCart}) {
    console.log(itemsInCart);
    return (
        <>
            <Nav itemsInCart={itemsInCart} />
            <div className="content">
                <div className="cart-container">
                    <div className="cart-heading">Cart</div>
                    {/* {itemsInCart.map((item) =>
                            <div>{item}</div>
                    )} */}
                    <div className="items-in-cart">
                    {itemsInCart.length !== 0 ? (
                        itemsInCart.map(item => (
                            <CartItem key={item[0].id} data={item} />
                        ))
                    )
                    : (
                            <div className="item-wrapper">Nothing in your cart.</div>
                    )}
                    </div>
                </div>
                <Total itemsInCart={itemsInCart} />
        </div>
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
                <div className="quantity-section">
                    <button id="minus" onClick={handleDecrease}>-</button>
                    <div className="quantity">{quantity}</div>
                    <button id="plus" onClick={() => setQuantity((quantity) => quantity +1)}>+</button>
                </div>
                <div className="item-price">${(data[0].price * (quantity)).toFixed(2)}</div>
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
                // price = price.toFixed(2);
            }
            let fixedPrice = price.toFixed(2);
            setTotalPrice(fixedPrice);
        }
        if (itemsInCart.length > 0) calculateTotal();
    },[itemsInCart])

    return (
        <div className="cart-total">Total: ${totalPrice}</div>
    )
}

export default Cart