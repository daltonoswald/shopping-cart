import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import Homepage from "./Homepage";
import Store from "./Store";
import ErrorPage from "./ErrorPage";
import ItemPage from "./ItemPage";
import Cart from "./Cart";
import Checkout from "./Checkout"
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
    },[itemsInCart, totalItems]);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage itemsInCart={itemsInCart} totalItems={totalItems} />,
            errorElement: <ErrorPage itemsInCart={itemsInCart} />,
        },
        {
            path: "store",
            element: <Store itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} totalItems={totalItems} />,
            errorElement: <ErrorPage itemsInCart={itemsInCart} />,
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
            errorElement: <ErrorPage itemsInCart={itemsInCart} />
        },
        {
            path: "checkout",
            element: <Checkout totalItems={totalItems} totalPrice={totalPrice} />
        }
    ]);

    return <RouterProvider router={router} />
}

export default Router;