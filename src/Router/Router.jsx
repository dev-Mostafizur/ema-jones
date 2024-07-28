import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Dashboard from "../Pages/Dashboard/Dashboard";
import SingleProducts from "../Pages/Products/SingleProducts/SingleProducts";
import SingleProductsDetails from "../Pages/Products/SingleProductsDetails/SingleProductsDetails";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout";
import Profile from "../Pages/Dashboard/Profile";
import User from "../Pages/Dashboard/User";


const createRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/products",
                element: <Products></Products>,
                loader: ()=> fetch('https://dummyjson.com/products')
            },
            {
                path: "/dashboard",
                element: <DashboardLayout></DashboardLayout>,
                children: [
                    {
                        path: "/dashboard",
                        element: <Dashboard></Dashboard>,
                    },
                    {
                        path: "/dashboard/profile",
                        element: <Profile></Profile>,
                    },
                    {
                        path: "/dashboard/user",
                        element: <User></User>
                    }
                ]
            },
            {
                path:  "/products/:id",
                element: <SingleProductsDetails></SingleProductsDetails>,
                loader: ({params})=>fetch(`https://dummyjson.com/products/${params.id}}`)
            },
        ]
    }
])
 export default createRouter