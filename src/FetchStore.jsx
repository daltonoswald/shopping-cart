import { useState, useEffect } from "react"

function FetchStore() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const itemList = [];
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error(`Failed to fetch${response.status}`)
                }
                const results = await response.json();
                itemList.push(results);
                setData(itemList);
                console.log(itemList);
            } catch (error) {
                setError(error.message)
                setData(null);
            } finally {
                setIsLoading(false)
        }
    }
    fetchData();
    }, [setData])

    if (isLoading) return <p>Loading...</p>

    return (
        <div className="store-items">
            {data[0].map(data =>
                <>
                    <div key={data.title} id={data.title} className="store-card">
                        <img id={data.title} src={data.image} className="item-image" />
                        <p id={data.title}>{data.title}</p>
                    </div>
                </>
                )}
        </div>
    )
}

export default FetchStore