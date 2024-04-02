import Nav from "./Nav";
import FetchStore from "../FetchStore";

function ItemPage() {
    FetchStore();
    return (
        <>
            <Nav />
            <div className="item-page-content">

            </div>
        </>
    )
}

export default ItemPage;