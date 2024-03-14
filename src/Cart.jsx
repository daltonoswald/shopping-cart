/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Nav from "./Nav"

function Cart({itemsInCart, setItemsInCart}) {
    console.log(itemsInCart);
    return (
        <>
            <Nav />
            <p>Welcome to the cart.</p>
            <div className="items-in-cart">
                {itemsInCart.map((item) =>
                        <div>{item}</div>
                )}
            </div>
        </>
    )
}

export default Cart