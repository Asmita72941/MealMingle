import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";

const AppLayout = () => {
    return(
        <Provider store={appStore}>
            <div>
                <Header/>
                <Outlet/> 
            </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([ 
    {
        path : "/",
        element : <AppLayout/>,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "/contact",
                element : <Contact/>
            },
            {
                path : "/restaurants/:resId",
                element : <RestaurantMenu/>
            },
            {
                path : "/cart",
                element : <Cart/>,
            },
        ],
        errorElement : <Error/>
    },   
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);


