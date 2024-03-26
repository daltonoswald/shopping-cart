/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav"

function Cart({itemsInCart, setItemsInCart}) {
    return (
        <>
            <Nav itemsInCart={itemsInCart} />
            <div className="content">
                <div className="cart-container">
                    <div className="cart-heading">Cart</div>
                    <div className="items-in-cart">
                    {itemsInCart.length !== 0 ? (
                        itemsInCart.map(item => (
                            <CartItem itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} key={item[0].id} id={item[0].id} data={item} />
                        ))
                    )
                    : (
                        <>
                            <div className="empty-cart">There are no items in your cart. 
                            <Link className="continue-shopping" to="/store">Continue Shopping</Link> 
                            </div>
                        </>
                            
                    )}
                    </div>
                </div>
                <Total itemsInCart={itemsInCart} />
        </div>
        </>
    )
}

function CartItem({ data, itemsInCart, setItemsInCart }) {
    const [quantity, setQuantity] = useState(data[1]);

    function handleDecrease() {
        if (quantity != 1) {
            setQuantity(quantity - 1);
        }
    }

    function removeItem(data) {
        const updatedCart = itemsInCart.filter(item => item[0].id !== data[0].id);
        setItemsInCart(updatedCart);
    }

    return (
        <div key={data[0].id} id={data[0].id} className="item-wrapper">
            <img src={data[0].image} className="item-image" />
            <div className="item-card">
                <h3>{data[0].title}</h3>
                <div className="quantity-section">
                    <button id="minus" onClick={handleDecrease}>-</button>
                    <div className="quantity">{quantity}</div>
                    <button id="plus" onClick={() => setQuantity((quantity) => quantity +1)}>+</button>
                </div>
                {/* <button className="remove" onClick={removeItem}>Remove</button> */}
                <div className="item-price">${(data[0].price * (quantity)).toFixed(2)}</div>
            </div>
            <button className="remove" onClick={()=> removeItem(data)}>Remove</button>
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
            let fixedPrice = price.toFixed(2);
            setTotalPrice(fixedPrice);
        }
        if (itemsInCart.length > 0) calculateTotal();
    },[itemsInCart])

    return (
        <div className="total-container">
            <div className="cart-total">Total: ${totalPrice}</div>
            <button className="checkout">Checkout</button>
        </div>
    )
}

export default Cart