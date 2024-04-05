import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import Store from "./components/Store";
import ErrorPage from "./components/ErrorPage";
import ItemPage from "./components/ItemPage";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout"
import "./styles.css"

function Router() {
    const [itemsInCart, setItemsInCart] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        function calculateTotalItems() {
            let totalItems = 0;
            for (let i = 0; i < itemsInCart.length; i++) {
                totalItems += itemsInCart[i][1];
            }
            setTotalItems(totalItems);
        }
        calculateTotalItems();
    });

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage itemsInCart={itemsInCart} totalItems={totalItems} />,
            errorElement: <ErrorPage itemsInCart={itemsInCart} totalItems={totalItems}/>,
        },
        {
            path: "store",
            element: <Store itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} totalItems={totalItems} />,
            errorElement: <ErrorPage itemsInCart={itemsInCart} totalItems={totalItems}/>,
            // children: [
            //     {
            //         path: "/item/:itemID",
            //         element: <ItemPage />,
            //         errorElement: <ErrorPage />,
            //     }
            // ]
        },
        {
            path: "cart",
            element: <Cart itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice} totalItems={totalItems} setTotalItems={setTotalItems} />,
            errorElement: <ErrorPage itemsInCart={itemsInCart} totalItems={totalItems}/>
        },
        {
            path: "checkout",
            element: <Checkout itemsInCart={itemsInCart} totalItems={totalItems} setTotalItems={setTotalItems} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />,
            errorElement: <ErrorPage itemsInCart={itemsInCart} totalItems={totalItems}/>
        }
    ]);

    return <RouterProvider router={router} />
}

export default Router;