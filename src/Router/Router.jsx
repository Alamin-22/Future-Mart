import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../Page/Error/Error";
import Home from "../Page/Home/Home";
import Login from "../Page/Authentication/Login/Login";
import SignUp from "../Page/Authentication/SingUp/SingUp";
import Dashboard from "../Page/Dashboard/Dashboard";
import UpdateProduct from "../Page/UpdateProdcut/UpdateProduct";
import User from "../Page/AllUser/User";
import Bookings from "../Page/Bookings/Bookings";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/dash-board",
                element: <Dashboard></Dashboard>
            },
            {
                path: "/updateProduct",
                element: <UpdateProduct></UpdateProduct>
            },
            {
                path: "/allUsers",
                element: <User />,
            },
            {
                path: "/bookings",
                element: <Bookings />
            }
        ]
    },

    {
        path: "/singIn",
        element: <Login></Login>
    },
    {
        path: "/singUp",
        element: <SignUp></SignUp>
    }
]);

export default router;