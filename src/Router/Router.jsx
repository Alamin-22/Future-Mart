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
import PrivateRoute from "../Private/PrivateRoute";
import Home2 from "../Page/Home2/Home2";

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
                path: "/product2",
                element: <Home2></Home2>
            },
            {
                path: "/dash-board",
                element: <Dashboard></Dashboard>
            },
            {
                path: "/updateProduct",
                element: <PrivateRoute><UpdateProduct /></PrivateRoute>,
            },
            {
                path: "/allUsers",
                element: <PrivateRoute><User /></PrivateRoute>,
            },
            {
                path: "/bookings",
                element: <PrivateRoute><Bookings /></PrivateRoute>
            }
        ]
    },

    {
        path: "/ripon-login",
        element: <Login></Login>
    },
    {
        path: "/ripon-singUp",
        element: <SignUp></SignUp>
    }
]);

export default router;