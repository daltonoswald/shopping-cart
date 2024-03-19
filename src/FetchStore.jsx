/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"

function FetchStore({data, setData, isLoading, setIsLoading, handleAddToCart}) {
    // const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                // const itemList = [];
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error(`Failed to fetch${response.status}`)
                }
                const results = await response.json();
                // itemList.push(results);
                // setData(itemList);
                setData(results)
                console.log(results)
                // console.log(itemList);
                // return itemList
            } catch (error) {
                setError(error.message)
                setData(null);
            } finally {
                setIsLoading(false)
        }
    }
    fetchData();
    }, [])

    if (isLoading) return <p>Loading...</p>

    return (
        <div className="store-items">
            {data.map(data =>
                <>
                    <div key={data.id} id={data.id} className="store-card">
                        <img id={data.id} src={data.image} className="item-image" />
                        <p id={data.title}>{data.title}</p>
                        <p id={data.price}>${data.price}</p>
                        {/* <form className="buy-form" onSubmit={addToCart}> */}
                        <form className="buy-form" id={data.title} onSubmit={handleAddToCart}>
                            <label htmlFor="quantity">Amount</label>
                                <input type="number" id="quantity" name="quantity" min="1" max="5" />
                                <input type="submit" className="add-to-cart" value="Add to Cart" />
                        </form>
                    </div>
                </>
                )}
        </div>
    )
}

export default FetchStore