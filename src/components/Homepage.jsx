import Nav from "./Nav"
import Footer from "./Footer"
import odinIcon from '../assets/the-odin-project.svg'
import { Link } from "react-router-dom"

function Homepage({itemsInCart, totalItems}) {

    return (
        <>
            <Nav itemsInCart={itemsInCart} totalItems={totalItems} />
            <div className="content">
                <div className="welcome-message">
                    <img src={odinIcon} alt='Odin Icon' className='welcome-icon'></img>
                    <div className="welcome-message-right">
                        <h1>Welcome to OdinStore!</h1>
                        <p>OdinStore has all the latest and hottest fashion and technology.</p>
                        <p>Birthdays, holidays, special occassions, or just because - we have gifts for everyone.</p>
                        <p>Shop the latest style and trends.</p>
                        <Link to="/store" className="welcome-link">Shop now</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Homepage