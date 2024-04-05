import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Nav from "./Nav"
import FetchStore from "../FetchStore"
import fetchData from "../FetchStore"

function Store({itemsInCart, setItemsInCart, totalItems}) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error(`Failed to fetch${response.status}`)
                }
                const results = await response.json();
                setData(results)
            } catch (error) {
                setError(error.message)
                setData(null);
            } finally {
                setIsLoading(false)
        }
    }
    fetchData();
    }, [])

    return (
        <>
            <Nav itemsInCart={itemsInCart} totalItems={totalItems} />
            <div className="content">
                <h1>Shop All</h1>
                {/* <FetchStore data={data} setData={setData} isLoading={isLoading} setIsLoading={setIsLoading} handleAddToCart={handleAddToCart} /> */}
                <div className="store-items">
                    {data && (
                        data.map(item => (
                            <Card key={item.id} data={item} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} />
                        ))
                    )}
                </div>
            </div>
        </>
    )
}

function Card({ data, itemsInCart, setItemsInCart }) {
    const [quantity, setQuantity] = useState(1);

    function handleDecrease() {
        if (quantity != 1) {
            setQuantity(quantity - 1);
        }
    }

    function handleAddToCart(e) {
        e.preventDefault();
        for (let i = 0; i < itemsInCart.length; i++) {
            if (itemsInCart[i][0].id == data.id) {
                itemsInCart[i][1] += quantity;
                setItemsInCart([...itemsInCart]);
                setQuantity(1);
                return;
            }
        }
        setItemsInCart((prevItems) => [...prevItems, [data, quantity]]);
        setQuantity(1);
    }

    return (
        <>
        <div key={data.id} id={data.id} className="store-card">
            {/* <img src={data.image} className="item-image" /> */}
            <div className="item-image" style={{backgroundImage: `url(${data.image})`}}></div>
            <p>{data.title}</p>
            <p>${data.price.toFixed(2)}</p>
            <div className="quantity-section">
                <button id="minus" onClick={handleDecrease}>-</button>
                <div className="quantity">{quantity}</div>
                <button id="plus" onClick={() => setQuantity((quantity) => quantity +1)}>+</button>
            </div>
            <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
        </div>
    </>   
    )
}

export default Store