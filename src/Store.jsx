import { Link } from "react-router-dom"
import Nav from "./Nav"
import FetchStore from "./FetchStore"

function Store() {

    return (
        <>
            <Nav />
            <h1>Welcome to the store!</h1>
            <FetchStore />
        </>
    )
}

export default Store