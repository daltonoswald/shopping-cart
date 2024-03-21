import Nav from "./Nav"

function Homepage({itemsInCart, setItemsInCart}) {
    return (
        <>
            <Nav itemsInCart={itemsInCart} />
            <div className="content">
                <h1>Welcome to the homepage!</h1>
            </div>
        </>
    )
}

export default Homepage