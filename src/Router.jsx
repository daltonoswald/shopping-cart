import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Homepage from "./Homepage";
import Store from "./Store";
import ErrorPage from "./ErrorPage";
import ItemPage from "./ItemPage";
import Cart from "./Cart";
import "./styles.css"

function Router() {
    const [itemsInCart, setItemsInCart] = useState([]);
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} />,
            errorElement: <ErrorPage />,
        },
        {
            path: "store",
            element: <Store itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} />,
            errorElement: <ErrorPage />,
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
            element: <Cart itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} />,
            errorElement: <ErrorPage />
        }
    ]);

    return <RouterProvider router={router} />
}

export default Router;