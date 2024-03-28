import { Link } from "react-router-dom";
import Nav from "./Nav"

function ErrorPage({itemsInCart}) {
    return (
        <div>
            <Nav itemsInCart={itemsInCart} />
            <h1>Oh no, it doesn't look like there's anything here...</h1>
            <Link to="/">Let's get you back to the homepage.</Link>
            <Link to="/store">Or you can continue to our shop.</Link> 
        </div>
    )
}

export default ErrorPage