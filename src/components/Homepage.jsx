import Nav from "./Nav"
import Footer from "./Footer"

function Homepage({itemsInCart, totalItems}) {
    return (
        <>
            <Nav itemsInCart={itemsInCart} totalItems={totalItems} />
            <div className="content">
                <h1>Welcome to the homepage!</h1>
            </div>
            <Footer />
        </>
    )
}

export default Homepage