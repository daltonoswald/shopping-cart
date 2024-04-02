import Nav from "./Nav"

function Homepage({itemsInCart, totalItems}) {
    return (
        <>
            <Nav itemsInCart={itemsInCart} totalItems={totalItems} />
            <div className="content">
                <h1>Welcome to the homepage!</h1>
            </div>
        </>
    )
}

export default Homepage