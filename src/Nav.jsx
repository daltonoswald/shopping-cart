import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/store">Store</Link>
        </div>
    )
}

export default Nav