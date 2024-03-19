import Nav from "./Nav"

function Homepage({itemsInCart, setItemsInCart}) {
    return (
        <>
            <Nav itemsInCart={itemsInCart} />
            <h1>Welcome to the homepage!</h1>
        </>
    )
}

export default Homepage