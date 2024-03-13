import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div>
            <h1>Oh no, it doesn't look like there's anything here...</h1>
            <Link to="/">Let's get you back to the homepage.</Link>
        </div>
    )
}

export default ErrorPage