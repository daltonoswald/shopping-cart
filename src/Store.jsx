import { useState } from "react";
import { Link } from "react-router-dom"
import Nav from "./Nav"
import FetchStore from "./FetchStore"
import fetchData from "./FetchStore"

function Store({itemsInCart, setItemsInCart}) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    function handleAddToCart(e) {
        e.preventDefault();
        setItemsInCart([...itemsInCart, e.target.id])
        console.log(itemsInCart);
    }

    return (
        <>
            <Nav />
            <h1>Welcome to the store!</h1>
            <FetchStore data={data} setData={setData} isLoading={isLoading} setIsLoading={setIsLoading} handleAddToCart={handleAddToCart} />
        </>
    )
}

export default Store