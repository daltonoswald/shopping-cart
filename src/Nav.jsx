import { Link } from "react-router-dom";
import cartIcon from "./assets/shopping-cart.svg"

function Nav() {
    return (
        <div className="nav">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/store">Store</Link>
            </div>
            <div className="cart-link">
                <Link to="/cart"> 
                    <img className="shopping-cart-icon" src={cartIcon} alt="shopping cart" /> 
                </Link>
            </div>
        </div>
    )
}

export default Nav